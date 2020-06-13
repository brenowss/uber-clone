import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

import {
  Header,
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

const Details = (props) => {
  return (
    <Animatable.View 
    animation="slideInUp"
    duration={700}
    style={{
      height: '50%',
      width: '100%',
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: 'absolute',
      bottom: 0,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      backgroundColor: '#fff'
    }}
    >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            width: "100%",
          }}
        >
          <Header>
            {props.children}
            <Orientation>Escolha um carro</Orientation>
          </Header>
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
    </Animatable.View>
  );
};

export default Details;
