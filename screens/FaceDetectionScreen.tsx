import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, Button, Dimensions, StatusBar } from 'react-native';

import { NavigationScreenProps } from 'react-navigation';
import { Button as PaperButton, Card, Title, Paragraph } from 'react-native-paper';
import { ScreenOrientation, Camera, Permissions, Accelerometer } from 'expo';

import { ScreenStyles } from '../helpers/Styles'


export class FaceDetectionScreen extends React.Component<NavigationScreenProps>  {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    recording: false,
    latitude: false,
    longitude: false,
    speed: false,
    error: null,
    image: {uri: 'file:///var/mobile/Containers/Data/Application/C03718DE-0B23-432B-8E11-0C9DB6C5FC85/Library/Caches/ExponentExperienceData/%2540yangyuan%252Fsnack-BkmMmUSRX/Camera/5C445C62-23D2-49D8-999C-93D92246541D.jpg'},
  };

  static navigationOptions = {
    tabBarVisible: false,
    title: 'Discove2r',
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    const { status2 } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    await Permissions.askAsync(Permissions.LOCATION);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={this.state.type}
          ref={cam => {
            this.camera = cam;
          }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => this.camera.takePictureAsync().then(data => {
              this.setState({image: {uri: data.uri}});
              console.log(data)
            })}
            title="Dismiss"
          />
          <Image source = {this.state.image} style = {{height: 128, width: 128}}></Image>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Detect"
          />
        </Camera>
      </SafeAreaView>
    );
  }
}