import { API_URL } from '@env';
import AuthService from './AuthService';

interface IApiParams {
  url: string;
  id?: number;
  body?: object;
  showGenericError?: boolean;
  headers?: object;
  okCallback?: Function;
}

interface IApiParamsForm {
  url: string;
  id?: number;
  body?: FormData;
  showGenericError?: boolean;
  headers?: object;
  okCallback?: Function;
}

const remove_non_ascii = (str: string) => {
  if (str === null || str === '') {
    return false;
  } else {
    str = str.toString();
  }
  return str.replace(/[^\x20-\x7E]/g, '');
};

class ApiService {
  public static async get<T>(params: IApiParams): Promise<T> {
    const { id, url } = params;
    const idParam = id ? `/${id}` : '';

    const sanitizedUrl = remove_non_ascii(`${API_URL}${url}${idParam}`);

    const response = await fetch(<any>sanitizedUrl, {
      method: 'GET',
      headers: await ApiService.getHeaders(params.headers),
    });

    return ApiService.processResponse<T>(response, params);
  }

  public static async post<T>(params: IApiParams): Promise<T> {
    const { url } = params;
    console.log(`${API_URL}${url}`);
    console.log(JSON.stringify(params.body));
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      body: JSON.stringify(params.body),
      headers: await ApiService.getHeaders(params.headers),
    });

    return ApiService.processResponse<T>(response, params);
  }

  public static async postForm<T>(params: IApiParamsForm): Promise<T> {
    const { url } = params;
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      body: params.body,
      headers: await ApiService.getHeaders({
        'Content-Type': 'multipart/form-data',
        ...params.headers,
      }),
    });
    console.log(
      'headers',
      await ApiService.getHeaders({
        'Content-Type': 'multipart/form-data',
        ...params.headers,
      }),
    );

    return ApiService.processResponse<T>(response, params);
  }

  public static async put<T>(params: IApiParams): Promise<T> {
    const { url } = params;

    console.log(`${API_URL}${url}`);
    console.log(JSON.stringify(params.body));
    const response = await fetch(`${API_URL}${url}`, {
      method: 'PUT',
      body: JSON.stringify(params.body),
      headers: await ApiService.getHeaders(params.headers),
    });
    console.log(response);

    return ApiService.processResponse<T>(response, params);
  }

  public static async delete<T>(params: IApiParams): Promise<T> {
    const { url } = params;

    const response = await fetch(`${API_URL}${url}`, {
      method: 'DELETE',
      headers: await ApiService.getHeaders(params.headers),
      body: JSON.stringify(params.body),
    });

    return ApiService.processResponse<T>(response, params);
  }

  public static async patch<T>(params: IApiParams): Promise<T> {
    const { url } = params;

    const response = await fetch(`${API_URL}${url}`, {
      method: 'PATCH',
      headers: await ApiService.getHeaders(params.headers),
      body: JSON.stringify(params.body),
    });

    return ApiService.processResponse<T>(response, params);
  }

  private static async getHeaders(extraHeaders?: object) {
    console.log('BEARER' + (await AuthService.getToken()));

    return new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await AuthService.getToken()}`,
      //   'x-blw-src': Platform.OS == 'ios' ? 'baluwoIOS' : 'baluwoAndroid',
      ...extraHeaders,
    });
  }

  private static async processResponse<T>(
    response: Response,
    params: IApiParams,
  ) {
    console.log('processResponse', response);

    // if (response.status === 401) {
    //   NotificationService.dropdownError(TS.translate('api_generic_error'));
    //   AuthService.logout();
    //   return;
    // }

    // if (response.status === 404 || response.status === 500) {
    //   const error = new Error(TS.translate('api_generic_error'));
    //   throw error;
    // }

    // if (response.status === 403 || response.status === 400) {
    //   try {
    //     const data = JSON.parse(await response.text());
    //     const error = new Error(data.message);
    //     if (data.code == 203) {
    //       error.validateBeneficiary = true;
    //     }
    //     throw error;
    //   } catch (error) {
    //     // If json can't be parsed
    //     console.log(error);
    //     const errorJson = new Error(await response.text());
    //     throw errorJson;
    //   }
    // }

    if (response.ok) {
      if (response.status === 200) {
        const data = await response.json();

        if (params.okCallback) {
          return params.okCallback({ response, data: data as T });
        } else {
          return data as T;
        }
      }
      return {} as T;
    }

    const rs = await response.text();
    const error = new Error(rs);
    throw error;
  }
}

export default ApiService;
