import Config from 'react-native-config';

const productionUrl = Config.API_URL!;

const developmentUrl = Config.API_TEST_URL!;

const ENVIRONMENT = {
  PROD: 'PROD',
  DEV: 'DEV',
};

const currentEnv = Config.ENVIRONMENT ?? ENVIRONMENT.DEV;

const baseUrl =
  (currentEnv === ENVIRONMENT.PROD && productionUrl) || developmentUrl;

const baseUrlApi = `${baseUrl}api/`;

const ApiConfig = {
  baseUrl,
  baseUrlApi,
  token: null as string | null,
  login: `${baseUrlApi}login`,
  user: `${baseUrlApi}users`,
};

export { ApiConfig };
