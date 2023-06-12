import {RenderPosition, render} from '../framework/render.js';
import TripInfoView from './../view/trip-info-view.js';
import FilterView from './../view/filter-view.js';
import SortView from './../view/sort-view.js';
import TripEventsListView from './../view/trip-events-list-view.js';
import NoTripPointView from './../view/no-trip-point-view.js';
import TripPointPresenter from './trip-point-presenter.js';
import {generateFilter} from '../mock/filter.js';
import {comparePointsByPrice, comparePointsByTime, comparePointsByDate} from '../utils.js';
import {SortType} from '../const.js';

export default class MainPresenter {
  #tripEventsElement = document.querySelector('.trip-events');
  #contentComponent = new TripEventsListView();
  #sortComponent = null;

  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #pointPresenters = new Map();
  #currentSortType = SortType.DAY;

  constructor({pointsModel, offersModel, destinationsModel}) {
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
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

  #renderTripEvent = (tripPoint) => {
    const tripPointPresenter = new TripPointPresenter({
      parentContainer: this.#contentComponent.element,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,
      handleDataChange: this.#handlePointChange,
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

  #renderTripEventsList = () => {
    render(this.#contentComponent, this.#tripEventsElement);

    this.points.forEach((point) => this.#renderTripEvent(point));
  };

  #clearTripEventsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #handlePointChange = (updatedPoint) => {
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearTripEventsList();
    this.#renderTripEventsList();
  };

  init() {
    const tripMainElement = document.querySelector('.trip-main');
    const tripControlsElement = tripMainElement.querySelector('.trip-controls__filters');

    const filters = generateFilter(this.points);

    render(new FilterView({filters}), tripControlsElement);

    if (!this.points.length) {
      render(new NoTripPointView(), this.#tripEventsElement);
      return;
    }

    render(new TripInfoView({
      tripPoints: this.points,
      destinations: this.destinations,
      offers: this.offers
    }), tripMainElement, RenderPosition.AFTERBEGIN);

    this.#renderSort();
    this.#renderTripEventsList();
  }
}
