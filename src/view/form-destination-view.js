import AbstractView from '../framework/view/abstract-view.js';

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

export default class FormDestinationView extends AbstractView {
  #destination;

  constructor({destination}) {
    super();

    this.#destination = destination;
  }

  get template() {
    return createFormDestinationTemplate(this.#destination);
  }
}
