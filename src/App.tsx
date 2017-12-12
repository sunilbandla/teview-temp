import Filters from './containers/Filters';
import { StoreState } from './common/store-state';
import * as React from 'react';
import './App.css';
import LocationUpdater from './containers/LocationUpdater';
import Map from './containers/Map';

class App extends React.Component<StoreState> {
  render() {
    return (
      <div className="App">
        <LocationUpdater filters={this.props.filters} liveLocations={this.props.liveLocations} />
        <Map
         liveLocations={this.props.liveLocations}
        />
        <Filters filters={this.props.filters} />
      </div>
    );
  }
}

export default App;
