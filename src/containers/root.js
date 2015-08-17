import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from '../store/configureStore';
import styles from '../styles/styles.css';

const store = configureStore();

export default React.createClass({
  render() {
    return(
      <Provider store={store}>
        {() => <App />}{/* why in a thunk? */}
      </Provider>
    );
  }
});
