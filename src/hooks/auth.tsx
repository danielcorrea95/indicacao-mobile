import React, { 
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { Alert } from 'react-native';

import { api } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: number;
  name: string;
  campaign_id: number;
  school_id: number;
  phone: string;
  email: string;
  cpf: number;
  qrcode: string;
}

type AuthContextData = {
  signIn: (cpf: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLogging: boolean;
  user: User | null;
}

type AuthProviderProps = {
  children: ReactNode;
}

const USER_COLLECTION = '@advIndicacoes:users';

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children } : AuthProviderProps) {

  const [ user, setUser ] = useState<User | null>(null)
  const [ isLogging, setIsLogging ] = useState(false);

  async function signIn(cpf: string, password: string){

    cpf = cpf.replace(/([^\d])+/gim, '');

    if(!cpf || !password) {
      return Alert.alert('Login', 'Informe o CPF e a senha!');
    }

    setIsLogging(true);

    const user = {
      cpf: cpf,
      password: password
    }
  
    await api.post('/auth/login', user)
    .then(async function (response) {

      if (response.data.status === "success") {
        const dataUser = response.data;
        const userData = {
          id:           dataUser.id,
          name:         dataUser.name,
          campaign_id:  dataUser.campaign_id,
          school_id:    dataUser.school_id,
          phone:        dataUser.phone,
          email:        dataUser.email,
          cpf:          dataUser.cpf,
          qrcode:       dataUser.qr_code,
          token:        dataUser.token
        }
        
        await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));
        setUser(userData);
        
      } else {
        Alert.alert('Login', 'CPF e/ou senha incorretos');
      }
    })
    .catch(function (error) {
      Alert.alert('Error', 'Erro ao tentar entrar, tente novamente mais tarde');
      console.log(error);
    })
    .finally(() => setIsLogging(false));
  }

  async function loadUserStorageData(){
    setIsLogging(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if(storedUser){
      const userData = JSON.parse(storedUser) as User;
      console.log(userData);
      setUser(userData);
    }

    setIsLogging(false);

  }

  async function signOut() {
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  }

  useEffect(() => {
    loadUserStorageData();
  },[])

  return (
    <AuthContext.Provider value={{
      user, 
      signIn,
      signOut,
      isLogging,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider , useAuth };