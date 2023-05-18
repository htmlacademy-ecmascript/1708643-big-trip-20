import {RenderPosition, render, replace} from '../framework/render.js';
import TripPointView from '../view/trip-point-view.js';
import EditFormView from '../view/edit-form-view.js';
import FormHeaderView from '../view/form-header-view.js';
import FormDetailsView from '../view/form-details-view.js';
import FormDestinationView from '../view/form-destination-view.js';
import FormOffersView from '../view/form-offers-view.js';

export default class TripPointPresenter {
  #parentContainer = null;
  #offersModel = null;
  #destinationsModel = null;

  #tripPointComponent = null;
  #formComponent = null;

  constructor({parentContainer, offersModel, destinationsModel}) {
    this.#parentContainer = parentContainer;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  #replaceTripPointToForm() {
    replace(this.#formComponent, this.#tripPointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToTripPoint() {
    replace(this.#tripPointComponent, this.#formComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToTripPoint();
    }
  };

  #handleRollupButtonDownClick = () => {
    this.#replaceTripPointToForm();
  };

  #handleRollupButtonUpClick = () => {
    this.#replaceFormToTripPoint();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToTripPoint();
  };

  init(tripPoint) {
    const offers = this.#offersModel.getByType(tripPoint.type);
    const destination = this.#destinationsModel.getById(tripPoint.id);
    const destinations = this.#destinationsModel.destinations;

    this.#tripPointComponent = new TripPointView({
      tripPoint: tripPoint,
      offers: offers,
      destination: destination,
      onRollupButtonClick: this.#handleRollupButtonDownClick
    });

    this.#formComponent = new EditFormView({
      onFormSubmit: this.#handleFormSubmit
    });

    const formElement = this.#formComponent.element.querySelector('.event');
    const formDetailsComponent = new FormDetailsView();

    render(new FormHeaderView({
      tripPoint: tripPoint,
      destinationList: destinations,
      destination: destination,
      onRollupButtonClick: this.#handleRollupButtonUpClick
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

    render(this.#tripPointComponent, this.#parentContainer);
  }
}
