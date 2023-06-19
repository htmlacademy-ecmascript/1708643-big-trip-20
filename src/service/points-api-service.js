import ApiService from '../framework/api-service.js';
import {PathName} from '../const.js';

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export default class PointsApiService extends ApiService {
  get points() {
    return this._load({url: PathName.POINTS})
      .then(ApiService.parseResponse);
  }

  updatePoint = async (point) => {
    const response = await this._load({
      url: `${PathName.POINTS}/${point.id}`,
      method: Method.PUT,
      body: JSON.stringify(point),
      headers: new Headers({'Content-Type': 'application/json'}),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  };

  addPoint = async (point) => {
    const response = await this._load({
      url: `${PathName.POINTS}`,
      method: Method.POST,
      body: JSON.stringify(point),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  };

  deletePoint = async (point) => {
    const response = await this._load({
      url: `${PathName.POINTS}/${point.id}`,
      method: Method.DELETE
    });

    return response;
  };
}
