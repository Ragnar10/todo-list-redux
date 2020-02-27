import {types} from './types';

const {EDIT_ITEM_ACTION, DELETE_ITEM_ACTION, ADD_ITEM_ACTION, CHANGE_ITEM_ACTION, DONE_ITEM_ACTION} = types;

export const editItem = (id) => {
    return {type: EDIT_ITEM_ACTION, payload: id};
};
export const delItem = (id) => {
    return {type: DELETE_ITEM_ACTION, payload: id};
};
export const changeItem = (item) => {
    return {type: CHANGE_ITEM_ACTION, payload: item};
};
export const addItem = (item) => {
    return {type: ADD_ITEM_ACTION, payload: item};
};
export const doneItem = (id) => {
    return {type: DONE_ITEM_ACTION, payload: id};
};