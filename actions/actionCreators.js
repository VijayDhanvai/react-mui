import { GET_USERS_FETCH } from './actions';
export function takeGetUserFetchAction() {
  return { type: GET_USERS_FETCH };
}

export function updateProfile(text) {
  return { type: NAME_UPDATED, payload: text };
}
