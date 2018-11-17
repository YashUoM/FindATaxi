import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends React.Component {
    componentDidMount(){
        this.props.setName();
    }
    render() {
        return(
            <View style={styles.container}>
        <Text>Hello {this.props.name}</Text>
        </View>

        );
        
    }
} 

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})