const POINT_LIST_RENDER_COUNT = 3;

const TRIP_CITY_LIMIT = 3;

const TRIP_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const EMPTY_POINT = {
  'basePrice': 0,
  'dateFrom': null,
  'dateTo': null,
  'destination': null,
  'isFavorite': false,
  'offers': [],
  'type': TRIP_TYPES[0],
};

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MSEC_IN_SEC * SEC_IN_MIN * MIN_IN_HOUR;
const MSEC_IN_DAY = MSEC_IN_HOUR * HOUR_IN_DAY;

const DatetimeFormat = {
  DATETIME: 'YYYY-MM-DDTHH:mm',
  DATE: 'YYYY-MM-DD',
  TIME: 'HH:mm',
  SHORT_DATE: 'MMM DD',
  FORM_DATETIME: 'DD/MM/YY HH:mm',
  PICKER_DATETIME: 'd/m/y H:i'
};

const DurationFormat = {
  DAYS: 'DD[D] HH[H] mm[M]',
  HOURS: 'HH[H] mm[M]',
  MINS: 'mm[M]'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const FilterStubText = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now'
};

const PointMode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT'
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
  ERROR: 'ERROR'
};

const FormType = {
  CREATING: 'CREATING',
  EDITING: 'EDITING'
};

const PathName = {
  POINTS: 'points',
  OFFERS: 'offers',
  DESTINATIONS: 'destinations'
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const HTTPMethod = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

export {
  POINT_LIST_RENDER_COUNT,
  TRIP_CITY_LIMIT,
  TRIP_TYPES,
  EMPTY_POINT,
  DatetimeFormat,
  DurationFormat,
  MSEC_IN_HOUR,
  MSEC_IN_DAY,
  FilterType,
  FilterStubText,
  PointMode,
  SortType,
  UserAction,
  UpdateType,
  FormType,
  PathName,
  TimeLimit,
  HTTPMethod
};
