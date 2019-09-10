import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

//08102019 TODO: Add icons

import MapView from "react-native-maps";

const { height, width } = Dimensions.get("screen");

const parkings = [
  {
    id: 1,
    title: "Parking 1",
    price: 5,
    rating: 4.2,
    spots: 20,
    free: 10,
    location: {
      latitude: 37.78735,
      longitude: -122.4334
    }
  },
  {
    id: 2,
    title: "Parking 2",
    price: 7.5,
    rating: 1.8,
    spots: 25,
    free: 20,
    location: {
      latitude: 37.78845,
      longitude: -122.4344
    }
  },
  {
    id: 3,
    title: "Parking 3",
    price: 10,
    rating: 4.9,
    spots: 50,
    free: 25,
    location: {
      latitude: 37.78615,
      longitude: -122.4314
    }
  }
];

class Map extends Component {
  state = {
    hours: {}
  };
  renderHeader() {
    return (
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
    );
  }

  renderParking(item) {
    const { hours } = this.state;
    return (
      <View key={`parking-${item.id}`} style={styles.parking}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ fontSize: 16 }}>
            x{item.spots} {item.title}
          </Text>
          <View
            style={{ borderRadius: 6, borderColor: "grey", borderWidth: 0.5, padding: 4 }}
          >
            <Text style={{ fontSize: 16 }}>>05:00 hrs</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column"
          }}
        >
          <View style={{ flex: 0.5, justifyContent: "center" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Ionicons name="ios-pricetag">
                <Text
                  style={{
                    paddingLeft: 12
                  }}
                >
                  ${item.price}
                </Text>
              </Ionicons>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Ionicons name="ios-star">
                <Text
                  style={{
                    paddingLeft: 12
                  }}
                >
                  {item.rating}
                </Text>
              </Ionicons>
            </View>
          </View>
          <TouchableOpacity style={styles.buy}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ fontSize: 24, color: "#fff" }}>${item.price * 2}</Text>
              <Text style={{ color: "#fff" }}>
                {item.price}x{hours[item.id]} hrs
              </Text>
            </View>
            <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 24, color: "#fff" }}>{}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderParkings() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        onScrollEndDrag={(props) => console.log("onScroll", props)}
        style={styles.parkings}
      >
        {parkings.map((parking) => this.renderParking(parking))}
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
        {this.renderParkings()}
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
  parkings: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 24
  },
  parking: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
    padding: 12,
    marginHorizontal: 24,
    width: width - 24 * 2
  },
  buy: {
    flex: 1.25,
    flexDirection: "row",
    padding: 12,
    backgroundColor: "red",
    borderRadius: 6
  }
});

export default Map;
