import PagePresenter from './presenter/page-presenter.js';
import TripPointsModel from './model/trip-points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import FilterModel from './model/filter-model.js';

const tripPointsModel = new TripPointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const filterModel = new FilterModel();

const pagePresenter = new PagePresenter({
  pointsModel: tripPointsModel,
  offersModel,
  destinationsModel,
  filterModel
});

pagePresenter.init();
