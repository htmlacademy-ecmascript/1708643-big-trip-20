import {MSEC_IN_HOUR, MSEC_IN_DAY, DurationFormat, FilterType} from './const.js';
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

const getFilters = () => ({
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isTripPointInFuture(point.date_from)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isTripPointInPresent(point.date_from, point.date_to)),
  [FilterType.PAST]: (points) => points.filter((point) => isTripPointInPast(point.date_to))
});

const comparePointsByDate = (firstPoint, secondPoint) => {
  const firstDate = dayjs(firstPoint.date_from);
  const secondDate = dayjs(secondPoint.date_from);
  const result = firstDate.isBefore(secondDate);

  return result ? -result : firstDate.isAfter(secondDate);
};

const comparePointsByPrice = (firstPoint, secondPoint) => {
  const firstPrice = firstPoint.base_price;
  const secondPrice = secondPoint.base_price;

  return secondPrice - firstPrice;
};

const comparePointsByTime = (firstPoint, secondPoint) => {
  const firstDuration = dayjs(firstPoint.date_to).diff(dayjs(firstPoint.date_from));
  const secondDuration = dayjs(secondPoint.date_to).diff(dayjs(secondPoint.date_from));

  return secondDuration - firstDuration;
};

const isDateEqual = (firstDate, secondDate) =>
  dayjs(firstDate).isSame(secondDate, 'm');

const isPriceEqual = (firstPrice, secondPrice) =>
  firstPrice === secondPrice;

export {
  comparePointsByDate,
  comparePointsByPrice,
  comparePointsByTime,
  convertToTitleCase,
  convertKeysToCamelCase,
  getFilters,
  formatDate,
  getDuration,
  isTripPointInFuture,
  isTripPointInPresent,
  isTripPointInPast,
  isDateEqual,
  isPriceEqual
};
