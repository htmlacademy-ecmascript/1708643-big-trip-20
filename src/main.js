import MainPresenter from './presenter/main-presenter.js';
import TripPointsModel from './model/trip-points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';

const tripPointsModel = new TripPointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();

const mainPresenter = new MainPresenter({
  pointsModel: tripPointsModel,
  offersModel: offersModel,
  destinationsModel: destinationsModel
});
mainPresenter.init();
