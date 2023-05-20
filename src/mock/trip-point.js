import {getRandomArrayElement, getISODate} from './utils.js';
import {TRIP_TYPES} from '../const.js';

const mockPoints = [
  {
    'id': 1,
    'base_price': 1100,
    'date_from': getISODate('05 October 2011 12:36'),
    'date_to': getISODate('06 October 2011 16:48'),
    'destination': 2,
    'is_favorite': false,
    'offers': [],
    'type': TRIP_TYPES[1]
  },
  {
    'id': 2,
    'base_price': 200,
    'date_from': getISODate('11 April 2011 1:51'),
    'date_to': getISODate('13 April 2011 1:18'),
    'destination': 1,
    'is_favorite': true,
    'offers': [1],
    'type': TRIP_TYPES[2]
  },
  {
    'id': 3,
    'base_price': 700,
    'date_from': getISODate('04 October 2011 14:48'),
    'date_to': getISODate('05 October 2011 5:48'),
    'destination': 3,
    'is_favorite': false,
    'offers': [],
    'type': TRIP_TYPES[7]
  },
  {
    'id': 4,
    'base_price': 100,
    'date_from': getISODate('16 October 2011 12:11'),
    'date_to': getISODate('16 October 2011 12:48'),
    'destination': 4,
    'is_favorite': true,
    'offers': [1, 2, 4, 5],
    'type': TRIP_TYPES[5]
  }
];

const getRandomPoint = () =>
  getRandomArrayElement(mockPoints);

export {getRandomPoint};
