import { Action } from '@ngrx/store';
import { Alert } from '../models/alert.model';

export const GET = '[Alerts] Get';
export const GET_SUCCESS = '[Alerts] Get Success';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 */
export class GetAction implements Action {
  readonly type = GET;
}

export class GetSuccessAction implements Action {
  readonly type = GET_SUCCESS;

  constructor( public payload : any ) {
  }

  // constructor( public payload : Alert[] ) {
  // }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = GetAction
  | GetSuccessAction