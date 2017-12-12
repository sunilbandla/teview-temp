import LiveLocations from '../../containers/LiveLocations';
import * as React from 'react';
import './Map.css';
import { geoMercator, geoPath } from 'd3-geo';
import * as constants from '../../common/constants';
import { StoreState } from '../../common/store-state';
import neighborhoods from '../../data/neighborhoods';
import freeways from '../../data/freeways';
import streets from '../../data/streets';

interface Props extends StoreState {
  changeName?: () => {};
}

export default class Map extends React.Component<Props, object> {
  mapdata: any;
  projection: any;
  pathGenerator: any;

  constructor(props: Props, context: any) {
    super(props, context);
    this.mapdata = {
      neighborhoods,
      freeways,
      streets
    };
    this.projection = geoMercator()
    .center([constants.centerX, constants.centerY])
    .scale(constants.scale)
    .translate([constants.width / 2, constants.height / 2]);
    this.pathGenerator = geoPath().projection(this.projection);
  }
  
  render() {
      const { changeName } = this.props;
      return (
        <div>
        <svg
          width={constants.width}
          height={constants.height}
          className="mapContainer"
        >
          <g>
            {this.getNeighborhoodElems()}
            {this.getStreetElems()}
            {this.getFreewayElems()}
            <LiveLocations liveLocations={this.props.liveLocations} />
          </g>
        </svg>
        <div>
          <button onClick={changeName}>change name</button>
        </div>
      </div>
    );
  }

  getNeighborhoodElems = () => {
    return this.mapdata.neighborhoods.features.map(
        (it: any, i: number) => {
          return (
            <path
              key={'path' + i}
              d={this.pathGenerator(it)}
              style={{
                fill: 'green',
                fillOpacity: 0.5
              }}
            />
          );
        }
      );
  }

  getStreetElems = () => {
    return this.mapdata.streets.features.map(
        (it: any, i: number) => {
          return (
            <path
              key={'path' + i}
              d={this.pathGenerator(it)}
              style={{
                fill: 'white',
                fillOpacity: 0.6,
                stroke: 'white',
                strokeOpacity: 1
              }}
            />
          );
        }
      );
  }

  getFreewayElems = () => {
      return this.mapdata.freeways.features.map(
        (it: any, i: number) => {
          return (
            <path
              key={'path' + i}
              d={this.pathGenerator(it)}
              style={{
                fill: 'black',
                fillOpacity: 0.5,
                stroke: 'black',
                strokeOpacity: 0.5
              }}
            />
          );
        }
      );
  }
}
