import * as actionTypes from '../common/action-types';

export interface UpdateSelectedRoutes {
    type: actionTypes.UPDATE_SELECTED_ROUTES;
    data: any;
}

export type FiltersAction = UpdateSelectedRoutes;

export function updateSelectedRoutes(data: any[]): UpdateSelectedRoutes {
    return {
        type: actionTypes.UPDATE_SELECTED_ROUTES,
        data,
    };
}
