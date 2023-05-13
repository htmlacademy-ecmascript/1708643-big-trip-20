import AbstractView from '../framework/view/abstract-view.js';

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

export default class FormOffersView extends AbstractView {
  #pointOffers;
  #offers;

  constructor({pointOffers, offers}) {
    super();

    this.#pointOffers = pointOffers;
    this.#offers = offers;
  }

  get template() {
    return createFormOffersTemplate(this.#pointOffers, this.#offers);
  }
}
