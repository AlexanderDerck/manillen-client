import { createEpicMiddleware } from 'redux-observable';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { gameActionCreatorMap, userActionCreatorMap } from './actions';
import { rootEpic } from './root.epic';
import { rootReducer } from './root.reducer';
import { initialRootState } from './root.state';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  preloadedState: initialRootState,
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware(),
    epicMiddleware
  ],
  devTools: {
    actionCreators: {
      ...gameActionCreatorMap,
      ...userActionCreatorMap
    }
  }
})

epicMiddleware.run(rootEpic);