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
  FORM_DATETIME: 'DD/MM/YY HH:mm'
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
  EVERYTHING: 'Click New Event to create your first point',
  FUTURE: 'There are no future events now',
  PRESENT: 'There are no present events now',
  PAST: 'There are no past events now'
};

const PointMode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const SortType = {
  DAY: 'DAY',
  PRICE: 'PRICE',
  TIME: 'TIME',
  EVENT: 'EVENT',
  OFFERS: 'OFFERS'
};

export {
  POINT_LIST_RENDER_COUNT,
  TRIP_CITY_LIMIT,
  TRIP_TYPES,
  DatetimeFormat,
  DurationFormat,
  MSEC_IN_HOUR,
  MSEC_IN_DAY,
  FilterType,
  FilterStubText,
  PointMode,
  SortType
};
