import React from 'react';
import { Button } from '../Form/Button';
import { 
  Container,
  ContainerIcon,
  AmountIndication,
  Title
 } from './styles';

export function StatuseCart(){
  return (
    <Container>
      <ContainerIcon>

      </ContainerIcon>

      <AmountIndication>
        1
      </AmountIndication>

      <Title>
        Todos os contatos
      </Title>

      <Button
        title="Ver todos"
        onPress={() =>{} }
      />
    </Container>
  )
}