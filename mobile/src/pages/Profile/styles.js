import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const InfoContainer = styled.View`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
`;

export const ProfilePicture = styled.Image`
  border-radius: 100px;
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
`;

export const ProfileName = styled.Text`
  font-size: 20px;
`;

export const ProfileTravelCount = styled.Text`
  font-size: 14px;
`;

export const RecentTravelsContainer = styled.View`
  height: 150px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px;
`;

export const RecentTravel = styled.TouchableOpacity`
  height: 70px;
  width: 32%;
  border-radius: 8px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

`;
export const RecentTravelOrigin = styled.Text`
  font-size: 12px;
`;

export const RecentTravelDestination = styled.Text`
  font-size: 12px;
`;

export const SeeMore = styled.Text`
  font-size: 14px;
  color: #444;
`;

export const ConfigsContainer = styled.View`
  width: 100%;
  height: auto;
`;

export const Title = styled.Text`
  font-size: 20px;
  width: 100%;
`;

export const Config = styled.View`
  height: 40px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border-top-color: #999;
  border-top-width: 0.5px;
  border-bottom-color: #999;
  border-bottom-width: 0.5px;
  padding: 0 10px; 
`;

export const ConfigTitle = styled.Text`

`;
