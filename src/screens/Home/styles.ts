import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';



export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color:  ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
width: 100%;

padding: 0 24px;
margin-top: ${getStatusBarHeight() + RFValue(28)}px;

flex-direction: row;
justify-content: space-between;
align-items: center;`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const User = styled.View`
  margin-left: 15px;
`;

export const UserGreeting = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const LogoutButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(23)}px;
`;

export const StatusesCart = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  flex: 1%;
  width: 100%;
  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: 16px;
`;
