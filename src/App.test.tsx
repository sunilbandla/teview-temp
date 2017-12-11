import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const liveLocations = {
    lastTime: 1,
    locations: {}
  };
  ReactDOM.render(
    <App languageName="TS" enthusiasmLevel={10} liveLocations={liveLocations} />,
    div
  );
});
