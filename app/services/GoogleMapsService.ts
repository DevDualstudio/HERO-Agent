import { GOOGLE_MAPS_API_KEY } from '@env';
import { random } from 'lodash';
import queryString from 'query-string';

const sessionToken = random(100000);

interface autoCompleteResponse {
  description: string;
  place_id: string;
}

export interface autoCompleteResult {
  description: string;
  placeId: string;
}

class GoogleMapsService {
  static async autoCompleteResults(
    searchStr: string,
  ): Promise<autoCompleteResponse[]> {
    try {
      const params = {
        input: searchStr,
        key: GOOGLE_MAPS_API_KEY,
        sessionToken,
        language: 'en',
        components: 'country:us',
      };

      const paramsUrl = queryString.stringify(params);

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?${paramsUrl}`,
      );

      if (response.ok && response.status === 200) {
        const results = await response.json();
        return results;
      } else {
        console.log(response);
        return [];
      }
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
export default GoogleMapsService;
