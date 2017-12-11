import { StoreState } from './common/store-state';
import * as React from 'react';
import './App.css';
import Hello from './containers/Hello';
import Map from './containers/Map';

class App extends React.Component<StoreState> {
  render() {
    return (
      <div className="App">
        <Hello name={this.props.languageName} enthusiasmLevel={this.props.enthusiasmLevel} />
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
