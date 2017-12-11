import { EnthusiasmAction } from '../actions/enthusiasmLevel';
import {
  DECREMENT_ENTHUSIASM,
  INCREMENT_ENTHUSIASM
} from '../common/action-types';
import { initialState } from '../common/store';

export function enthusiasmReducer(
  state: number = initialState.enthusiasmLevel,
  action: EnthusiasmAction
): number {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      // return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
      return state + 1;
    case DECREMENT_ENTHUSIASM:
      return Math.max(1, state - 1);
    default:
      return state;
  }
}
