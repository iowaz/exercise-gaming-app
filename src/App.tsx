// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeFeedPage from './pages/home-feed/home-feed';
import MyActiviesPage from './pages/my-activities/my-activities';
import GroupsPage from './pages/groups/groups';
import SettingsPage from './pages/settings/settings';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import SigninPage from './pages/unauthenticated/login/signin';
import {Icon} from '@rneui/themed';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabController() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={HomeFeedPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="home-outline"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen name="Atividades" component={MyActiviesPage} />
      <Tab.Screen name="Grupos" component={GroupsPage} />
      <Tab.Screen name="Perfil" component={SettingsPage} />
      <Tab.Screen name="LOGIN" component={SigninPage} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homeeee"
          component={TabController}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={SettingsPage} />
        <Stack.Screen name="LoginSignin" component={SigninPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    '654096637653-jgh2qr6keltj5suf0dmt622niktpqkqf.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

export default App;
