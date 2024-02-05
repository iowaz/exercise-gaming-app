import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {Avatar, Card} from '@rneui/base';
import StackRouter from '../../services/routes';
import {Icon} from '@rneui/themed';
import ExerciseFeedComponent from '../../components/exercise-feed/exercise-feed-component';

function HomeFeedPage({navigation}: StackRouter) {
  const LINKEDIN_IMAGE_DIOGO =
    'https://media.licdn.com/dms/image/C4D03AQGZzo0EhhhK8w/profile-displayphoto-shrink_200_200/0/1659449726012?e=1697673600&v=beta&t=z1s-UqSTz6RAQqNPejG1EkXFByxCUzydhaIz9Gua4cw';
  const LINKEDIN_IMAGE_CAROL =
    'https://media.licdn.com/dms/image/C4D03AQFvDDxJUcGx6Q/profile-displayphoto-shrink_200_200/0/1569320916381?e=1697673600&v=beta&t=LOO7rsfb2TfPA4bmSEzKoX36JTF3cgyeYz-_Fks1FkY';

  const metrics = [
    {
      title: 'Distância',
      content: '1,18km',
    },
    {
      title: 'Tempo',
      content: '11min 29s',
    },
    {
      title: 'FC méd',
      content: '98 bpm',
    },
    {
      title: 'Cal',
      content: '44 kcal',
    },
  ];
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          alignSelf: 'center',
        }}>
        {/*<Text>Koe My Patron 4567!</Text>*/}

        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('LoginSignin')}
        />
        <ExerciseFeedComponent
          avatar={{
            img_uri: LINKEDIN_IMAGE_CAROL,
            person_name: 'Carol dos Santos',
          }}
          date={new Date().toISOString()}
          location={'São Paulo'}
          img_uri={
            'https://wheelsofwisdom.files.wordpress.com/2014/09/garmin-gpx.jpg'
          }
          exercise={{
            type: 'CYCLING',
            distance: '1,18km',
            time: '11min 29s',
            medium_heart_frequency: '98 bpm',
            calories: '44 kcal',
          }}
        />

        <ExerciseFeedComponent
          avatar={{
            img_uri: LINKEDIN_IMAGE_DIOGO,
            person_name: 'Diogo C. Laass',
          }}
          date={'2023-08-13T12:15:04.653Z'}
          location={'Rio de Janeiro'}
          img_uri={
            'https://images.wondershare.com/drfone/article/2021/04/view-gpx-files-online-1.jpg'
          }
          exercise={{
            type: 'WALKING',
            distance: '3,98km',
            time: '42min 29s',
            medium_heart_frequency: '112 bpm',
            calories: '238 kcal',
          }}
        />
      </View>
    </ScrollView>
  );
}

export default HomeFeedPage;
