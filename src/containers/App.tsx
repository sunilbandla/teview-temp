import { connect } from 'react-redux';

import App from '../App';
import { StoreState } from '../common/store-state';

export function mapStateToProps(state: StoreState) {
  return state;
}

export default connect(mapStateToProps)(App);
