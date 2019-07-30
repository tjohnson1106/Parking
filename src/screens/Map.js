import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import MapView from "react-native-maps";

class Map extends Component {
  renderHeader() {
    return (
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
    );
  }

  renderParking() {
    return (
      <ScrollView horizontal contentContainerStyle={styles.parking}>
        {}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={styles.map}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flex: 0.5,
    justifyContent: "center"
  },
  map: {
    flex: 3
  },
  parking: {
    flex: 1,
    position: "absolute",
    right: 20,
    left: 20,
    bottom: 0
  }
});

export default Map;
