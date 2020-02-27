import React from 'react';
import {connect} from 'react-redux'
import {editItem, delItem, doneItem} from '../store/action';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css';

const TodoList = ({todoList, editItem, delItem, doneItem, onOpenForm}) => {

    return (
        <div className='list-wrap'>
            {
                todoList.length > 0 ? todoList.map((item) => {
                    return <TodoListItem  key={item.id}
                                          item={item}
                                          onEdit={editItem}
                                          onDelete={delItem}
                                          onOpenForm={onOpenForm}
                                          onDone={doneItem}
                    />;
                }) : null
            }
        </div>
    );
};

const mapStateToProps = ({todoList}) => {
    return {
        todoList
    };
};

const mapDispatchToProps = {
    editItem: editItem,
    delItem: delItem,
    doneItem: doneItem
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
