// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import AppLoading from "expo-app-loading";
// import { ThemeProvider } from "styled-components/native";

// import * as Font from "expo-font";
// // import {
// //   useFonts as useOswald,
// //   Oswald_400Regular,
// // } from "@expo-google-fonts/oswald";
// // import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// import * as firebase from "firebase";

// import { theme } from "./src/infrastructure/theme";
// import { Navigation } from "./src/infrastructure/navigation";

// import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// const firebaseConfig = {
//   apiKey: "AIzaSyDDkP6jCauwcpIBawul-g_aWklwWlsqbjs",
//   authDomain: "mealstogo-c6d2e.firebaseapp.com",
//   projectId: "mealstogo-c6d2e",
//   storageBucket: "mealstogo-c6d2e.appspot.com",
//   messagingSenderId: "428604827672",
//   appId: "1:428604827672:web:ff74c45102d763bf0ebb6d",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export default function App() {
//   const [oswaldLoaded] = useOswald({
//     Oswald_400Regular,
//   });

//   const [latoLoaded] = useLato({
//     Lato_400Regular,
//   });

//   if (!oswaldLoaded || !latoLoaded) {
//     return null;
//   }

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <AuthenticationContextProvider>
//           <Navigation />
//         </AuthenticationContextProvider>
//       </ThemeProvider>
//       <ExpoStatusBar style="auto" />
//     </>
//   );
// }

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";

import * as Font from "expo-font";

import * as firebase from "firebase";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDDkP6jCauwcpIBawul-g_aWklwWlsqbjs",
  authDomain: "mealstogo-c6d2e.firebaseapp.com",
  projectId: "mealstogo-c6d2e",
  storageBucket: "mealstogo-c6d2e.appspot.com",
  messagingSenderId: "428604827672",
  appId: "1:428604827672:web:ff74c45102d763bf0ebb6d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const fetchFont = () => {
  return Font.loadAsync({
    Oswald_400Regular: require("./assets/fonts/Oswald-VariableFont_wght.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={() => console.log("Error")}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
