import React from 'react';
import {StyleSheet, ScrollView, View, Text, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App';

const goToAddPlayersScreen = (navigation: WelcomeScreenNavigationProp) => {
  return navigation.navigate('addPlayers');
};

const data = [
  {
    title: 'Everyone playing is over the age of 18',
    icon: '',
  },
  {
    title: 'Everyone playing will drink responsibly',
    icon: '',
  },
  {
    title: 'Agree to our Terms & Conditions',
    icon: '',
  },
];

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'welcome'
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const Welcome = ({navigation}: Props) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
      contentContainerStyle={styles.contentScrollView}>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Drunk Pirate</Text>
          <Text style={styles.sectionDescription}>
            Welcome to Drunk Pirate, the online drinking game. The game is
            simple: Flip the card and do what it says. Some cards are simple and
            some are rules that last multiple turns.
          </Text>
        </View>
        <View style={styles.list}>
          {data.map((d, i) => (
            <View key={i} style={styles.listItem}>
              <Text>{'\u2022'}</Text>
              <Text style={styles.title}>{d.title}</Text>
            </View>
          ))}
        </View>
        <View style={styles.buttons}>
          <Button
            title="Lets Start!"
            onPress={() => goToAddPlayersScreen(navigation)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  contentScrollView: {
    flexGrow: 1,
  },
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    flexGrow: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  list: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    marginTop: 32,
  },
  listItem: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    paddingLeft: 5,
  },
  buttons: {
    paddingTop: 20,
    marginHorizontal: 30,
  },
});

export default Welcome;
