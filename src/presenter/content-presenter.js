import TripEventsListView from './../view/trip-events-list-view.js';
import TripPointView from './../view/trip-point-view.js';
import EditFormView from './../view/edit-form-view.js';
import {render} from '../render.js';

export default class ContentPresenter {
  contentComponent = new TripEventsListView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.contentComponent, this.parentContainer);

    render(new EditFormView(), this.contentComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPointView(), this.contentComponent.getElement());
    }
  }
}
