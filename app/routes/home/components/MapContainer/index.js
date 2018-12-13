import React from 'react'
import {View} from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import SearchBox from '../SerachBox/index';
import SearchResults from '../SearchResults/index';
import styles from './mapContainerStyles';

export const MapContainer = ({region,getInputData}) =>{
    return(
       <ScrollView>
        <KeyboardAvoidingView  style={{width:410, height: 600}}>
             <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
        >
        <MapView.Marker
        coordinate={region}
        pinColor="green"
        />
        </MapView>
       
        <SearchBox getInputData={getInputData}/>
        <SearchResults/>
        </KeyboardAvoidingView>
        </ScrollView>
       )
}

export default MapContainer;