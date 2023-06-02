import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import {DatetimeFormat, TRIP_TYPES} from '../const.js';
import {convertToTitleCase, convertKeysToCamelCase, formatDate} from '../utils.js';

const createEventTypeDropdownTemplate = () =>
  TRIP_TYPES.map((type) =>
    `<div class="event__type-item">
      <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${convertToTitleCase(type)}</label>
    </div>`
  ).join('');

const createDestinationOptionsTemplate = (destinations) =>
  destinations.map((destination) =>
    `<option value="${destination.name}"></option>`).join('');

const createFormHeaderTemplate = (point, destinationList, destination) => {
  const {basePrice, dateFrom, dateTo, type} = convertKeysToCamelCase(point);

  const startDatetime = dateFrom ? formatDate(dateFrom, DatetimeFormat.FORM_DATETIME) : '';
  const endDatetime = dateTo ? formatDate(dateTo, DatetimeFormat.FORM_DATETIME) : '';

  const typeName = type ? type : TRIP_TYPES[0];

  const destinationName = destination.name ? destination.name : '';

  const price = basePrice ? basePrice : '';

  return `<header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${typeName}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${createEventTypeDropdownTemplate()}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${typeName}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationName}" list="destination-list-1">
      <datalist id="destination-list-1">
        ${createDestinationOptionsTemplate(destinationList)}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDatetime}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDatetime}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>`;
};

const createOffersTemplate = (pointOffers, offersList) =>
  offersList.map((offer, index) => {
    const offerChecked = pointOffers.filter((el) => el === offer.id).length;
    return (
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${index}" type="checkbox" name="event-offer-comfort" ${offerChecked ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${index}">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`);
  }).join('');

const createFormOffersTemplate = (pointOffers, offersList) =>
  `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      ${createOffersTemplate(pointOffers, offersList)}
    </div>
  </section>`;

const createPicturesTemplate = (pictures) =>
  pictures.map((picture) =>
    `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`);

const createFormDestinationTemplate = (destination) => {
  const description = destination.description ? destination.description : '';
  const pictures = destination.pictures;

  return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${description}</p>

    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${createPicturesTemplate(pictures)}
      </div>
    </div>
  </section>`;
};

const createFormDetailsTemplate = (point, offersList, destination) =>
  `<section class="event__details">
    ${offersList.length ? createFormOffersTemplate(point.offers, offersList) : ''}
    ${destination ? createFormDestinationTemplate(destination) : ''}
  </section>`;

const createEditFormTemplate = (point, destinationList, offersList, destination) =>
  `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      ${createFormHeaderTemplate(point, destinationList, destination)}
      ${createFormDetailsTemplate(point, offersList, destination)}
    </form>
  </li>`;

export default class EditFormView extends AbstractStatefulView {
  #destinationList = null;
  #offersList = null;
  #destination = null;
  #handleFormSubmit = null;
  #handleRollupButtonClick = null;

  constructor({
    tripPoint,
    destinationList,
    offersList,
    pointDestination,
    handleFormSubmit,
    handleRollupButtonUpClick
  }) {
    super();

    this._setState(tripPoint);
    this.#destinationList = destinationList;
    this.#offersList = offersList;
    this.#destination = pointDestination;

    this.#handleFormSubmit = handleFormSubmit;
    this.#handleRollupButtonClick = handleRollupButtonUpClick;

    this._restoreHandlers();
  }

  get template() {
    return createEditFormTemplate(
      this._state,
      this.#destinationList,
      this.#offersList,
      this.#destination
    );
  }

  _restoreHandlers = () => {
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#rollupButtonClickHandler);
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(this._state);
  };

  #rollupButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleRollupButtonClick();
  };
}
