import TripInfoPresenter from './trip-info-presenter.js';
import FilterPresenter from './filter-presenter.js';
import SortPresenter from './sort-presenter.js';
import ContentPresenter from './content-presenter.js';

export default class MainPresenter {

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    const tripMainElement = this.parentContainer.querySelector('.trip-main');
    const tripControlsElement = tripMainElement.querySelector('.trip-controls__filters');
    const tripEventsElement = this.parentContainer.querySelector('.trip-events');

    const tripInfoPresenter = new TripInfoPresenter({parentContainer: tripMainElement});
    tripInfoPresenter.init();

    const filterPresenter = new FilterPresenter({parentContainer: tripControlsElement});
    filterPresenter.init();

    const sortPresenter = new SortPresenter({parentContainer: tripEventsElement});
    sortPresenter.init();

    const contentPresenter = new ContentPresenter({parentContainer: tripEventsElement});
    contentPresenter.init();
  }
}
