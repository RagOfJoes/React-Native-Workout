import Root from './Nav/Nav';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { useScreens } from 'react-native-screens';
import { isAssetLoaded } from '../Redux/Actions/initLoadAction';

class Index extends Component {
    componentDidMount() {
        // React-Navigation optimization for different screens
        useScreens();
    }

    async _startResourceAsync() {
        // Array of all required images
        const images = [require('../assets/Abs.png'), require('../assets/Arms.png'), require('../assets/Back.png'),
        require('../assets/Legs.png'), require('../assets/Save.png'), require('../assets/Chest.png'),
        require('../assets/Shoulders.png')];

        // Array of fonts
        const fonts = {
            'Roboto-Regular': require("../assets/fonts/Roboto-Regular.ttf"),
            'Roboto-Medium': require("../assets/fonts/Roboto-Medium.ttf"),
            'Roboto-Bold': require("../assets/fonts/Roboto-Bold.ttf")
        };

        // For all required images cache to imporve app performance 
        const cacheImages = images.map((image) => {
            return Asset.fromModule(image).downloadAsync();
        });

        // Await for all Promises 
        return Promise.all([cacheImages, Font.loadAsync(fonts)]);
    }

    render() {
        return (
            // TODO: Create a loading screen
            this.props.isAssetLoaded ?
                <Root />
                : <AppLoading
                    startAsync={() => this._startResourceAsync()}
                    onFinish={() => this.props.dispatch(isAssetLoaded(true))}
                    onError={() => console.log("ERROR")}
                />
        );
    }
}

const mapStateToProps = (state) => {
    return state.initLoad;
}

export default connect(mapStateToProps)(Index);
