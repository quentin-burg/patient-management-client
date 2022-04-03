import { UserState } from './reducers/user/user.types';

export const loadState = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const saveState = (state: { user: UserState }, key: string) => {
  try {
    //state should always be serializable
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error(err);
  }
};
