import { VOYAGER, DARK_MATTER } from '@carto/react-basemaps';
import { API_VERSIONS } from '@deck.gl/carto';

export const initialState = {
  viewState: {
    latitude: 31.802892,
    longitude: -103.007813,
    zoom: 3,
    pitch: 0,
    bearing: 0,
    dragRotate: false,
    maxZoom: 9,
    minZoom: 3,
  },
  basemap: DARK_MATTER,
  credentials: {
    apiVersion: API_VERSIONS.V3,
    apiBaseUrl: 'https://gcp-us-east1.api.carto.com',
    accessToken:
      'eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfN3hoZnd5bWwiLCJqdGkiOiIyNjdhMTI3OCJ9.4cplM6xOocCl1GFKoiKCcEDf2Q9hRRmRWhsMOTCSNBg',
  },
  googleApiKey: '', // only required when using a Google Basemap
  googleMapId: '', // only required when using a Google Custom Basemap
  /*
  oauth: {
    domain: 'auth.carto.com',
    // Type here your application client id
    clientId: 'gXLeOO8d39yCQNaN6Bh7DR6bOJb6kExy',
    scopes: [
      'read:current_user',
      'update:current_user',
      'read:connections',
      'write:connections',
      'read:maps',
      'write:maps',
      'read:account',
      'admin:account',
    ],
    audience: 'carto-cloud-native-api',
    authorizeEndPoint: 'https://carto.com/oauth2/authorize', // only valid if keeping https://localhost:3000/oauthCallback
  },
  */
};
