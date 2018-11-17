
import React, { Component } from 'react';
import createStore from './store/createStore';
import AppContainer from './appContainer';


export default class Root extends React.Component{
    renderApp(){
        const initialState = window._INITIAL_STATE_;
        const store = createStore(initialState);

        return( 
            <AppContainer store = {store} />
        ); 
    }
    render(){
        return this.renderApp();
    }
}


