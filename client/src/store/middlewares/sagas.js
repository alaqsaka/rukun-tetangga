import { all } from 'redux-saga/effects';

import profile from '../reducers/profile/sagas';

export default function* rootSaga() {
  yield all([profile()]);
}
