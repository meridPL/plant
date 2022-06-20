import React from 'react';
import store from '../mobx/store';

const ContextApp = React.createContext(store);

export const ContextProvider = ContextApp.Provider;
export const ContextConsumer = ContextApp.Consumer;

export default ContextApp;
