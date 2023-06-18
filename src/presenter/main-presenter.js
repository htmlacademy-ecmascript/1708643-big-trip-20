import {RenderPosition, render, remove} from '../framework/render.js';
import TripInfoView from './../view/trip-info-view.js';
import SortView from './../view/sort-view.js';
import TripEventsListView from './../view/trip-events-list-view.js';
import NoTripPointView from './../view/no-trip-point-view.js';
import TripPointPresenter from './trip-point-presenter.js';
import {comparePointsByPrice, comparePointsByTime, comparePointsByDate, getFilters} from '../utils.js';
import {FilterType, SortType, UpdateType, UserAction} from '../const.js';

export default class MainPresenter {
  #tripEventsElement = document.querySelector('.trip-events');
  #tripMainElement = document.querySelector('.trip-main');

  #contentComponent = new TripEventsListView();
  #sortComponent = null;
  #noTripPointComponent = null;

  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #filterModel = null;

  #pointPresenters = new Map();
  #currentSortType = SortType.DAY;
  #currentFilterType = FilterType.EVERYTHING;

  constructor({pointsModel, offersModel, destinationsModel, filterModel}) {
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#filterModel = filterModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#currentFilterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    const filteredPoints = getFilters()[this.#currentFilterType](points);

    switch (this.#currentSortType) {
      case SortType.PRICE:
        filteredPoints.sort(comparePointsByPrice);
        break;
      case SortType.TIME:
        filteredPoints.sort(comparePointsByTime);
        break;
      default:
        filteredPoints.sort(comparePointsByDate);
    }

    return filteredPoints;
  }

  get offers() {
    return this.#offersModel.offers;
  }

  get destinations() {
    return this.#destinationsModel.destinations;
  }

  init = () => {
    this.#renderTripInfo();
    this.#renderContent();
  };

  #renderContent = () => {
    if (!this.points.length) {
      this.#renderNoTripPointComponent();
      return;
    }

    this.#renderSort();
    this.#renderTripEventsListComponent();

    this.points.forEach((point) => this.#renderTripEvent(point));
  };

  #clearContent = ({resetSortType = false} = {}) => {
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

  #renderNoTripPointComponent = () => {
    this.#noTripPointComponent = new NoTripPointView({
      filterType: this.#currentFilterType
    });
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
      currentSortType: this.#currentSortType,
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
        this.#clearContent();
        this.#renderContent();
        break;
      case UpdateType.MAJOR:
        this.#clearContent({resetSortType: true});
        this.#renderContent();
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
    this.#clearContent();
    this.#renderContent();
  };
}
