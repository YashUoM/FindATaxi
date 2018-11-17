import React from 'react';
import {Actions, Scene} from 'react-native-router-flux';
import HomeContainer from './home/containers/homeContainers';

const scenes = Actions.create(
    <Scene key="root">
    <Scene key="home" component={HomeContainer} title="home" initial>
    </Scene>
    </Scene>
)

export default scenes;