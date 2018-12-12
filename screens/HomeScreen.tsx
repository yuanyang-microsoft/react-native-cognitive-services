import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, Button, Dimensions, StatusBar } from 'react-native';

import { NavigationScreenProps, createStackNavigator } from 'react-navigation';
import { Button as PaperButton, Card, Title, Paragraph } from 'react-native-paper';

import { ScreenStyles } from '../helpers/Styles'
import { FaceDetectionScreen } from './FaceDetectionScreen'


class HomeScreenInternal extends React.Component<NavigationScreenProps>  {
  static navigationOptions = {
    title: 'Discover',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <StatusBar></StatusBar>
        <View style={{ padding: 15 }}>
          <Card
            onPress={() => navigate('FaceDetection')}
          >
            <Card.Cover style={{ width: Dimensions.get('window').width - 30, height: (Dimensions.get('window').width - 30) * 10 / 16 }} source={require('../assets/face.jpg')} />
            <Card.Content>
              <Title>Face Detection</Title>
              <Paragraph>Detect one or more human faces in an image and get back face rectangles for where in the image the faces are, along with face attributes which contain machine learning-based predictions of facial features.</Paragraph>
            </Card.Content>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}


export const HomeScreen = createStackNavigator(
  {
    Demos: {
      screen: HomeScreenInternal,
    },
    FaceDetection: {
      screen: FaceDetectionScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index == 0,
    tabBarLabel: 'Demos',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/demos.png')}
        style={[ScreenStyles.icon, { tintColor: tintColor }]}
      />
    )
  }
}