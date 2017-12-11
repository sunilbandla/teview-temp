import { initialState } from '../common/store';
import { LiveLocationsAction } from '../actions/liveLocations';
import { UPDATE_LAST_TIME, UPDATE_LOCATIONS } from '../common/action-types';
import { LiveLocationsState } from '../common/store-state';

export function liveLocationsReducer(
  state: LiveLocationsState = initialState.liveLocations,
  action: LiveLocationsAction
): LiveLocationsState {
  switch (action.type) {
    case UPDATE_LAST_TIME:
      return { ...state, lastTime: action.data };
    case UPDATE_LOCATIONS:
      return { ...state, locations: action.data };
    default:
      return state;
  }
}
