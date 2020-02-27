import {types} from './types';

const {EDIT_ITEM_ACTION, DELETE_ITEM_ACTION, ADD_ITEM_ACTION, CHANGE_ITEM_ACTION, DONE_ITEM_ACTION} = types;

const initialState = {
    todoList: [
        {id: 1, title: 'Drink coffee', isDone: false},
        {id: 2, title: 'Create app', isDone: false},
        {id: 3, title: 'Go to shop', isDone: false},
        {id: 4, title: 'Buy PC', isDone: false},
        {id: 5, title: 'Play games', isDone: false},
        {id: 6, title: 'Learn redux', isDone: false},
        {id: 7, title: 'Return to Castle Wolfenstein', isDone: false}
    ],
    todoItem: {id: 0, title: '', isDone: false}
};

const _addNewItem = (state, action) => {
    const id = state.todoList.length !== 0 ? (state.todoList[state.todoList.length - 1].id + 1) : 1;
    return {
        ...state,
        todoList: [...state.todoList, {...action.payload, id: id}],
        todoItem: {...state.todoItem, id: 0, title: '', isDone: false}
    };
};
const _editItem = (state, action) => {
    return {
        ...state,
        todoList: [...state.todoList.map((item) => item.id === action.payload.id ? action.payload : item)],
        todoItem: {...state.todoItem, id: 0, title: '', isDone: false}
    };
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_ITEM_ACTION:
            return {
                ...state,
                todoList: [...state.todoList.filter((item) => item.id !== action.payload)],
            };
        case EDIT_ITEM_ACTION:
            return {
                ...state,
                todoItem: {...state.todoItem, ...state.todoList.find((item) => item.id === action.payload)}
            };
        case CHANGE_ITEM_ACTION:
            return {
                ...state,
                todoItem: {...state.todoItem, id: action.payload.id, title: action.payload.title}
            };
        case ADD_ITEM_ACTION:
            if (action.payload.id === 0) {
                return _addNewItem(state, action);
            } else {
                return _editItem(state, action);
            }
        case DONE_ITEM_ACTION:
            return {
                ...state,
                todoList: [...state.todoList.map((item) => item.id === action.payload ? {...item, isDone: !item.isDone}  : item)]

            };
        default:
            return state;
    }
};

export default rootReducer;