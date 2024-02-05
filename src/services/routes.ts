import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type RootStackParamList = {
  navigation: {
    Home: undefined; // undefined because you aren't passing any params to the home screen
    Profile: {name: string};
  };
};

const StackRouter = createBottomTabNavigator<RootStackParamList>();

export default StackRouter;
