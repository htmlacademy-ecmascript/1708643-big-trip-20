import TripPointView from './../view/trip-point-view.js';
import {render} from '../render.js';

export default class TripPointPresenter {
  pointComponent = new TripPointView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.pointComponent, this.parentContainer);
  }
}
