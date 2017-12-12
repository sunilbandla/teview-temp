import './LiveLocations.css';

import * as d3 from 'd3';
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
  tooltipElem: any;

  constructor(props: Props, context: any) {
    super(props, context);
    this.projection = geoMercator()
    .center([constants.centerX, constants.centerY])
    .scale(constants.scale)
    .translate([constants.width / 2, constants.height / 2]);
    this.pathGenerator = geoPath().projection(this.projection);
    this.tooltipElem = d3.select('body').append('div').style('opacity', 0).style('position', 'absolute');
  }  

  onMouseOver = (location: any) => {
    return (event: any) => {
      this.tooltipElem.transition()
        .duration(200)
        .style('opacity', .9);
      this.tooltipElem.html(`Route: ${location.routeTag}, Vehicle: ${location.id}`)
        .style('left', '30px')
        .style('top', '30px');
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
