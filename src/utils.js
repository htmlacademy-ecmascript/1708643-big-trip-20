import {MSEC_IN_HOUR, MSEC_IN_DAY, DURATION_FORMAT} from './const.js';
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
      pointDuration = dayjs.duration(diff).format(DURATION_FORMAT.days);
      break;
    case (diff >= MSEC_IN_HOUR):
      pointDuration = dayjs.duration(diff).format(DURATION_FORMAT.hours);
      break;
    case (diff < MSEC_IN_HOUR):
      pointDuration = dayjs.duration(diff).format(DURATION_FORMAT.mins);
      break;
  }

  return pointDuration;
};

export {
  convertToTitleCase,
  convertKeysToCamelCase,
  formatDate,
  getDuration
};
