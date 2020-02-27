import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';
import TodoList from '../TodoList/TodoList';
import ModalForm from "../ModalForm/ModalForm";
import './App.css';

const App = () => {

    const [openForm, setOpenForm] = useState(false);

    const openModalForm = () => {
      setOpenForm(true);
    };
    const cancelModalForm = () => {
        setOpenForm(false);
    };



    return (
        <Provider store={store}>
            <div className='container' style={openForm ? {pointerEvents: 'none', opacity: '.3'} : null}>
                <header className='header'>What do I want to do today?</header>
                <button className='add-btn' onClick={openModalForm}>Add item</button>
                <TodoList onOpenForm={openModalForm}/>
            </div>
            {openForm? <ModalForm onCancelModalForm={cancelModalForm}/> : null}
        </Provider>
    );
};

export default App;