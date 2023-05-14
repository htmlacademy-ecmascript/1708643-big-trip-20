import {filter} from '../utils.js';

function generateFilter(tripPoints) {
  return Object.entries(filter).map(
    ([filterType, filterTasks]) => ({
      type: filterType,
      count: filterTasks(tripPoints).length,
    }),
  );
}

export {generateFilter};
