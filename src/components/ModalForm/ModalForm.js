import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addItem, changeItem} from '../store/action';
import './ModalForm.css';

const ModalForm = ({onCancelModalForm, onAddItem, onChangeItem, todoItem}) => {

    const [showError, setShowError] = useState(false);

    const onChangeItemValue = (e, id) => {
        if (!e.target.value.length) {
            setShowError(true);
        } else {
            setShowError(false);
        }
        onChangeItem({
            [e.target.name]: e.target.value,
            id: id
        });
    };

    const onCancelForm = () => {
        onChangeItem({
            title: '',
            id: todoItem.id
        });
        // todoItem.title = '';
        onCancelModalForm();
    };

    const saveItem = (e, item) => {
        e.preventDefault();
        if (!item.title.length) {
            setShowError(true);
            return;
        }
        onCancelModalForm();
        onAddItem(item);
    };

    return (
        <form className='modal-form'>
            <div className='input-wrap'>
                <label htmlFor='title'>Title:</label>
                <input type='text' value={todoItem.title} name='title' maxLength='30'
                       onChange={(e) => onChangeItemValue(e, todoItem.id)}/>
                {showError ? <span className='error'>Заполните поле</span> : null}
            </div>
            <div className='btn-wrap'>
                <button type='submit' className='save-btn' onClick={(e) => saveItem(e, todoItem)}>Save</button>
                <button className='cancel-btn' onClick={onCancelForm}>Cancel</button>
            </div>
        </form>
    );
};

const mapStateToProps = ({todoItem}) => {
    return {
        todoItem
    };
};
const mapDispatchToProps = {
    onAddItem: addItem,
    onChangeItem: changeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
