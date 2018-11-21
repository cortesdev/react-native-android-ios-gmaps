import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoMapView } from '@expo/samples';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Maps',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoMapView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
