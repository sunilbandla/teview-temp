import { createStore, combineReducers } from 'redux';
import { enthusiasmReducer } from '../reducers/enthusiasmLevel';
import { languageNameReducer } from '../reducers/languageName';
import { StoreState } from '../common/store-state';
import { liveLocationsReducer } from '../reducers/liveLocations';

export const initialState: StoreState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
  liveLocations: {
    lastTime: Date.now() - 15,
    locations: []
  }
};

const rootReducer = combineReducers<StoreState>({
  enthusiasmLevel: enthusiasmReducer,
  languageName: languageNameReducer,
  liveLocations: liveLocationsReducer,
});

export const store = createStore<StoreState>(rootReducer, initialState);
