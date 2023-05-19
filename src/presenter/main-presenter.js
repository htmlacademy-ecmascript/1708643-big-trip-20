import {RenderPosition, render} from '../framework/render.js';
import TripInfoView from './../view/trip-info-view.js';
import FilterView from './../view/filter-view.js';
import SortView from './../view/sort-view.js';
import TripEventsListView from './../view/trip-events-list-view.js';
import NoTripPointView from './../view/no-trip-point-view.js';
import TripPointPresenter from './trip-point-presenter.js';
import {generateFilter} from '../mock/filter.js';

export default class MainPresenter {
  #contentComponent = new TripEventsListView();

  #parentContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #tripPoints = [];
  #destinations = [];
  #offers = [];

  constructor({parentContainer, pointsModel, offersModel, destinationsModel}) {
    this.#parentContainer = parentContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  #renderTripEvent = (tripPoint) => {
    const tripPointPresenter = new TripPointPresenter({
      parentContainer: this.#contentComponent.element,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel
    });

    tripPointPresenter.init(tripPoint);
  };

  init() {
    const tripMainElement = this.#parentContainer.querySelector('.trip-main');
    const tripControlsElement = tripMainElement.querySelector('.trip-controls__filters');
    const tripEventsElement = this.#parentContainer.querySelector('.trip-events');

    this.#tripPoints = this.#pointsModel.points;
    this.#destinations = this.#destinationsModel.destinations;
    this.#offers = this.#offersModel.offers;

    const filters = generateFilter(this.#tripPoints);

    render(new FilterView({filters}), tripControlsElement);

    if (!this.#tripPoints.length) {
      render(new NoTripPointView(), tripEventsElement);
      return;
    }

    render(new TripInfoView({
      tripPoints: this.#tripPoints,
      destinations: this.#destinations,
      offers: this.#offers
    }), tripMainElement, RenderPosition.AFTERBEGIN);

    render(new SortView(), tripEventsElement);

    render(this.#contentComponent, tripEventsElement);

    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderTripEvent(this.#tripPoints[i]);
    }
  }
}
