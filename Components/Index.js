import Nav from './Nav/Nav';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { useScreens } from 'react-native-screens';
import { isAssetLoaded } from '../Redux/Actions/initLoadAction';

class Index extends Component {
    async componentDidMount() {
        useScreens();

        await Promise.all([
            Asset.loadAsync([
                require('../assets/Abs.png'),
                require('../assets/Arms.png'),
                require('../assets/Back.png'),
                require('../assets/Legs.png'),
                require('../assets/Save.png'),
                require('../assets/Chest.png'),
                require('../assets/Shoulders.png'),
            ]),
            Font.loadAsync({
                'Roboto-Regular': require("../assets/fonts/Roboto-Regular.ttf"),
                'Roboto-Medium': require("../assets/fonts/Roboto-Medium.ttf"),
                'Roboto-Bold': require("../assets/fonts/Roboto-Bold.ttf")
            })
        ]);

        return this.props.dispatch(isAssetLoaded(true));
    }

    render() {
        return (
            // TODO: Create a loading screen
            this.props.isAssetLoaded ?
                <Nav />
                : <AppLoading />
        );
    }
}

const mapStateToProps = (state) => {
    return state.initLoad;
}

export default connect(mapStateToProps)(Index);
