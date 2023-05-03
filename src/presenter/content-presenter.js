import TripEventsListView from './../view/trip-events-list-view.js';
import TripPointPresenter from './trip-point-presenter.js';
import EditFormPresenter from './edit-form-presenter.js';
import {render} from '../render.js';

export default class ContentPresenter {
  contentComponent = new TripEventsListView();

  constructor({parentContainer, tripPointsModel}) {
    this.parentContainer = parentContainer;
    this.tripPointsModel = tripPointsModel;
  }

  init() {
    this.tripPoints = [...this.tripPointsModel.getPoints()];

    render(this.contentComponent, this.parentContainer);

    const editFormPresenter = new EditFormPresenter({
      parentContainer: this.contentComponent.getElement(),
      tripPoint: this.tripPoints[0]
    });
    editFormPresenter.init();

    for (let i = 0; i < this.tripPoints.length; i++) {
      const tripPointPresenter = new TripPointPresenter({
        parentContainer: this.contentComponent.getElement(),
        tripPoint: this.tripPoints[i]
      });
      tripPointPresenter.init();
    }
  }
}
