import * as actionTypes from '../common/action-types';

export interface UpdateLocations {
    type: actionTypes.UPDATE_LOCATIONS;
    data: any;
}

export interface UpdateLastTime {
    type: actionTypes.UPDATE_LAST_TIME;
    data: number;
}

export type LiveLocationsAction = UpdateLocations | UpdateLastTime;

export function updateLocations(data: any): UpdateLocations {
    return {
        type: actionTypes.UPDATE_LOCATIONS,
        data
    };
}

export function updateLastTime(data: number): UpdateLastTime {
    return {
        type: actionTypes.UPDATE_LAST_TIME,
        data
    };
}
