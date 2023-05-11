import {PICTURE_TEMPLATE_URL} from './const.js';

const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

const getRandomPicture = () =>
  PICTURE_TEMPLATE_URL + crypto.randomUUID();

const getISODate = (str) =>
  new Date(str).toISOString();

export {
  getRandomArrayElement,
  getRandomPicture,
  getISODate
};
