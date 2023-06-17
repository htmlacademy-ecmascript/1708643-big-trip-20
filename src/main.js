import FilterPresenter from './presenter/filter-presenter.js';
import MainPresenter from './presenter/main-presenter.js';
import TripPointsModel from './model/trip-points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import FilterModel from './model/filter-model.js';

const tripPointsModel = new TripPointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter({
  filterModel,
  pointsModel: tripPointsModel
});

const mainPresenter = new MainPresenter({
  pointsModel: tripPointsModel,
  offersModel: offersModel,
  destinationsModel: destinationsModel
});

filterPresenter.init();
mainPresenter.init();
