interface IConfig {
  LOGIN_APP_PORT: number;
  AUTHORIZED_APP_1_PORT: number;
  AUTHORIZED_APP_2_PORT: number;
  LOGIN_APP_URL: string;
  AUTHORIZED_APP_1_URL: string;
  AUTHORIZED_APP_2_URL: string;
  FIREBASE: {
    PROJECT_ID: string;
    API_KEY: string;
  }
}

export const env: IConfig = {
  LOGIN_APP_PORT: parseInt(process.env.NX_REACT_APP_LOGIN_APP_PORT),
  AUTHORIZED_APP_1_PORT: parseInt(process.env.NX_REACT_APP_AUTHORIZED_APP_1_PORT),
  AUTHORIZED_APP_2_PORT: parseInt(process.env.NX_REACT_APP_AUTHORIZED_APP_2_PORT),
  LOGIN_APP_URL: process.env.NX_REACT_APP_LOGIN_APP_URL,
  AUTHORIZED_APP_1_URL: process.env.NX_REACT_APP_AUTHORIZED_APP_1_URL,
  AUTHORIZED_APP_2_URL: process.env.NX_REACT_APP_AUTHORIZED_APP_2_URL,
  FIREBASE: {
    PROJECT_ID: process.env.NX_REACT_APP_PROJECT_ID,
    API_KEY: process.env.NX_REACT_APP_FIREBASE_API_KEY,
  }
}