import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import {Picker} from '@react-native-community/picker';
import {RootStackParamList} from 'App';

type AddPlayersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'addPlayers'
>;

type Props = {
  navigation: AddPlayersScreenNavigationProp;
};

const AddPlayers = ({navigation}: Props) => {
  const [numPlayers, updateNumPlayers] = useState(3);
  const [players, updatePlayers] = useState(['', '', '']);

  useEffect(() => {
    updatePlayers(Array(numPlayers).fill(''));
  }, [numPlayers]);

  const startGame = () => {
    return navigation.navigate('playground', {
      players,
    });
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
      contentContainerStyle={styles.contentScrollView}>
      <View style={styles.body}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTitle}>Drunk Pirate</Text>
          <Text style={styles.headingSubtitle}>Lets Add Players!</Text>
        </View>
        <View style={styles.numPlayersSection}>
          <Text>Number of players: </Text>
          <Picker
            selectedValue={numPlayers}
            style={styles.numPlayersInput}
            onValueChange={(itemValue) => {
              updateNumPlayers(parseInt(itemValue.toString(), 10));
            }}>
            {Array.from(new Array(12), (_, i) => i + 3).map((i) => (
              <Picker.Item label={i.toString()} value={i} key={i.toString()} />
            ))}
          </Picker>
        </View>
        <View style={styles.playersSection}>
          {players.map((player, i) => (
            <View style={styles.playerRow} key={i}>
              <TextInput
                style={styles.playerName}
                value={player[i]}
                onChangeText={(value) => {
                  players[i] = value;
                  updatePlayers(players);
                }}
              />
            </View>
          ))}
        </View>
        <View style={styles.buttons}>
          <Button title="Lets Start!" onPress={() => startGame()} />
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
    justifyContent: 'space-around',
    flexGrow: 1,
  },
  headingContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  headingSubtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.black,
  },
  playersSection: {
    alignContent: 'stretch',
  },
  playerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    marginVertical: 5,
  },
  buttons: {
    paddingTop: 20,
    marginHorizontal: 30,
  },
  playerName: {
    height: 40,
    width: '50%',
    backgroundColor: '#ededed',
  },
  numPlayersSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numPlayersInput: {
    width: 50,
  },
});

export default AddPlayers;
