import TripInfoView from './../view/trip-info-view.js';
import {RenderPosition, render} from '../render.js';

export default class TripInfoPresenter {
  infoComponent = new TripInfoView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.infoComponent, this.parentContainer, RenderPosition.AFTERBEGIN);
  }
}
