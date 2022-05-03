import { all, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';

export function* GET_PROFILE() {
  yield put({ type: actions.SET_STATE, payload: { loading: true } });

  // TODO: handle request API here
  // try {
  //   const { data } = yield call(getSomeServices);
  //   yield put({ type: actions.SET_STATE, payload: { profile: data } });
  // } catch ({ message: error }) {
  //   yield put({ type: actions.SET_STATE, payload: { error } });
  // } finally {
  //   yield put({ type: actions.SET_STATE, payload: { loading: false } });
  // }
}

export default function* profileSaga() {
  yield all([takeEvery(actions.GET_PROFILE, GET_PROFILE)]);
}
