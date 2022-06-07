# Expo Biometric Auth Hook

This repository presents a minimal hook-based example of using expo local authentication for biometrics: TouchID, FaceID on iOS, Biometric Prompt on Android.

## Setup

`$ expo install expo-local-authentication`

## Hook useBiometricAuth

Get `useBiometricAuth` hook from [src/hooks/useBiometricAuth.js](src/hooks/useBiometricAuth.js)

## Usage

Hook returns status variables and an `authorize` function which can be used to invoke device native local authentication strategy.

```js
const { isAuth, isCompatible, isEnrolled, authorize } = useBiometricAuth();

const handleAuth = async () => {
  const result = await authorize();

  // instant result (boolean) can also de used:
  console.log("Auth result: ", result);
};
```

Where:

- `isAuth` is the current auth status (boolean);
- `isCompatible` indicates device compatibility with biometrics (boolean);
- `isEnrolled` indicates whatever users has registered for biometrics (boolean);
- `authorize()` invokes device authentication. `isAuth` is automatically updated. Auth result is also returned as boolean.
