import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../common/store-state';
import LocationUpdater from '../components/LocationUpdater/LocationUpdater';
import * as actions from '../actions/liveLocations';

export function mapStateToProps(state: StoreState) {
  return state;
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.LiveLocationsAction>
) {
  return {
    updateLocations: (data: any) => dispatch(actions.updateLocations(data)),
    updateLastTime: (data: number) => dispatch(actions.updateLastTime(data)),
  };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps)(LocationUpdater);