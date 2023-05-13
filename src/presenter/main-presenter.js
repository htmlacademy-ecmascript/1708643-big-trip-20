import {RenderPosition, render, replace} from '../framework/render.js';
import TripInfoView from './../view/trip-info-view.js';
import FilterView from './../view/filter-view.js';
import SortView from './../view/sort-view.js';
import TripEventsListView from './../view/trip-events-list-view.js';
import TripPointView from './../view/trip-point-view.js';
import EditFormView from './../view/edit-form-view.js';
import FormHeaderView from './../view/form-header-view.js';
import FormDetailsView from './../view/form-details-view.js';
import FormDestinationView from './../view/form-destination-view.js';
import FormOffersView from './../view/form-offers-view.js';

export default class MainPresenter {
  #contentComponent = new TripEventsListView();

  #parentContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #tripPoints = [];
  #destinations = [];

  constructor({parentContainer, pointsModel, offersModel, destinationsModel}) {
    this.#parentContainer = parentContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  #renderTripEvent(tripPoint) {
    const offers = this.#offersModel.getByType(tripPoint.type);
    const destination = this.#destinationsModel.getById(tripPoint.id);

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToTripPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const tripPointComponent = new TripPointView({
      tripPoint: tripPoint,
      offers: offers,
      destination: destination,
      onRollupButtonClick: () => {
        replaceTripPointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const formComponent = new EditFormView({
      onFormSubmit: () => {
        replaceFormToTripPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    const formElement = formComponent.element.querySelector('.event');
    const formDetailsComponent = new FormDetailsView();

    render(new FormHeaderView({
      tripPoint: tripPoint,
      destinationList: this.#destinations,
      destination: destination,
      onRollupButtonClick: () => {
        replaceFormToTripPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    }), formElement);

    render(formDetailsComponent, formElement);
    if (destination) {
      render(new FormDestinationView({destination: destination}),
        formDetailsComponent.element);
    }

    if (offers.length) {
      render(new FormOffersView({
        pointOffers: tripPoint.offers,
        offers: offers
      }), formDetailsComponent.element);
    }

    function replaceTripPointToForm() {
      replace(formComponent, tripPointComponent);
    }

    function replaceFormToTripPoint() {
      replace(tripPointComponent, formComponent);
    }

    render(tripPointComponent, this.#contentComponent.element);
  }

  init() {
    const tripMainElement = this.#parentContainer.querySelector('.trip-main');
    const tripControlsElement = tripMainElement.querySelector('.trip-controls__filters');
    const tripEventsElement = this.#parentContainer.querySelector('.trip-events');

    this.#tripPoints = this.#pointsModel.points;
    this.#destinations = this.#destinationsModel.destinations;

    render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
    render(new FilterView(), tripControlsElement);
    render(new SortView(), tripEventsElement);
    render(this.#contentComponent, tripEventsElement);

    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderTripEvent(this.#tripPoints[i], this.#destinations);
    }
  }
}
