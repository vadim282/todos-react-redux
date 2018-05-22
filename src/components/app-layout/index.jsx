import React, { Component } from 'react';
import './styles.css';
import { Provider } from 'react-redux';
import TodoBox from '../todo-box';

import configureStore from '../../configureStore';

const initialStore =
	{
		items: [],
	};

const store = configureStore(initialStore);

class AppLayout extends Component {
  render() {
    return (
					<Provider store={store}>
            <TodoBox />
					</Provider>
    );
  }
}

export default AppLayout;
