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
  [FilterType.FUTURE]: (points) => points.filter((point) => isTripPointInFuture(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isTripPointInPresent(point.dateFrom, point.dateTo)),
  [FilterType.PAST]: (points) => points.filter((point) => isTripPointInPast(point.dateTo))
});

const comparePointsByDate = (firstPoint, secondPoint) => {
  const firstDate = dayjs(firstPoint.dateFrom);
  const secondDate = dayjs(secondPoint.dateFrom);
  const result = firstDate.isBefore(secondDate);

  return result ? -result : firstDate.isAfter(secondDate);
};

const comparePointsByPrice = (firstPoint, secondPoint) => {
  const firstPrice = firstPoint.basePrice;
  const secondPrice = secondPoint.basePrice;

  return secondPrice - firstPrice;
};

const comparePointsByTime = (firstPoint, secondPoint) => {
  const firstDuration = dayjs(firstPoint.dateTo).diff(dayjs(firstPoint.dateFrom));
  const secondDuration = dayjs(secondPoint.dateTo).diff(dayjs(secondPoint.dateFrom));

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
  getFilters,
  formatDate,
  getDuration,
  isTripPointInFuture,
  isTripPointInPresent,
  isTripPointInPast,
  isDateEqual,
  isPriceEqual
};
