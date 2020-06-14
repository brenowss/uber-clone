import React from "react";
import Constants from "expo-constants";

import {
  Container,
  InfoContainer,
  ProfilePicture,
  ProfileName,
  ProfileTravelCount,
  RecentTravelsContainer,
  RecentTravel,
  RecentTravelOrigin,
  RecentTravelDestination,
  SeeMore,
  ConfigsContainer,
  Title,
  Config,
  ConfigTitle,
} from "./styles";
import { Feather as Icon} from '@expo/vector-icons';

import avatarImage from '../../assets/avatar.png';

const Profile = () => {
  return (
    <Container style={{ paddingTop: Constants.statusBarHeight + 10 }}>
      <InfoContainer>
        <ProfilePicture source={avatarImage} />
        <ProfileName>Breno Fiorese</ProfileName>
        <ProfileTravelCount>143 viagens</ProfileTravelCount>
      </InfoContainer>
      <RecentTravelsContainer>
      <Title>Viagens recentes</Title>
        <RecentTravel>
          <RecentTravelOrigin>Antônio Prado</RecentTravelOrigin>
          <Icon name="arrow-down" size={14} />
          <RecentTravelDestination>Ipê</RecentTravelDestination>
        </RecentTravel>
        <RecentTravel>
          <RecentTravelOrigin>Caxias do Sul</RecentTravelOrigin>
          <Icon name="arrow-down" size={14} />
          <RecentTravelDestination>Ipê</RecentTravelDestination>
        </RecentTravel>
        <RecentTravel>
          <RecentTravelOrigin>Flores da Cunha</RecentTravelOrigin>
          <Icon name="arrow-down" size={14} />
          <RecentTravelDestination>Caxias do Sul</RecentTravelDestination>
        </RecentTravel>
        <SeeMore>Ver mais <Icon name="arrow-right" size={14} /></SeeMore>
      </RecentTravelsContainer>
      <ConfigsContainer>
        <Title style={{ marginLeft: 10, marginBottom: 5}}>Configurações</Title>
        <Config>
          <ConfigTitle>Cartão de Crédito</ConfigTitle>
          <ConfigTitle>Mastercard</ConfigTitle>
        </Config>
      </ConfigsContainer>
    </Container>
  );
};

export default Profile;
