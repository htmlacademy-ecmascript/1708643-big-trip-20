import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import TripEventsListView from './view/trip-events-list-view.js';
import TripPointView from './view/trip-point-view.js';
import EditFormView from './view/edit-form-view.js';
import {RenderPosition, render} from './render.js';

const tripMainElement = document.querySelector('.trip-main');
const tripControlsElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripControlsElement);
render(new SortView(), tripEventsElement);

const tripEventsListElement = new TripEventsListView();
render(tripEventsListElement, tripEventsElement);

render(new EditFormView(), tripEventsListElement.getElement());

for (let i = 0; i < 3; i++) {
  render(new TripPointView(), tripEventsListElement.getElement());
}
