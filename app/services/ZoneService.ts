import ApiRoutesEnum from '../shared/ApiRoutesEnum';
import { File } from '../shared/File';
import { ApplyAsAgent } from '../types/ApplyAsAgent';
import { State, StateResponse } from '../types/State';
import { UpdateWorkAreaRequest } from '../types/UpdateWorkAreaRequest';
import { User } from '../types/User';
import { UserAddress } from '../types/UserAddress';
import ApiService from './ApiService';
import AuthService from './AuthService';

class ZoneService {
  static async getValidStatesAndZones(): Promise<StateResponse> {
    return await ApiService.get({
      url: ApiRoutesEnum.GET_STATES_AND_ZONES,
    });
  }

  static async setWizardComplete(): Promise<void> {
    return await ApiService.put({
      url: ApiRoutesEnum.SET_WIZARD_COMPLETE,
    });
  }

  static async updateWorkAreas(
    UpdateWorkAreaRequest: UpdateWorkAreaRequest,
  ): Promise<void> {
    return await ApiService.put({
      url: ApiRoutesEnum.WORKING_ZONES,
      body: UpdateWorkAreaRequest,
    });
  }
}
export default ZoneService;
