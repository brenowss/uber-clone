import React from "react";
import { View } from "react-native";

import {
  DestinationContainer,
  Orientation,
  UberXContainer,
  UberComfortContainer,
  OrderCar,
  OrderCarText,
  CarImage,
  CarInfo,
  CarType,
  DropOff,
  Price,
} from "./styles";

import uberXImage from "../../assets/UberX.png";
import comfortImage from "../../assets/Comfort.png";

const Details = () => {
  return (
    <DestinationContainer>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          width: "100%",
        }}
      >
        <Orientation>Escolha um carro</Orientation>
        <UberXContainer>
          <CarImage source={uberXImage} />
          <CarInfo>
            <CarType>UberX</CarType>
            <DropOff>Chegada às 18:45</DropOff>
          </CarInfo>
          <Price>R$10,23</Price>
        </UberXContainer>
        <UberComfortContainer>
          <CarImage source={comfortImage} />
          <CarInfo>
            <CarType>Comfort</CarType>
            <DropOff>Chegada às 18:45</DropOff>
          </CarInfo>
          <Price>R$14,78</Price>
        </UberComfortContainer>
      </View>
      <OrderCar>
        <OrderCarText style={{ color: "#fff" }}>PEÇA UM CARRO</OrderCarText>
      </OrderCar>
    </DestinationContainer>
  );
};

export default Details;
