import React from 'react';

import { Button } from '../../components/Form/Button';
import { 
  Container,
  Footer,
  Amount,
  LastTransaction,
} from './styles'

interface Props {
  amount: string;
  lastTransaction: string;
}


export function HighlightCard({
    amount, 
    lastTransaction,
  }: Props) {
  return (
    <Container> 
      <Footer>
        <Amount>
          {amount}
        </Amount>
        <LastTransaction >
          {lastTransaction}
        </LastTransaction>
        <Button
          title="Saiba mais"
          onPress={() => {}}
        />
      </Footer>
    </Container>
  )
}