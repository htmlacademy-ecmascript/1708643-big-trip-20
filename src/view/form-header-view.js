import {createElement} from '../render.js';
import {DATE_TIME_FORMAT, TRIP_TYPES} from '../const.js';
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

  const startDatetime = dateFrom ? formatDate(dateFrom, DATE_TIME_FORMAT.formDateTime) : '';
  const endDatetime = dateTo ? formatDate(dateTo, DATE_TIME_FORMAT.formDateTime) : '';

  const pointType = type ? type : TRIP_TYPES[0];
  const typeName = convertToTitleCase(pointType);

  const destinationName = destination.name ? destination.name : '';

  const price = basePrice ? basePrice : '';

  return `<header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${pointType}.png" alt="Event type icon">
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
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>`;
};

export default class FormHeaderView {
  constructor({tripPoint, destinationList, destination}) {
    this.point = tripPoint;
    this.destinationList = destinationList;
    this.destination = destination;
  }

  getTemplate() {
    return createFormHeaderTemplate(
      this.point,
      this.destinationList,
      this.destination
    );
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
