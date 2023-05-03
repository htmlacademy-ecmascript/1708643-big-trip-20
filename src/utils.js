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

export {
  getRandomArrayElement,
  getRandomPicture,
  getISODate
};
