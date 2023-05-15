import {MSEC_IN_HOUR, MSEC_IN_DAY, durationFormat, FilterType} from './const.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const convertToTitleCase = (str) =>
  str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();

const convertToCamelCase = (str) =>
  str.toLowerCase().replace(/([-_][a-z])/g, (group) =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );

const convertKeysToCamelCase = (obj) => {
  const o = {};

  Object.keys(obj).forEach((key) => {
    o[convertToCamelCase(key)] = obj[key];
  });

  return o;
};

const formatDate = (date, format) =>
  date ? dayjs(date).format(format) : '';

const getDuration = (dateFrom, dateTo) => {
  const diff = dayjs(dateTo).diff(dayjs(dateFrom));

  let pointDuration;

  switch (true) {
    case (diff >= MSEC_IN_DAY):
      pointDuration = dayjs.duration(diff).format(durationFormat.DAYS);
      break;
    case (diff >= MSEC_IN_HOUR):
      pointDuration = dayjs.duration(diff).format(durationFormat.HOURS);
      break;
    case (diff < MSEC_IN_HOUR):
      pointDuration = dayjs.duration(diff).format(durationFormat.MINS);
      break;
  }

  return pointDuration;
};

const isTripPointInFuture = (dateFrom) =>
  dateFrom && dayjs(dateFrom).isAfter(dayjs());

const isTripPointInPresent = (dateFrom, dateTo) =>
  dateFrom &&
  dateTo &&
  (dayjs(dateFrom).isBefore(dayjs()) || dayjs(dateFrom).isSame(dayjs())) &&
  (dayjs(dateTo).isAfter(dayjs()) || dayjs(dateTo).isSame(dayjs()));

const isTripPointInPast = (dateTo) =>
  dateTo && dayjs(dateTo).isBefore(dayjs());

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isTripPointInFuture(point.date_from)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isTripPointInPresent(point.date_from, point.date_to)),
  [FilterType.PAST]: (points) => points.filter((point) => isTripPointInPast(point.date_to))
};

export {
  convertToTitleCase,
  convertKeysToCamelCase,
  formatDate,
  getDuration,
  filter
};
