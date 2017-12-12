import './LocationUpdater.css';

import axios from 'axios';
import * as React from 'react';

import { LiveLocationsState } from '../../common/store-state';
import * as constants from '../../common/constants';

interface Props {
  liveLocations: LiveLocationsState;
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
      .then(res => {
        const testData: any = [
          {
            id: '1538',
            lon: '-122.447713',
            routeTag: 'N',
            predictable: 'true',
            speedKmHr: '0',
            dirTag: 'N____O_F00',
            heading: '221',
            lat: '37.773483',
            secsSinceReport: '16'
          }
        ];
        let locations = res.data.vehicle || testData;
        if (!Array.isArray(locations)) {
          locations = [locations];
        }
        this.props.updateLocations(locations);
        // this.props.updateLocations(res.data.vehicle || []);
        this.props.updateLastTime(res.data.lastTime.time);
        setTimeout(this.fetchLocations, constants.locationPollIntervalInMs);
      });
  }
  componentDidMount() {
    this.fetchLocations();
  }
  render() {
    return '';
  }
}
