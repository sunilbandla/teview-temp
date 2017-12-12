import { createStore, combineReducers } from 'redux';
import { filtersReducer } from '../reducers/filters';
import { StoreState } from '../common/store-state';
import { liveLocationsReducer } from '../reducers/liveLocations';

export const initialState: StoreState = {
  filters: {
    selectedRoutes: null
  },
  liveLocations: {
    lastTime: Date.now() - 30,
    locations: []
  }
};

const rootReducer = combineReducers<StoreState>({
  filters: filtersReducer,
  liveLocations: liveLocationsReducer,
});

export const store = createStore<StoreState>(rootReducer, initialState);
