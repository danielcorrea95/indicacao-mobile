import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { useForm } from 'react-hook-form';
// import { TextInputMask } from 'react-native-masked-text'
import { Ionicons } from '@expo/vector-icons';

import { 
  Container,
  Header,
  TitleWrapper,
  Title,
  Footer,
  FooterWrapper,
  Register,
  Text,
  ViewInput,
  InputMask,
  InputPassword,
  PasswordButton,
} from './styles';

import { useTheme } from 'styled-components';

import Logo from '../../assets/img/logo.svg';
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';

import { useAuth } from '../../hooks/auth';
import { ActivityIndicator, StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';


export interface FormData {
  cpf: string;
  password: string;
}



export function SignIn() {

  const { signIn, isLogging } = useAuth();
  const [ cpf, setCpf ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ hidePass, setHidePass ] = useState(true);

  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(); 

  function handleSignIn() {
      signIn( cpf, password)
  }

  function hidePassword() {
    setHidePass(!hidePass)
  }

  return (
    <Container >
      <Header>
        <TitleWrapper>
          <Logo 
            width={RFValue(200)} 
          />
          <Title>
            Indique seus amigos {'\n'}
            e ganhe benefícios {'\n'}
            exclusivos
          </Title>
        </TitleWrapper>
        
      </Header>


      <Footer>
        <FooterWrapper>

          {/* <TextInputMask
            style={styles.cpf}
            type={'cpf'}
            placeholder="CPF"
            onChangeText={setCpf}
          /> */}

          <ViewInput>
            <InputMask
              type={'cpf'}
              value = { cpf } 
              placeholder="CPF"
              onChangeText={setCpf}
            />
          </ViewInput>

          <ViewInput>
            <InputPassword 
              placeholder="Insira sua senha"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={hidePass}
            />
            
            <PasswordButton 
              onPress={hidePassword}
            >
              { hidePass ?
                <Ionicons name="eye" color={theme.colors.text} size={25} />
              : <Ionicons name="eye-off" color={theme.colors.text} size={25} />
              } 
            </PasswordButton>
          </ViewInput>

          <Button 
            title="Entrar"
            onPress={handleSignIn}
          />

        { isLogging && 
          <ActivityIndicator 
            color={theme.colors.primary} 
            style={{marginTop: 18}}
          />
        }

          {/* <Button title="Submit" onPress={handleSubmit(handleLogin)} /> */}

          <Register >
            <Text>
              Cadastre-se
            </Text>
          </Register>
        </FooterWrapper>
      </Footer>
    </Container>
  )
}