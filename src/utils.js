function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomPicture() {
  const url = 'https://loremflickr.com/248/152?random=';
  return url + Math.floor(Math.random() * 1000).toString();
}

function getISODate(str) {
  return new Date(str).toISOString();
}

function convertToTitleCase(str) {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

function convertToCamelCase(str) {
  return str.toLowerCase().replace(/([-_][a-z])/g, (group) =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );
}

function convertKeysToCamelCase(obj) {
  const o = {};

  Object.keys(obj).forEach((key) => {
    o[convertToCamelCase(key)] = obj[key];
  });

  return o;
}

export {
  getRandomArrayElement,
  getRandomPicture,
  getISODate,
  convertToTitleCase,
  convertKeysToCamelCase
};
