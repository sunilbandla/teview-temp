import './LiveLocations.css';

import { geoMercator, geoPath } from 'd3-geo';
import * as React from 'react';

import * as constants from '../../common/constants';
import { LiveLocationsState } from '../../common/store-state';

interface Props {
  liveLocations: LiveLocationsState;
  updateLastTime?: (data: number) => void;
  updateLocations?: (data: any) => void;
}

export default class LiveLocations extends React.Component<Props, object> {
  projection: any;
  pathGenerator: any;

  constructor(props: Props, context: any) {
    super(props, context);
    this.projection = geoMercator()
    .center([constants.centerX, constants.centerY])
    .scale(constants.scale)
    .translate([constants.width / 2, constants.height / 2]);
    this.pathGenerator = geoPath().projection(this.projection);
  }  

  onMouseOver = (location: any) => {
    return (event: any) => {
      console.log('over', location, event);
    };
  }

  render() {
    return (
      <g>
        {this.getVehicles()}
      </g>
    );
  }

  getVehicles = () => {
    return this.props.liveLocations.locations.map(
        (it: any, i: number) => {
          const feature: any = {
            type: 'Feature',
            properties: {route: it.routeTag},
            geometry: { type: 'Point', coordinates: [ it.lon, it.lat ] }
          };
          console.log(feature);
          return (
            <path
              key={'path' + it.id}
              onMouseOver={this.onMouseOver(it)}
              d={this.pathGenerator(feature)}
              style={{
                fill: 'red',
                fillOpacity: 0.5
              }}
            />
          );
        }
      );
  }

}
