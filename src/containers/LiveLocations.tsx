import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../common/store-state';
import * as actions from '../actions/liveLocations';
import LiveLocations from '../components/LiveLocations/LiveLocations';

export function mapStateToProps({ liveLocations }: StoreState) {
  return {
    liveLocations
  };
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
  mergeProps)(LiveLocations);