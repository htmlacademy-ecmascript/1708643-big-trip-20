import {MSEC_IN_HOUR, MSEC_IN_DAY, DurationFormat} from './const.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(duration);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

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
      pointDuration = dayjs.duration(diff).format(DurationFormat.DAYS);
      break;
    case (diff >= MSEC_IN_HOUR):
      pointDuration = dayjs.duration(diff).format(DurationFormat.HOURS);
      break;
    case (diff < MSEC_IN_HOUR):
      pointDuration = dayjs.duration(diff).format(DurationFormat.MINS);
      break;
  }

  return pointDuration;
};

const isTripPointInFuture = (dateFrom) =>
  dateFrom && dayjs(dateFrom).isAfter(dayjs());

const isTripPointInPresent = (dateFrom, dateTo) =>
  dateFrom &&
  dateTo &&
  dayjs(dateFrom).isSameOrBefore(dayjs()) &&
  dayjs(dateTo).isSameOrAfter(dayjs());

const isTripPointInPast = (dateTo) =>
  dateTo && dayjs(dateTo).isBefore(dayjs());

const comparePointsByDate = (firstPoint, secondPoint) => {
  const firstDate = dayjs(firstPoint.date_from);
  const secondDate = dayjs(secondPoint.date_from);
  const result = firstDate.isBefore(secondDate);

  return result ? -result : firstDate.isAfter(secondDate);
};

export {
  comparePointsByDate,
  convertToTitleCase,
  convertKeysToCamelCase,
  formatDate,
  getDuration,
  isTripPointInFuture,
  isTripPointInPresent,
  isTripPointInPast
};
