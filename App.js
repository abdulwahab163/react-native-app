import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "./src/helpers/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";

function App() {
  const [authInfo, setAuthInfo] = useState({ isAuth: false });

  return (
    <>
      <AuthContext.Provider value={{ authInfo, setAuthInfo }}>
        <NavigationContainer>
          {!authInfo.isAuth ? <AuthNavigator /> : <AppNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}

export default App;
