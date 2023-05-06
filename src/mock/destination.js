import {CITIES, DESCRIPTIONS} from './const.js';
import {getRandomArrayElement, getRandomPicture} from './utils.js';

const mockDestinations = [
  {
    'id': 1,
    'description': getRandomArrayElement(DESCRIPTIONS),
    'name': getRandomArrayElement(CITIES),
    'pictures': [
      {
        'src': getRandomPicture(),
        'description': crypto.randomUUID
      },
      {
        'src': getRandomPicture(),
        'description': crypto.randomUUID
      }
    ]
  },
  {
    'id': 2,
    'description': getRandomArrayElement(DESCRIPTIONS),
    'name': getRandomArrayElement(CITIES),
    'pictures': [
      {
        'src': getRandomPicture(),
        'description': crypto.randomUUID
      },
      {
        'src': getRandomPicture(),
        'description': crypto.randomUUID
      }
    ]
  },
  {
    'id': 3,
    'description': getRandomArrayElement(DESCRIPTIONS),
    'name': getRandomArrayElement(CITIES),
    'pictures': [
      {
        'src': getRandomPicture(),
        'description': crypto.randomUUID
      },
      {
        'src': getRandomPicture(),
        'description': crypto.randomUUID
      },
      {
        'src': getRandomPicture(),
        'description': crypto.randomUUID
      }
    ]
  },
  {
    'id': 4,
    'description': getRandomArrayElement(DESCRIPTIONS),
    'name': getRandomArrayElement(CITIES),
    'pictures': [
      {
        'src': getRandomPicture(),
        'description': crypto.randomUUID
      },
      {
        'src': getRandomPicture(),
        'description': crypto.randomUUID
      },
      {
        'src': getRandomPicture(),
        'description': crypto.randomUUID
      }
    ]
  }
];

const getDestinations = () => mockDestinations;

export {getDestinations};
