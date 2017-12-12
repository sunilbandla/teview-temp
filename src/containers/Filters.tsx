import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../common/store-state';
import Filters from '../components/Filters/Filters';
import * as actions from '../actions/filters';

export function mapStateToProps({ filters }: StoreState) {
  return {
    filters,
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.UpdateSelectedRoutes>
) {
  return {
    updateSelectedRoutes: (data: any) => dispatch(actions.updateSelectedRoutes(data)),
  };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps)(Filters);