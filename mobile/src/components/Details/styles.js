import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Orientation = styled.Text`
  margin: 15px 0;
  text-align: center;
`;

export const UberXContainer = styled.TouchableOpacity`
  background-color: #d4e2fc;
  height: 120px;
  width: 100%;
  border-bottom-width: 1px;
  flex-direction: row;
  border-bottom-color: #ddd;
  justify-content: space-around;
  align-items: center;
`;

export const UberComfortContainer = styled.TouchableOpacity`
  background-color: #fff;
  height: 120px;
  width: 100%;
  border-bottom-width: 0.5px;
  border-bottom-color: #ccc;
  flex-direction: row;
  border-bottom-color: #ddd;
  justify-content: space-around;
  align-items: center;
`;

export const OrderCar = styled.TouchableOpacity`
  background-color: #000;
  height: 70px;
  margin: 5px;
  width: 95%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const OrderCarText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-family: Roboto;
  font-size: 20px;
`;

export const CarImage = styled.Image`
  width: 100px;
  height: 60px;
  margin-left: 10px;
`;
export const CarInfo = styled.View``;
export const CarType = styled.Text`
  font-weight: 600;
  font-size: 22px;
`;
export const DropOff = styled.Text`
  font-size: 16px;
`;
export const Price = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;
