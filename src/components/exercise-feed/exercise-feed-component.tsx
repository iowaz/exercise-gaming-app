import {Text, View} from 'react-native';
import {Avatar, Card} from '@rneui/base';
import {Button, Icon} from '@rneui/themed';
import * as React from 'react';

export interface ExerciseFeedComponentProps {
  avatar: {
    img_uri?: string;
    person_name: string;
  };
  date: string | Date;
  location?: string;
  img_uri?: string;
  exercise: {
    type: 'CYCLING' | 'WALKING';
    distance?: string;
    time?: string;
    medium_heart_frequency?: string;
    calories?: string;
  };
}

function GetIconForExercise(type: 'CYCLING' | 'WALKING'): {
  name: string;
  type: string;
} {
  if (type === 'WALKING') {
    return {name: 'shoe-sneaker', type: 'material-community'};
  }

  if (type === 'CYCLING') {
    return {name: 'bike', type: 'material-community'};
  }

  return {name: 'null', type: 'material-community'};
}

function customDateFormat(date: Date | string) {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  const formattedDate = date.toLocaleString('pt-BR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return formattedDate.replace(',', ' às');
}

function ExerciseFeedComponent(props: ExerciseFeedComponentProps) {
  const metrics: {title: string; content: string}[] = [];

  if (props.exercise.distance) {
    metrics.push({title: 'Distância', content: props.exercise.distance});
  }
  if (props.exercise.time) {
    metrics.push({title: 'Tempo', content: props.exercise.time});
  }
  if (props.exercise.medium_heart_frequency) {
    metrics.push({
      title: 'FC mêd',
      content: props.exercise.medium_heart_frequency,
    });
  }
  if (props.exercise.calories) {
    metrics.push({title: 'Cal', content: props.exercise.calories});
  }

  return (
    <Card
      containerStyle={{
        alignSelf: 'stretch',
        // width: '100%'
      }}>
      <Card.Title
        style={[
          {
            textAlign: 'left',
            color: 'red',
          },
        ]}>
        <View
          style={[
            {
              flex: 1,
              flexDirection: 'row',
              alignContent: 'center',
            },
          ]}>
          <View
            style={{
              flex: 1,
              alignSelf: 'center',
            }}>
            <Avatar size={48} rounded source={{uri: props.avatar.img_uri}} />
          </View>

          <View
            style={{
              flex: 2,
              paddingLeft: 16,
              alignSelf: 'center',
            }}>
            <Text style={{fontWeight: 'bold'}}>{props.avatar.person_name}</Text>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'center',
                paddingTop: 4,
              }}>
              <Icon
                name={GetIconForExercise(props.exercise.type).name}
                type={GetIconForExercise(props.exercise.type).type}
                color="black"
                size={14}
                style={{paddingRight: 4}}
              />

              <Text
                style={{
                  fontSize: 12,
                }}>
                {customDateFormat(props.date)} • {props.location}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'flex-start',
            paddingTop: 12,
          }}>
          {metrics.map((metric, index) => (
            <View
              key={metric.title}
              style={{
                paddingRight: 12,
                borderRightWidth: index === metrics.length - 1 ? 0 : 1,
                borderRightColor: '#ccc',
                paddingBottom: 0,
                paddingLeft: index === 0 ? 0 : 8,
              }}>
              <Text style={{fontSize: 12}}>{metric.title}</Text>
              <Text style={{fontSize: 16}}>{metric.content}</Text>
            </View>
          ))}
        </View>
      </Card.Title>
      {/*<Card.Divider />*/}

      <Card.Image
        style={{padding: 0}}
        source={{
          uri: props.img_uri,
        }}
      />

      <Button
        icon={
          <Icon
            name="share-variant-outline"
            type="material-community"
            color="#ffffff"
          />
        }
        iconContainerStyle={{ marginLeft: 10, marginRight: 16 }}
        title="COMPARTILHAR"
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginTop: 10,
        }}
      />
    </Card>
  );
}

export default ExerciseFeedComponent;
