import Nav from './Nav/Nav';
import * as Font from 'expo-font';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { isFontLoaded } from '../Redux/Actions/initLoadAction';

class Index extends Component {
    async componentDidMount() {
        await Font.loadAsync({
            'Roboto-Regular': require("../assets/fonts/Roboto-Regular.ttf"),
            'Roboto-Medium': require("../assets/fonts/Roboto-Medium.ttf"),
            'Roboto-Bold': require("../assets/fonts/Roboto-Bold.ttf")
        })

        this.props.dispatch(isFontLoaded(true));
    }

    render() {
        return (
            // TODO: Create a loading screen
            this.props.isFontLoaded ?
                <Nav />
                : null
        );
    }
}

const mapStateToProps = (state) => {
    return state.initLoad;
}

export default connect(mapStateToProps)(Index);
