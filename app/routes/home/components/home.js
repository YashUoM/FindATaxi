import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Container} from 'native-base';

import MapContainer from './MapContainer';


class Home extends React.Component {
    componentDidMount(){
        this.props.getCurrentLocation();
    }
    onMapLayout = () => {
        this.setState({ isMapReady: true });
      }
    
    render() {
       
        return( 
           
        <Container style={styles.container}> 
            {this.props.region.latitude &&
            <MapContainer region={this.props.region} getInputData={this.props.getInputData}/>
            } 
        </Container>
       

        );
        
    }
} 

const styles={
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    map:{
        ...StyleSheet.absoluteFillObject
    }
}


export default Home;

