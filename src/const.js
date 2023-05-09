const POINT_LIST_RENDER_COUNT = 3;

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

const DATE_TIME_FORMAT = {
  dateTime: 'YYYY-MM-DDTHH:mm',
  date: 'YYYY-MM-DD',
  time: 'HH:mm',
  shortDate: 'MMM DD',
  formDateTime: 'DD/MM/YY HH:mm'
};

const DURATION_FORMAT = {
  days: 'DD[D] HH[H] mm[M]',
  hours: 'HH[H] mm[M]',
  mins: 'mm[M]'
};

export {
  POINT_LIST_RENDER_COUNT,
  TRIP_TYPES,
  DATE_TIME_FORMAT,
  DURATION_FORMAT,
  MSEC_IN_HOUR,
  MSEC_IN_DAY
};
