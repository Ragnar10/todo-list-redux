import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({item, onEdit, onDelete, onDone, onOpenForm}) => {

    const onEditItem = (e, id) => {
        e.stopPropagation();
        onOpenForm();
        onEdit(id);
    };

    const onDeleteItem = (e, id) => {
        e.stopPropagation();
        onDelete(id);
    };

    return (
            <div className='todo-item'
                 style={item.isDone ? {backgroundColor: '#ccc', opacity: '0.5'}: null}
                 onClick={() => onDone(item.id) }
            >
                <span className='item-title' style={item.isDone ? {textDecoration: 'line-through'}: null}>{item.title}</span>
                <div className='btn-wrap'>
                    <button className='edit-btn' onClick={(e) => onEditItem(e, item.id)}>Edit</button>
                    <button className='del-btn' onClick={(e) => onDeleteItem(e ,item.id)}>Del</button>
                </div>
            </div>
    );
};

export default TodoListItem;
