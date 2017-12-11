export interface LiveLocationsState {
  lastTime: number;
  locations: any;
}

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
  liveLocations: LiveLocationsState;
}