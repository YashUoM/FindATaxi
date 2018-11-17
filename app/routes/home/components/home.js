import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Container} from 'native-base';

import MapContainer from './MapContainer';


class Home extends React.Component {
    componentDidMount(){
        this.props.setName();
    }
    render() {
        const region={
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }
        return(
           
        <Container>
            <MapContainer region={region}/>
        </Container>
       

        );
        
    }
} 

const styles={
    container:{
        flex:1.,
        justifyContent:'center',
        alignItems: 'center',
    },
    map:{
        ...StyleSheet.absoluteFillObject
    }
}


export default Home;

