import './Filters.css';

import axios from 'axios';
import * as React from 'react';

interface Props {
  filters: any;
  updateSelectedRoutes?: (data: any) => void;
}

export default class Filters extends React.Component<Props, object> {
    allRoutes: any;

  constructor(props: Props, context: any) {
    super(props, context);
    this.allRoutes = null;
    this.fetchRoutes();
  }

  update = () => {
      let elem: any = document.getElementById('selectRoutes');
      let selection = this.props.filters.selectedRoutes.map((route: any, i: number) => {
          route.selected = elem.value.indexOf(route.tag) !== -1;
          return route;
      });
      this.props.updateSelectedRoutes(selection);
  }

  render() {
    const filters = this.props.filters;
    if (!filters.selectedRoutes) {
        return '';
    }
    let options = filters.selectedRoutes.map((route: any, i: number) => {
        return <option key={i} value={route.tag}>{route.title}</option>;
    });
    let value: string[] = [];
    filters.selectedRoutes.forEach((route: any) => {
        if (route.selected) {
            value.push(route.tag);
        }
    });
    return (
      <form onSubmit={this.update}>
        <select multiple={true} id="selectRoutes" value={value} onChange={this.update}>
            {options}
        </select>
        <input type="submit" value="Update" />
      </form>
    );
  }

  fetchRoutes = (): any => {
    return axios
      .get(
        `http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni`
      )
      .then((res: any) => {
        let routes = res.data.route || [];
        this.allRoutes = routes;
        routes.forEach((r: any) => {
            r.selected = 'selected';
        });
        this.props.updateSelectedRoutes(routes);
        return this.allRoutes;
      });
  }
}
