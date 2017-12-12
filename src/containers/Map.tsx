import { connect } from 'react-redux';

import { StoreState } from '../common/store-state';
import Map from '../components/Map/Map';

export function mapStateToProps({ liveLocations }: StoreState) {
  return {
    liveLocations,
  };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
  mapStateToProps,
  null,
  mergeProps)(Map);
