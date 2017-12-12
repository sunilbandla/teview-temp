export interface LiveLocationsState {
  lastTime: number;
  locations: any;
}

export interface FilterState {
  selectedRoutes: any[];
}

export interface StoreState {
  filters: FilterState;
  liveLocations: LiveLocationsState;
}