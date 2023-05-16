import {MSEC_IN_HOUR, MSEC_IN_DAY, durationFormat} from './const.js';
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

export {
  convertToTitleCase,
  convertKeysToCamelCase,
  formatDate,
  getDuration,
  isTripPointInFuture,
  isTripPointInPresent,
  isTripPointInPast
};
