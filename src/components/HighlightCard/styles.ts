import styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 10px 20px;  
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;

  justify-content: center;
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size:  ${RFValue(25)}px;

  color: ${({ theme  }) => theme.colors.text_dark};

  margin-top: ${RFValue(20)}px;
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size:  ${RFValue(12)}px;
  color: ${({ theme  }) => theme.colors.text};
`;
