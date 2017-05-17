import * as fromAlerts from './reducers/alerts.reducer';

export interface AppState {
  alerts : fromAlerts.State;
}

export const reducers = {
  alerts: fromAlerts.reducer,
};
