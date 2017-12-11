import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../common/store-state';
import * as actions from '../actions/enthusiasmLevel';
import App from '../App';

export function mapStateToProps(state: StoreState) {
  return state;
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {};
}

export function mergeProps(
  stateProps: Object,
  dispatchProps: Object,
  ownProps: Object
) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps)(App);
