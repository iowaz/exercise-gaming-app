import {Image, ImageBackground, Text, View} from 'react-native';
import * as React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  User,
} from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {Dialog} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';

let userInfoState: User;
let googleSigninError: any;

const xmlStringWave: string = `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#f2f2f2" fill-opacity="1"
          d="M0,256L60,213.3C120,171,240,85,360,64C480,43,600,85,720,133.3C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
`;

function SigninPage({navigation}) {
  const [visible1, setVisible1] = useState(false);
  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log(userInfo);
      userInfoState = userInfo;
      navigation.navigate('Atividades');
    } catch (error) {
      toggleDialog1();
      googleSigninError = error;
      console.log('ERRRO NO GOOOOOGLE', error);
      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('../../../images/bg-login-ai.jpg')}
        style={{
          flexGrow: 1,
          flexShrink: 0,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <LinearGradient
          colors={['#31313c', '#1d1d28']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={{
            width: '100%',
            flexGrow: 0,
            flexShrink: 1,
            paddingHorizontal: 32,
            paddingVertical: 10,
            marginBottom: 300,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../../images/logo.png')}
            style={{
              width: '100%',
              resizeMode: 'contain',
              aspectRatio: 1923 / 345, // Your aspect ratio
            }}
            resizeMode="contain"
          />
        </LinearGradient>
      </ImageBackground>

      <SvgXml
        xml={xmlStringWave}
        style={{
          flexGrow: 0,
          flexShrink: 1,
          marginTop: -72,
          width: '100%',
          aspectRatio: 1440 / 320,
        }}
      />

      <View
        style={{
          flexGrow: 0,
          flexShrink: 1,
          paddingBottom: 32,
        }}>
        {/*<Text>TO</Text>*/}
        {/*<Button title="Google Signin" onPress={() => _signIn()} />*/}
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => _signIn()}
        />
      </View>

      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <Dialog.Title title="Logado ou nao" />
        <Text>JSON: {JSON.stringify(userInfoState)}</Text>
        <Text>Erro: {JSON.stringify(googleSigninError)}</Text>
      </Dialog>
    </View>
  );
}
export default SigninPage;
