import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { isSignedIn } from "./business/Authentication";
import { MainNavigator } from './config/route';
import { Util } from './business/Util';

import Expo from "expo";

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isReady: false
    }
  }

  componentWillMount() {
    this.loadFonts();
  }
  
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    console.log(Util.TimeHelper.getCurrentTimeStamp());

    const Layout = MainNavigator(isSignedIn());
    return <Layout />;
  }
}
