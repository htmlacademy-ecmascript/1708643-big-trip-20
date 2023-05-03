import TripPointView from './../view/trip-point-view.js';
import {render} from '../render.js';

export default class TripPointPresenter {
  constructor({parentContainer, tripPoint}) {
    this.parentContainer = parentContainer;
    this.tripPoint = tripPoint;
    this.pointComponent = new TripPointView({tripPoint: this.tripPoint});
  }

  init() {
    render(this.pointComponent, this.parentContainer);
  }
}
