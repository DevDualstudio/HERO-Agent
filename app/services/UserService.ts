import ApiRoutesEnum from '../shared/ApiRoutesEnum';
import { File } from '../shared/File';
import { ApplyAsAgent } from '../types/ApplyAsAgent';
import { User } from '../types/User';
import { UserAddress } from '../types/UserAddress';
import ApiService from './ApiService';
import AuthService from './AuthService';

class UserService {
  static async updateProfile(
    firstName: string,
    lastName: string,
    email: string,
    fcmToken: string,
    profilePictureFileId: number | null,
    cardTokenId: string | null,
  ) {
    const body = {
      firstName,
      lastName,
      email,
      fcmToken,
      profilePictureFileId,
      cardTokenId,
    };

    ApiService.put({
      url: ApiRoutesEnum.UPDATE_PROFILE,
      body,
    });

    const currentUser = await AuthService.getActiveUser();

    const newUser: User = {
      ...currentUser,
      firstName,
      lastName,
      email,
    };
    await AuthService.setActiveUser(newUser);
  }

  static async uploadFile(file: File): Promise<number> {
    const data: FormData = new FormData();
    data.append('files', file);

    const response: any = await ApiService.postForm({
      url: ApiRoutesEnum.UPLOAD_FILE,
      body: data,
    });

    const fileId: number = response[0].id;

    return fileId;
  }

  static async applyAsAgent(model: ApplyAsAgent): Promise<void> {
    await ApiService.post({
      url: ApiRoutesEnum.APPLY_AGENT,
      body: model,
    });
  }

  static async getApplyStatus(): Promise<string> {
    return await ApiService.get({
      url: ApiRoutesEnum.APPLY_AGENT_STATUS,
    });
  }
}
export default UserService;
