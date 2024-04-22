import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Entypo from 'react-native-vector-icons/Entypo'

const MapScreen = () => {
  const router = useNavigation('Home');

  const onBackPress = () => {
    router.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.LocationStyle}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >

          <TouchableOpacity onPress={onBackPress} style={styles.back}>
            <Entypo name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          {/* يمكنك إضافة معالم Marker كما يلي */}
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="My Marker"
            description="Some description here"
          />
        </MapView>
      </View>
      <View style={styles.backgrundStyle}>


      </View>
      <View style={{ backgroundColor: 'white', height: 380 }}>
        <View style={{ backgroundColor: 'white', alignSelf: 'flex-end' }}>
          <Text > 0000000</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
    flexDirection: 'column',
    justifyContent: 'space-between'


  },
  map: {
    width: "%100",
    height: 500,
    borderRadius: 20,
  },
  LocationStyle: {
    flex: 1,
    width: '%100',


  },
  backgrundStyle: {

  },
  back: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#2f3030',
    padding: 10,
    borderRadius: 5,

  }
});

export default MapScreen;
