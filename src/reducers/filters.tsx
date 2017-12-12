import { FiltersAction } from '../actions/filters';
import { initialState } from '../common/store';
import { UPDATE_SELECTED_ROUTES } from '../common/action-types';
import { FilterState } from '../common/store-state';

export function filtersReducer(
  state: FilterState = initialState.filters,
  action: FiltersAction
): FilterState {
  switch (action.type) {
    case UPDATE_SELECTED_ROUTES:
      return { ...state, selectedRoutes: action.data };
    default:
      return state;
  }
}
