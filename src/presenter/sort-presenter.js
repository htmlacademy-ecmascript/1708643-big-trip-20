import SortView from './../view/sort-view.js';
import {render} from '../render.js';

export default class SortPresenter {
  sortComponent = new SortView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.sortComponent, this.parentContainer);
  }
}
