import AbstractView from '../framework/view/abstract-view.js';
import {DatetimeFormat} from '../const.js';
import {convertKeysToCamelCase, formatDate, getDuration} from '../utils.js';

const createOffersListTemplate = (pointOffers, offers) =>
  pointOffers.map((pointOfferId) => {
    const offer = offers.find((el) => el.id === pointOfferId);
    return `<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>`;
  }).join('');

const createTripPointTemplate = (point, offersList, destination) => {
  const {basePrice, dateFrom, dateTo, isFavorite, type, offers} = convertKeysToCamelCase(point);

  const shortDate = formatDate(dateFrom, DatetimeFormat.SHORT_DATE);

  const startDatetime = formatDate(dateFrom, DatetimeFormat.DATETIME);
  const startDate = formatDate(dateFrom, DatetimeFormat.DATE);
  const startTime = formatDate(dateFrom, DatetimeFormat.TIME);

  const endDatetime = formatDate(dateTo, DatetimeFormat.DATE);
  const endTime = formatDate(dateTo, DatetimeFormat.TIME);

  const duration = getDuration(dateFrom, dateTo);

  const destinationName = destination.name;

  const favoriteClassName = isFavorite
    ? 'event__favorite-btn--active'
    : '';

  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime=${startDate}>${shortDate}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${destinationName}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime=${startDatetime}>${startTime}</time>
        &mdash;
        <time class="event__end-time" datetime=${endDatetime}>${endTime}</time>
      </p>
      <p class="event__duration">${duration}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${createOffersListTemplate(offers, offersList)}
    </ul>
    <button class="event__favorite-btn ${favoriteClassName}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};

export default class TripPointView extends AbstractView {
  #point = null;
  #offers = null;
  #destination = null;
  #handleRollupButtonClick = null;

  constructor({tripPoint, offers, destination, onRollupButtonClick}) {
    super();

    this.#point = tripPoint;
    this.#offers = offers;
    this.#destination = destination;

    this.#handleRollupButtonClick = onRollupButtonClick;
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#rollupButtonClickHandler);
  }

  get template() {
    return createTripPointTemplate(
      this.#point,
      this.#offers,
      this.#destination
    );
  }

  #rollupButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleRollupButtonClick();
  };
}