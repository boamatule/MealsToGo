import React from "react";
import { AccountBackground, AccountCover, AuthButton } from "../component/account.styles";

export const LoginScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AuthButton
        icon="lock-open-outline"
        color="black"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Login
      </AuthButton>
    </AccountBackground>
  );
};
