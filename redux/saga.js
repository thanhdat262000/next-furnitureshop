import {
  GET_ALL_PROJECT_BY_SERVICE_SUCCESS,
  GET_ALL_PROJECT_BY_SERVICE,
  GET_ALL_PROJECT_BY_SERVICE_FAIL,
  GET_ALL_PROJECT_BY_CATEGORY_SUCCESS,
  GET_ALL_PROJECT_BY_CATEGORY_FAIL,
  GET_ALL_PROJECT_BY_CATEGORY,
  GET_PROJECT_BY_ID,
  GET_PROJECT_BY_ID_FAIL,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_LATEST_PROJECTS_SUCCESS,
  GET_LATEST_PROJECTS_FAIL,
  GET_LATEST_PROJECTS,
  GET_ALL_PROJECTS,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_FAILURE,
} from "./action";
import { call, put, takeEvery, fork, all } from "redux-saga/effects";
import * as api from "../api";

function* getAllProjects() {
  try {
    const projects = yield call(api.getAllProjects);
    yield put({
      type: GET_ALL_PROJECTS_SUCCESS,
      payload: { projects: projects.data },
    });
  } catch (error) {
    yield put({
      type: GET_ALL_PROJECTS_FAILURE,
      payload: { message: error.message },
    });
  }
}
function* watchGetAllProjects() {
  yield takeEvery(GET_ALL_PROJECTS, getAllProjects);
}
function* getALLProjectsByService(action) {
  try {
    const projects = yield call(
      api.getALLProjectsByService,
      action.payload.service
    );
    yield put({
      type: GET_ALL_PROJECT_BY_SERVICE_SUCCESS,
      payload: { projects: projects.data },
    });
  } catch (error) {
    yield put({
      type: GET_ALL_PROJECT_BY_SERVICE_FAIL,
      payload: { message: error.message },
    });
  }
}

function* watchGetAllProjectsByService() {
  yield takeEvery(GET_ALL_PROJECT_BY_SERVICE, getALLProjectsByService);
}
function* getALLProjectsByCategory(action) {
  try {
    const projects = yield call(
      api.getALLProjectsByCategory,
      action.payload.category
    );
    yield put({
      type: GET_ALL_PROJECT_BY_CATEGORY_SUCCESS,
      payload: { projects: projects.data },
    });
  } catch (error) {
    yield put({
      type: GET_ALL_PROJECT_BY_CATEGORY_FAIL,
      payload: { message: error.message },
    });
  }
}
function* watchGetAllProjectsByCategory() {
  yield takeEvery(GET_ALL_PROJECT_BY_CATEGORY, getALLProjectsByCategory);
}

function* getProjectsById(action) {
  try {
    const projects = yield call(api.getProjectById, action.payload.projectId);
    yield put({
      type: GET_PROJECT_BY_ID_SUCCESS,
      payload: { projects: projects.data },
    });
  } catch (error) {
    yield put({
      type: GET_PROJECT_BY_ID_FAIL,
      payload: { message: error.message },
    });
  }
}
function* watchProjectById() {
  yield takeEvery(GET_PROJECT_BY_ID, getProjectsById);
}

function* getLatestProjects() {
  try {
    const projects = yield call(api.getLatestProjects);
    yield put({
      type: GET_LATEST_PROJECTS_SUCCESS,
      payload: { projects: projects.data },
    });
  } catch (error) {
    yield put({
      type: GET_LATEST_PROJECTS_FAIL,
      payload: { message: error.message },
    });
  }
}
function* watchLatestProjects() {
  yield takeEvery(GET_LATEST_PROJECTS, getLatestProjects);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllProjectsByCategory),
    fork(watchGetAllProjectsByService),
    fork(watchProjectById),
    fork(watchLatestProjects),
    fork(watchGetAllProjects),
  ]);
}
