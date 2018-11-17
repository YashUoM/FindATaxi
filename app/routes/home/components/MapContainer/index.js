import React from 'react'
import {View} from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
//import {StyleSheet} from 'react-native';
import styles from './mapContainerStyles';

export const MapContainer = ({region}) =>{
    return(
        
             <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
        ></MapView>
       )
}

export default MapContainer;