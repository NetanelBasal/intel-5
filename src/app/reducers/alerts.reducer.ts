import { Alert } from '../models/alert.model';
import * as alert from '../actions/alerts.actions';

export interface State {
  entities : Alert[]
  isFetching : boolean;
  error : string | null;
}

export const initialState : State = {
  entities: [],
  isFetching: false,
  error: null
};

export function reducer( state = initialState, action : alert.Actions ) : State {
  switch( action.type ) {
    case alert.GET: {
      return { ...state, isFetching: true };
    }

    case alert.GET_SUCCESS: {
      return { ...state, isFetching: false, entities: action.payload };
    }

    default: {
      return state;
    }
  }
}

