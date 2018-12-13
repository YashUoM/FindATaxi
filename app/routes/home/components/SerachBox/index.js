import React from 'react';
import { View, InputGroup, Input } from 'native-base';
import { Text } from 'react-native';
import styles from './SBStyle';

import Icon from 'react-native-vector-icons/FontAwesome';
export const SearchBox = ({getInputData}) => {

    function handleInput(key,val){
        getInputData({
            key,
            value:val
        })
    }

    return (

        <View style={styles.searchBox}>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>PICK UP</Text>
                <InputGroup>
                    <Icon name="search" size={15} color="#FF5E3A" />
                    <Input style={styles.inputSearch} placeholder="pick-up location" onChangeText={handleInput.bind(this,"pickUp")} />
                </InputGroup>
            </View>
            <View style={styles.secondInputWrapper}>
                <Text style={styles.label}>DROP OFF</Text>
                <InputGroup>
                    <Icon name="search" size={15} color="#FF5E3A" />
                    <Input style={styles.inputSearch} placeholder="drop-off location" onChangeText={handleInput.bind(this,"dropOff")}/>
                </InputGroup>
            </View>
        </View>


    );

}


export default SearchBox;