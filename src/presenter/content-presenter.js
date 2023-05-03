import TripEventsListView from './../view/trip-events-list-view.js';
import TripPointPresenter from './trip-point-presenter.js';
import EditFormPresenter from './edit-form-presenter.js';
import {render} from '../render.js';

export default class ContentPresenter {
  contentComponent = new TripEventsListView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.contentComponent, this.parentContainer);

    const editFormPresenter = new EditFormPresenter({parentContainer: this.contentComponent.getElement()});
    editFormPresenter.init();

    for (let i = 0; i < 3; i++) {
      const tripPointPresenter = new TripPointPresenter({parentContainer: this.contentComponent.getElement()});
      tripPointPresenter.init();
    }
  }
}
