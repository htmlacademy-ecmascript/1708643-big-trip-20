import {remove, render, RenderPosition} from '../framework/render.js';
import EditFormView from '../view/edit-form-view.js';
import {UserAction, UpdateType, FormType} from '../const.js';

export default class NewPointPresenter {
  #parentContainer = null;
  #handleDataChange = null;
  #handleDestroy = null;

  #formComponent = null;

  constructor({parentContainer, handleDataChange, handleDestroy}) {
    this.#parentContainer = parentContainer;
    this.#handleDataChange = handleDataChange;
    this.#handleDestroy = handleDestroy;
  }

  init(destinations, offers) {
    if (this.#formComponent !== null) {
      return;
    }

    this.#formComponent = new EditFormView({
      destinationList: destinations,
      offersList: offers,
      type: FormType.CREATING,
      handleFormSubmit: this.#handleFormSubmit,
      handleCanselClick: this.#handleCanselClick
    });

    render(this.#formComponent, this.#parentContainer, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy = () => {
    if (this.#formComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#formComponent);
    this.#formComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  setSaving = () => {
    this.#formComponent.updateElement({
      isDisabled: true,
      isSaving: true,
    });
  };

  setAborting = () => {
    const resetFormState = () => {
      this.#formComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#formComponent.shake(resetFormState);
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      {
        id: crypto.randomUUID(),
        ...point
      },
    );
  };

  #handleCanselClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
