import AbstractView from '../framework/view/abstract-view.js';
import {DatetimeFormat} from '../const.js';
import {comparePointsByDate, formatDate} from '../utils.js';

const createTripInfoMainTemplate = (points, destinations) => {
  points.sort((a, b) => comparePointsByDate(a, b));

  const startDate = formatDate(points[0].date_from, DatetimeFormat.SHORT_DATE);
  const endDate = formatDate(points[points.length - 1].date_to, DatetimeFormat.SHORT_DATE);

  return `<div class="trip-info__main">
    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

    <p class="trip-info__dates">${startDate}&nbsp;&mdash;&nbsp;${endDate}</p>
  </div>`;
};

const createTripInfoCostTemplate = (points, offers) => {
  let cost = 0;

  points.map((point) => {
    cost += point.base_price ? point.base_price : 0;
    const offersList = offers.find((el) => el.type === point.type).offers;
    point.offers.map((pointOfferId) => {
      const offer = offersList.find((el) => el.id === pointOfferId);
      cost += offer.price ? offer.price : 0;
    });
  });

  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
  </p>`;
};

const createTripInfoTemplate = (points, destinations, offers) =>
  `<section class="trip-main__trip-info  trip-info">
    ${createTripInfoMainTemplate(points, destinations)}

    ${createTripInfoCostTemplate(points, offers)}
  </section>`;

export default class TripInfoView extends AbstractView {
  #points;
  #destinations;
  #offers;

  constructor({tripPoints, destinations, offers}) {
    super();

    this.#points = tripPoints;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template() {
    return createTripInfoTemplate(this.#points, this.#destinations, this.#offers);
  }
}
