import { StoreState } from './common/store-state';
import * as React from 'react';
import './App.css';
import LocationUpdater from './containers/LocationUpdater';
import Map from './containers/Map';

class App extends React.Component<StoreState> {
  render() {
    return (
      <div className="App">
        <LocationUpdater liveLocations={this.props.liveLocations} />
        <Map
         languageName={this.props.languageName}
         enthusiasmLevel={this.props.enthusiasmLevel}
         liveLocations={this.props.liveLocations}
        />
      </div>
    );
  }
}

export default App;
