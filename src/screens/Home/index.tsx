import React from 'react';

import { useAuth } from "../../hooks/auth";
import { HighlightCard } from '../../components/HighlightCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon,
  HighlightCards,
  StatusesCart,
  Title,

} from './styles';
import { StatuseCart } from '../../components/StatuseCard';

export function Home() {
  const { signOut, user } = useAuth();

  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user?.name}</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={signOut}>
            <Icon name="power" />
          </LogoutButton>

        </UserWrapper>
      </Header>



      <HighlightCards >
        <HighlightCard 
          amount="3 CONTATOS"
          lastTransaction="EM ANÁLISE"
        />
        <HighlightCard 
          amount="NENHUM ITEM"
          lastTransaction="DISPONÍVEL"
        />
      </HighlightCards>


      <StatusesCart>
        <StatuseCart 
          
        />

        <StatuseCart 
          
        />
        
      </StatusesCart>

    </Container>
  )
}