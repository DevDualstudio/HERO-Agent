import ApiRoutesEnum from '../shared/ApiRoutesEnum';
import { AvailableResponse } from '../types/AvailableResponse';
import ApiService from './ApiService';

class AgentService {
  static async isAvailable(): Promise<AvailableResponse> {
    return await ApiService.get({
      url: ApiRoutesEnum.IS_AVAILABLE,
    });
  }

  static async toggleAvailability(available: boolean): Promise<void> {
    return await ApiService.put({
      url: ApiRoutesEnum.SET_AVAILABLE + '/' + available,
    });
  }
}
export default AgentService;
