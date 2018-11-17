import React, {Component} from "react";
import propTypes from 'prop-types';
import { Router } from "react-native-router-flux";
import scenes from '../routes/scenes'; 
import { Provider } from "react-redux";

export default class AppContainer extends Component{
    static propTypes = {
        store: propTypes.object.isRequired
    }
    render(){
        return (
            <Provider store={this.props.store}>
                <Router scenes={scenes}/>
            </Provider>
        );
    }
}
