import PagePresenter from './presenter/page-presenter.js';
import TripPointsModel from './model/trip-points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import FilterModel from './model/filter-model.js';
import PointsApiService from './service/points-api-service.js';
import OffersApiService from './service/offers-api-service.js';
import DestinationsApiService from './service/destinations-api-service.js';

const AUTHORIZATION = 'Basic hS2sfS34wcl1sa2j';
const END_POINT = 'https://20.objects.pages.academy/big-trip';

const pointsModel = new TripPointsModel({
  apiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const offersModel = new OffersModel({
  apiService: new OffersApiService(END_POINT, AUTHORIZATION)
});
const destinationsModel = new DestinationsModel({
  apiService: new DestinationsApiService(END_POINT, AUTHORIZATION)
});
const filterModel = new FilterModel();

const pagePresenter = new PagePresenter();

const loadData = async () => {
  await offersModel.init();
  await destinationsModel.init();
  await pointsModel.init();
};

loadData();
pagePresenter.init(pointsModel, offersModel, destinationsModel, filterModel);
