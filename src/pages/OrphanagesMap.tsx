import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import mapMarkerImg from "../images/map-marker.png";
import api from "../services/api";

// import { BaseButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';

interface OrphanageItem{
   id: number,
   name: string,
   latitude: number,
   longitude: number
}


export default function OrphanagesMap() {
  const navigation = useNavigation();
  
  const [orphanages, setOrphanages] = useState<OrphanageItem[]>([]);
  
  // console.log(orphanages)

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, [orphanages]);

  function handleNavigateToOrphanageDetails(id:number) {
    // console.log("clicou")
    // console.log(id)
    navigation.navigate("OrphanageDetails", {id: id});
  }

  function handleNavigateToCreateOrphanage() {
    // console.log("clicou no create")
    navigation.navigate("SelectMapPosition");
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -6.0444212,
          longitude: -49.8854797,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        {orphanages.map( orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarkerImg}
              coordinate={{
                latitude:  orphanage.latitude,
                longitude: orphanage.longitude,
              }}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
            >
              <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>

        <TouchableOpacity
          style={styles.createOrphanageButton}
          onPress={handleNavigateToCreateOrphanage}
        >
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 16,
    justifyContent: "center",
  },

  calloutText: {
    color: "#0089a5",
    fontSize: 14,
    fontFamily: "Nunito_700Bold",
  },

  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3, //é sombreamento no android
  },

  footerText: {
    color: "#8fa7b3",
    fontFamily: "Nunito_700Bold",
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: "#15c3c6",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
});
