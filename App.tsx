import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView,{PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useFonts, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import mapMarker from './src/images/map-marker.png'

export default function App() {

  const [fontsLoaded] = useFonts({
    nunito600: Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if(!fontsLoaded){
    return null;
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
          longitudeDelta: 0.009
        }}
      >
        <Marker 
          icon={mapMarker}
          coordinate={{
            latitude: -6.0444212,
            longitude: -49.8854797
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
        >

          <Callout tooltip onPress={()=>{ alert('oi') }}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Meninas</Text>
            </View>
          </Callout>

        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          2 orfanatos encontrados
        </Text>

        <TouchableOpacity style={styles.createOrphanageButton} 
          onPress={()=>{}}
        >
          <Feather name='plus' size={20} color='#fff'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  calloutContainer:{
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText:{
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'
  },

  footer:{
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,//é sombreamento no android
  },

  footerText:{
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },

  createOrphanageButton:{
    width: 56,
    height: 56,
    backgroundColor: '#15c3c6',
    borderRadius: 20,

    justifyContent:'center',
    alignItems: 'center'
  }


});
