import React from "react";import { Button } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { AccountBackground, AccountCover } from "../component/account.styles";

export const LoginScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <Button 
        icon="lock-open-outline"
        color="black"
        mode="contained" 
        onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </AccountBackground>
  );
};
