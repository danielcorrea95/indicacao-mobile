import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};

  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;

  border-radius: 50px;

  margin-bottom: ${RFValue(25)}px;

  justify-content: center;
  align-items: center;

`;