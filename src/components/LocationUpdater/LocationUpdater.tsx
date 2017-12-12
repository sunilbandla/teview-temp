import './LocationUpdater.css';

import axios from 'axios';
import * as React from 'react';

import { LiveLocationsState, FilterState } from '../../common/store-state';
import * as constants from '../../common/constants';

interface Props {
  liveLocations: LiveLocationsState;
  filters: FilterState;
  updateLastTime?: (data: number) => void;
  updateLocations?: (data: any) => void;
}

export default class LocationUpdater extends React.Component<Props, object> {
  fetchLocations = (): any => {
    let t = this.props.liveLocations.lastTime;
    axios
      .get(
        `http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&t=${t}`
      )
      .then((res: any) => {
        // const testData: any = [
        //   {
        //     id: '1538',
        //     lon: '-122.447713',
        //     routeTag: 'N',
        //     predictable: 'true',
        //     speedKmHr: '0',
        //     dirTag: 'N____O_F00',
        //     heading: '221',
        //     lat: '37.773483',
        //     secsSinceReport: '16'
        //   }
        // ];
        let locations = res.data.vehicle || [];
        if (!Array.isArray(locations)) {
          locations = [locations];
        }
        locations = this.filterLocations(locations, this.props.filters);
        this.props.updateLocations(locations);
        this.props.updateLastTime(res.data.lastTime.time);
        setTimeout(this.fetchLocations, constants.locationPollIntervalInMs);
      });
  }
  filterLocations = (locations: any, filters: FilterState) => {
    let routes = filters.selectedRoutes;
    if (!routes) {
      return locations;
    }
    routes = routes.map((r: any) => {
      return r.selected ? r.tag : '';
    });
    return locations.filter((loc: any) => {
      return (routes.indexOf(loc.routeTag) !== -1);
    });
  }
  componentDidMount() {
    this.fetchLocations();
  }
  render() {
    return '';
  }
}
