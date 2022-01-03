import React from "react";
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';

interface BtnPlus {
  size: number;
  color: string;
}

export function ButtonPlus({ size, color} : BtnPlus) {
  return(
    <Container>
      <Feather 
        name="plus"
        color={color}
        size={size}
      />
    </Container>
  )
}