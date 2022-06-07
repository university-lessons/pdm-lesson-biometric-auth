import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native";
import useBiometricAuth from "./src/hooks/useBiometricAuth";

export default function App() {
  const { isAuth, isCompatible, isEnrolled, authorize } = useBiometricAuth();

  const handleAuth = async () => {
    const result = await authorize();

    // instant result (boolean) can also de used:
    console.log("Auth result: ", result);
  };

  return (
    <View style={styles.container}>
      <Text>Device Compatible: {JSON.stringify(isCompatible)}</Text>
      <Text>user has Biometrics: {JSON.stringify(isEnrolled)}</Text>
      <Text>Is Auth: {JSON.stringify(isAuth)}</Text>

      <Button title="Invoke Auth" onPress={handleAuth} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
