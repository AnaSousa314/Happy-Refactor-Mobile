import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";

import mapMarkerImg from "../../images/map-marker.png";

export default function SelectMapPosition() {

  const navigation = useNavigation();

  function handleNextStep(){
    navigation.navigate('OrphanageData');
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -6.0444212,
          longitude: -49.8854797,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
        style={styles.mapStyle}
      >
        <Marker
          icon={mapMarkerImg}
          coordinate={{
            latitude: -6.0444212,
            longitude: -49.8854797,
          }}
        />
      </MapView>

      <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },

  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  nextButton: {
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,

    position: "absolute",
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
    color: "#fff",
  },
});
