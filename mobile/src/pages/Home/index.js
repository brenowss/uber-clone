import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Constants from "expo-constants";
import { AppLoading } from "expo";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { Container, Map, SearchBar, SearchContainer } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";

import Details from "../../components/Details";

import destinationMarker from "../../assets/destination.png";

const Home = () => {
  const GOOGLE_API_KEY = "AIzaSyBMGfzFVjL6sTctyFTr0qdKTN1ED5XDKVc";

  const [initialPosition, setInitialPosition] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directionReady, setDirectionReady] = useState(false);

  async function handleLocationSelected(data, { geometry }) {
    setDestination({
      latitude: geometry.location.lat,
      longitude: geometry.location.lng,
    });
    console.log(data.structured_formatting.main_text, "destino");
    console.log(origin, destination);
  }

  function clearDestination() {
    setDestination(null);
    setDirectionReady(false);
  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        Alert("Precisamos da sua permissão de localização para funcionar");
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setInitialPosition({ latitude, longitude });
      setOrigin({ latitude, longitude });
    })();
  }, []);

  if (initialPosition) {
    return (
      <Container>
        <Map
          region={{
            latitude: initialPosition.latitude,
            longitude: initialPosition.longitude,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation
          loadingEnabled
        >
          {destination && (
            <Marker
              draggable
              onDragEnd={(e) => setDestination(e.nativeEvent.coordinate)}
              coordinate={{
                latitude: destination.latitude,
                longitude: destination.longitude,
              }}
              anchor={{ x: 0, y: 0 }}
            >
              <Image
                source={destinationMarker}
                style={{ width: 25, height: 35, resizeMode: 'center' }}
              />
            </Marker>
          )}
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeWidth={3}
            strokeColor="#222"
            language="pt"
            precision="high"
            onReady={() => {
              setDirectionReady(true);
            }}
          />
        </Map>

        {!directionReady && (
          <SearchContainer
            style={{ marginTop: Constants.statusBarHeight + 25 }}
          >
            <GooglePlacesAutocomplete
              placeholder="Para onde deseja ir?"
              placeholderTextColor="#333"
              query={{
                key: GOOGLE_API_KEY,
                language: "pt-BR",
                components: "country:br",
              }}
              currentLocation
              currentLocationLabel="Ver locais próximos"
              isRowScrollable={false}
              minLength={2}
              onPress={handleLocationSelected}
              styles={SearchBar}
              textInputProps={{
                onFocus: () => {
                  setSearchFocused(true);
                },
                onBlur: () => {
                  setSearchFocused(false);
                },
                autoCapitalize: "none",
                autoCorrect: false,
              }}
              listViewDisplayed={searchFocused}
              fetchDetails
              enablePoweredByContainer={false}
            />
          </SearchContainer>
        )}
        {directionReady && (
          <Details>
            <Icon
              name="arrow-left"
              color="#000"
              size={26}
              style={{ position: "absolute", left: 10 }}
              onPress={clearDestination}
            />
          </Details>
        )}
      </Container>
    );
  } else {
    return <AppLoading />;
  }
};

export default Home;
