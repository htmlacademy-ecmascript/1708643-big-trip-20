import FilterView from './../view/filter-view.js';
import {render} from '../render.js';

export default class FilterPresenter {
  filterComponent = new FilterView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.filterComponent, this.parentContainer);
  }
}
