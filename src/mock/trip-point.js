import {getRandomArrayElement, getISODate} from '../utils.js';
import {TRIP_TYPES} from '../const.js';

const mockPoints = [
  {
    'id': 1,
    'base_price': 1100,
    'date_from': getISODate('05 October 2011 14:48 UTC'),
    'date_to': getISODate('06 October 2011 6:48 UTC'),
    'destination': 2,
    'is_favorite': false,
    'offers': [1, 2],
    'type': TRIP_TYPES[1]
  },
  {
    'id': 2,
    'base_price': 200,
    'date_from': getISODate('11 April 2011 14:48 UTC'),
    'date_to': getISODate('13 April 2011 16:48 UTC'),
    'destination': 1,
    'is_favorite': true,
    'offers': [1],
    'type': TRIP_TYPES[2]
  },
  {
    'id': 3,
    'base_price': 700,
    'date_from': getISODate('04 October 2011 14:48 UTC'),
    'date_to': getISODate('05 October 2011 6:48 UTC'),
    'destination': 3,
    'is_favorite': false,
    'offers': [],
    'type': TRIP_TYPES[5]
  },
  {
    'id': 4,
    'base_price': 100,
    'date_from': getISODate('16 October 2011 14:48 UTC'),
    'date_to': getISODate('17 October 2011 6:48 UTC'),
    'destination': 4,
    'is_favorite': true,
    'offers': [1, 2, 3, 4, 5],
    'type': TRIP_TYPES[3]
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
