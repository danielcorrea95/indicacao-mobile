import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 250px;
  height: ${RFValue(250)}px;

  margin-right: ${RFValue(15)}px;

  background-color:  ${({ theme }) => theme.colors.shape};

  box-shadow: 0 0 10px #000;

  padding: 16px 20px;
  border-radius: 5px;

  align-items: center;
`;

export const ContainerIcon = styled.View`
  width: 65px;
  height: 65px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 33px;
`;

export const Icon = styled.View``;

export const AmountIndication = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(50)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text}
`;