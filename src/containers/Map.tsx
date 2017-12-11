import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../common/store-state';
import * as actions from '../actions/enthusiasmLevel';
import Map from '../components/Map/Map';

export function mapStateToProps(state: StoreState) {
  return state;
}

export function mapDispatchToProps(dispatch: Dispatch<actions.LanguageAction>) {
  return {
    changeName: () => dispatch(actions.changeName())
  };
}

export function mergeProps(
  stateProps: Object,
  dispatchProps: Object,
  ownProps: Object
) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Map);
