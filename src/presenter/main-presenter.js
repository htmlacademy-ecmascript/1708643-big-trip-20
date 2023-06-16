import {RenderPosition, render, remove} from '../framework/render.js';
import TripInfoView from './../view/trip-info-view.js';
import FilterView from './../view/filter-view.js';
import SortView from './../view/sort-view.js';
import TripEventsListView from './../view/trip-events-list-view.js';
import NoTripPointView from './../view/no-trip-point-view.js';
import TripPointPresenter from './trip-point-presenter.js';
import {generateFilter} from '../mock/filter.js';
import {comparePointsByPrice, comparePointsByTime, comparePointsByDate} from '../utils.js';
import {SortType, UpdateType, UserAction} from '../const.js';

export default class MainPresenter {
  #tripEventsElement = document.querySelector('.trip-events');
  #tripMainElement = document.querySelector('.trip-main');

  #contentComponent = new TripEventsListView();
  #sortComponent = null;
  #noTripPointComponent = null;

  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #pointPresenters = new Map();
  #currentSortType = SortType.DAY;

  constructor({pointsModel, offersModel, destinationsModel}) {
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    const points = [...this.#pointsModel.points];

    switch (this.#currentSortType) {
      case SortType.PRICE:
        points.sort(comparePointsByPrice);
        break;
      case SortType.TIME:
        points.sort(comparePointsByTime);
        break;
      default:
        points.sort(comparePointsByDate);
    }

    return points;
  }

  get offers() {
    return this.#offersModel.offers;
  }

  get destinations() {
    return this.#destinationsModel.destinations;
  }

  init = () => {
    this.#renderPage();
  };

  #renderPage = () => {
    this.#renderFilters();

    if (!this.points.length) {
      this.#renderNoTripPointComponent();
      return;
    }

    this.#renderTripInfo();
    this.#renderSort();
    this.#renderTripEventsListComponent();

    this.points.forEach((point) => this.#renderTripEvent(point));
  };

  #clearPage = ({resetSortType = false} = {}) => {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    remove(this.#sortComponent);
    if (this.#noTripPointComponent) {
      remove(this.#noTripPointComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  };

  #renderFilters = () => {
    const tripControlsElement = this.#tripMainElement.querySelector('.trip-controls__filters');
    const filters = generateFilter(this.points);

    render(new FilterView({filters}), tripControlsElement);
  };

  #renderNoTripPointComponent = () => {
    this.#noTripPointComponent = new NoTripPointView();
    render(this.#noTripPointComponent, this.#tripEventsElement);
  };

  #renderTripInfo = () => {
    render(new TripInfoView({
      tripPoints: this.points,
      destinations: this.destinations,
      offers: this.offers
    }), this.#tripMainElement, RenderPosition.AFTERBEGIN);
  };

  #renderTripEventsListComponent = () => {
    render(this.#contentComponent, this.#tripEventsElement);
  };

  #renderTripEvent = (tripPoint) => {
    const tripPointPresenter = new TripPointPresenter({
      parentContainer: this.#contentComponent.element,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,
      handleDataChange: this.#handleViewAction,
      handleModeChange: this.#handleModeChange
    });

    tripPointPresenter.init(tripPoint);
    this.#pointPresenters.set(tripPoint.id, tripPointPresenter);
  };

  #renderSort = () => {
    this.#sortComponent = new SortView({
      handleSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#tripEventsElement);
  };

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        break;
      case UpdateType.MAJOR:
        break;
    }
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearPage();
    this.#renderPage();
  };
}
