import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { TextInput, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const TitleWrapper = styled.View`
  align-items: center;`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};;
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(20)}px;

  text-align: center;

  
`;

export const Footer = styled.View`
  width: 100%;
  height: 50%;
  background-color: ${({theme}) => theme.colors.background};
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFValue(30)}px;
  padding: 0 32px;
  justify-content: space-between;
`;

export const Register = styled(RectButton)`
  height: ${RFValue(56)}px;

  border-radius: 5px;
  align-items: center;
  flex-direction: row;

  margin-bottom: 16px;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.medium};

  flex: 1;

  text-align: center;
`;

export const ViewInput = styled.View`
  flex-direction: row;
  width: 100%;

  background-color: ${({theme}) => theme.colors.shape};

  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
`;

export const InputMask = styled(TextInputMask)`
  padding: 10px 15px;
  width: 85%;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

`;

export const InputPassword = styled(TextInput)`
  padding: 10px 15px;
  width: 85%;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

`;

export const PasswordButton = styled(TouchableOpacity)`
  width: 15%;
  justify-content: center;
  align-items: center;
`;
