import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { FilterState } from './common/store-state';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const liveLocations = {
    lastTime: 1,
    locations: {}
  };
  const filters = {
    selectedRoutes: []
  } as FilterState;
  ReactDOM.render(
    <App filters={filters} liveLocations={liveLocations} />,
    div
  );
});
