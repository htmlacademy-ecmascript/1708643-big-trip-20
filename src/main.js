import MainPresenter from './presenter/main-presenter.js';
import TripPointsModel from './model/trip-points-model.js';

const siteMainElement = document.querySelector('.page-body');

const tripPointsModel = new TripPointsModel();
const mainPresenter = new MainPresenter({
  parentContainer: siteMainElement,
  pointsModel: tripPointsModel
});
mainPresenter.init();
