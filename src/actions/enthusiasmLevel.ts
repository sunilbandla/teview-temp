import * as actionTypes from '../common/action-types';

export interface IncrementEnthusiasm {
    type: actionTypes.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: actionTypes.DECREMENT_ENTHUSIASM;
}

export interface ChangeName {
    type: 'ChangeName';
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;
export type LanguageAction = ChangeName;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: actionTypes.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: actionTypes.DECREMENT_ENTHUSIASM
    };
}

export function changeName(): ChangeName {
    return {
        type: 'ChangeName'
    };
}