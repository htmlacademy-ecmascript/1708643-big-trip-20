import HeaderPresenter from './header-presenter.js';
import MainPresenter from './main-presenter.js';
import NewPointButtonView from '../view/new-point-button-view.js';

export default class PagePresenter {
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #filterModel = null;

  #headerPresenter = null;
  #mainPresenter = null;

  #newPointButtonComponent = null;

  init = (pointsModel, offersModel, destinationsModel, filterModel) => {
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#filterModel = filterModel;

    this.#newPointButtonComponent = new NewPointButtonView({
      handleClick: this.#handleNewPointButtonClick
    });

    this.#headerPresenter = new HeaderPresenter({
      pointsModel: this.#pointsModel,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,
      filterModel: this.#filterModel,
      buttonComponent: this.#newPointButtonComponent
    });

    this.#mainPresenter = new MainPresenter({
      pointsModel: this.#pointsModel,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,
      filterModel: this.#filterModel,
      handleNewPointDestroy: this.#handleNewPointFormClose,
      handleServerError: this.#blockNewPointButton
    });

    this.#headerPresenter.init();
    this.#mainPresenter.init();
  };

  #blockNewPointButton = () => {
    this.#newPointButtonComponent.element.disabled = true;
  };

  #handleNewPointFormClose = () => {
    this.#newPointButtonComponent.element.disabled = false;
  };

  #handleNewPointButtonClick = () => {
    this.#mainPresenter.createPoint();
    this.#blockNewPointButton();
  };
}
