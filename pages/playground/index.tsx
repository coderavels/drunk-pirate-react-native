import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from 'App';

type PlaygroundScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'playground'
>;

type PlaygroundScreenRouteProp = RouteProp<RootStackParamList, 'playground'>;

type Props = {
  route: PlaygroundScreenRouteProp;
  navigation: PlaygroundScreenNavigationProp;
};

type TaskType = {
  name: string;
  phase: number;
  isDone: boolean;
};

type DataType = {
  [name: string]: {
    percentage: number;
    tasks: Array<TaskType>;
  };
};

const Playground = ({route}: Props) => {
  const {players} = route.params;
  const [turn, updateTurn] = useState(0);
  const [data, updateData] = useState<DataType>({
    truth: {
      percentage: 20,
      tasks: [
        {
          name: 'what are your top 3 turn ons and offs',
          phase: 1,
          isDone: false,
        },
        {
          name: 'would you rather loose a limb or eyesight',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Call your ex',
          phase: 1,
          isDone: false,
        },
        {
          name: 'give back massage to person on your left',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Go blindfold and guess the body part by touching',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'If you have the power to choose, would you fuck five people or one',
          phase: 1,
          isDone: false,
        },
        {
          name: 'If you die in next five hours, what would you like to do',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'If you had to choose between your mom or your partner during a fire, who would you choose',
          phase: 1,
          isDone: false,
        },
        {
          name: 'What is the most efficient way to commit suicide',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Would you rather be forever alone, or lost a family member',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'If this is the end of the world, and the people in the room are the only ones alive, who would you pick for living together with forever',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'If you get your gender swapped, what would be the first thing you do',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Who do you think has the biggest dick in the room',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'If you had to fuck one person in the room, would you be top or bottom',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Last time you had masturbated, tell the story',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'Either get gangbanged by black guys, or get blowjob by a shark',
          phase: 1,
          isDone: false,
        },
        {
          name: 'In this room, whom do you want to fuck same gender.',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'what is one thing that you think this group would judge you for the most',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Have you peed in pool before?',
          phase: 1,
          isDone: false,
        },
        {
          name:
            "What's the most embarrassing thing you've ever done while drunk?",
          phase: 1,
          isDone: false,
        },
        {
          name: "What's your guilty pleasure?",
          phase: 1,
          isDone: false,
        },
        {
          name: 'How many have you slept with?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'The most recent lie you told',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Weirdest place that you did it?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Celebrity you masturbated to',
          phase: 1,
          isDone: false,
        },
        {
          name: 'How many people have you sent nudes to?',
          phase: 1,
          isDone: false,
        },
        {
          name: "What's your biggest fear?",
          phase: 1,
          isDone: false,
        },
        {
          name: 'What is your wildest fetish?',
          phase: 1,
          isDone: false,
        },
        {
          name: "What's something you're glad your parents don't know?",
          phase: 1,
          isDone: false,
        },
        {
          name: 'Have you ever cheated on someone?',
          phase: 1,
          isDone: false,
        },
        {
          name: "What's the worst intimate experience you've had?",
          phase: 1,
          isDone: false,
        },
        {
          name:
            'Who would you like to kiss in this room? If they feel the same way, kiss!',
          phase: 1,
          isDone: false,
        },
        {
          name: "What's the worst date you've been on?",
          phase: 1,
          isDone: false,
        },
        {
          name: 'Have you ever lied to get out of a bad date?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Top three turn ons',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Tell us about your first kiss!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Who here has the nicest bum?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Who is a person you most regret kissing?',
          phase: 1,
          isDone: false,
        },
        {
          name: "What's the naughtiest thing you've done in public?",
          phase: 1,
          isDone: false,
        },
        {
          name: "What do most people think is true about you, but isn't?",
          phase: 1,
          isDone: false,
        },
        {
          name: "What do most people think is true about you, but isn't?",
          phase: 1,
          isDone: false,
        },
        {
          name:
            'What is something your friends would never expect that you do?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Name 3 zombie films!',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'What is the silliest thing you have an emotional attachment to?',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'What is the most embarrassing thing your parents have caught you doing?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'When was the most inappropriate time you farted?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'What is the most embarrassing thing in your room?',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'Tell us about the last time someone unexpectedly walked in on you while you were naked.',
          phase: 1,
          isDone: false,
        },
        {
          name:
            "Tell us something you don't want the person on the left to know.",
          phase: 1,
          isDone: false,
        },
        {
          name: 'be able to teleport anywhere or be able to read minds?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'be beautiful/handsome but stupid or intelligent but ugly?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'never be able to wear pants or never be able to wear shorts?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'super sensitive taste or super sensitive hearing?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'have out of control body hair or a strong, pungent body odor?',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'accidentally be responsible for the death of a child or accidentally be responsible for the deaths of three adults?',
          phase: 1,
          isDone: false,
        },
      ],
    },
    dare: {
      percentage: 40,
      tasks: [
        {
          name: 'try to seduce the person on your left',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Choose two people to kiss in this room, and then do it',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Spank the person on your left',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Kiss everyone in the room one by one',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Act out your fav sex position',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Kiss the person on your right',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Strip tease your upper body',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Give a lap dance do the person of your choosing',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'who is the sexiest person in the room, everyone close their eyes, and you go and kiss them',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'count down from 30 skipping multiples of 4, drink for every mistake ',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Last person to touch the wall drinks',
          phase: 1,
          isDone: false,
        },
        {
          name: 'White underwear/knickers',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Eat one teaspoon of salt',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Take one piece of clothing off',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Touch your nose with your tongue!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Shuffle and drink!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Do the Gangnam style dance while drinking',
          phase: 1,
          isDone: false,
        },
        {
          name: 'For one round, everyone sing everything you talk',
          phase: 1,
          isDone: false,
        },
        {
          name: 'For one round, everyone talk at a high pitch!',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'Add on "fuck that" to the end of everything you say, for one round',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'Send a voice note to a chosen person by the team singing Let It Go',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Speak in a british accent... but in your native language!',
          phase: 1,
          isDone: false,
        },
        {
          name: "Take a sip from everyone's drink",
          phase: 1,
          isDone: false,
        },
        {
          name:
            "Do a dance move from a music video... If the team can't guess, then drink",
          phase: 1,
          isDone: false,
        },
        {
          name: 'Do 5 squats with one leg!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Compliment the person on your right',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Keep 3 ice cubes in your mouth until they melt',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Say something dirty to the person on your left',
          phase: 1,
          isDone: false,
        },
        {
          name: "Keep your eyes closed until it's your turn again",
          phase: 1,
          isDone: false,
        },
        {
          name: 'Do your best moon walk while drinking!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Twerk for 10 seconds',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Howl like a wolf for as long as you can',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Drink without using your hands',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Pole dance with an imaginary pole',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Love shot with the person across you',
          phase: 1,
          isDone: false,
        },
        {
          name: "Lick your elbow! If you can't, then drink!",
          phase: 1,
          isDone: false,
        },
        {
          name: 'Draw the person on your right',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Do the Macarena dance',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Attempt to do a magic trick.',
          phase: 1,
          isDone: false,
        },
        {
          name: "Be someone's pet for the next 5 minutes.",
          phase: 1,
          isDone: false,
        },
        {
          name: 'Attempt to break dance for 30 seconds.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Let the group give you a new hairstyle.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Do the worm.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Sniff the armpits of everyone in the room.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Belly dance like your life depended on it.',
          phase: 1,
          isDone: false,
        },
        {
          name:
            'Play a song on by slapping your butt cheeks till someone guesses the song.',
          phase: 1,
          isDone: false,
        },
        {
          name:
            "Drink a small cup or shot of a concoction that the group makes. (Don't make anything that might cause bodily harm. No visits to the emergency room.).",
          phase: 1,
          isDone: false,
        },
        {
          name:
            'Make every person in the group smile, keep going until everyone has cracked a smiled.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Seduce a member of the same gender in the group.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Crawl race with the person on your right',
          phase: 1,
          isDone: false,
        },
      ],
    },
    drink: {
      percentage: 40,
      tasks: [
        {
          name: 'every person who is wearing specs or black color, drink',
          phase: 1,
          isDone: false,
        },
        {
          name: 'everybody drink',
          phase: 1,
          isDone: false,
        },
        {
          name: 'choose two people to drink with',
          phase: 1,
          isDone: false,
        },
        {
          name: 'choose who to drink',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Those with a tattoo, drink!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Last person that went to the loo, drink!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'drink!',
          phase: 1,
          isDone: false,
        },
        {
          name: "If you've kissed the same gender, drink!",
          phase: 1,
          isDone: false,
        },
        {
          name: 'If you have cried in the past month, drink!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Drink for every one sibling you have',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Last person to touch the floor drinks!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'The one who visited the most countries, drink!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'The one who visited the least amount of countries, drink!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Who can speak the most languages? Drink!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Wearing glasses? Drink!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Last person to raise their hand and say "meow", drinks!',
          phase: 1,
          isDone: false,
        },
        {
          name: "Chug your drink. Bottom's up!",
          phase: 1,
          isDone: false,
        },
        {
          name: "Everybody bottom's up!",
          phase: 1,
          isDone: false,
        },
        {
          name: "Choose someone to bottom's up!",
          phase: 1,
          isDone: false,
        },
        {
          name: 'Last person to balance on one leg, drinks!',
          phase: 1,
          isDone: false,
        },
        {
          name: 'For one round, everyone converse without making eye contact',
          phase: 1,
          isDone: false,
        },
        {
          name: "Drink if you've been to a music concert",
          phase: 1,
          isDone: false,
        },
        {
          name: 'Toss a coin. If you guessed correctly, everybody else drinks.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Drink if you never gone surfing.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Drink if you never broken a bone.',
          phase: 1,
          isDone: false,
        },
        {
          name: "Drink if you have ruined someone else's vacation.",
          phase: 1,
          isDone: false,
        },
        {
          name: 'Drink if you tried to cut my own hair.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Drink if you have dyed your hair a crazy color.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Drink if you have had a physical fight with your best friend.',
          phase: 1,
          isDone: false,
        },
      ],
    },
  });

  const [questions, updateQuestions] = useState([
    {name: '', phase: 1, isDone: true},
  ]);

  const getNextPlayer = () => {
    if (turn === players.length) {
      updateTurn(0);
    }
    return players[turn];
  };

  const getTaskBatch = () => {
    const taskBatch: Array<TaskType> = [];
    Object.keys(data).forEach((category) => {
      var remainingTasks = data[category].tasks.filter((task) => !task.isDone);
      if (remainingTasks.length < 2) {
        for (let i = 0; i < data[category].tasks.length; i++) {
          data[category].tasks[i].isDone = false;
        }
      }
      const numTasks = data[category].percentage / 5;
      for (let i = 0; i < numTasks; i++) {
        let found = false;
        while (!found) {
          const randIndex = Math.floor(
            Math.random() * (data[category].tasks.length - 0) + 0,
          );
          if (!data[category].tasks[randIndex].isDone) {
            taskBatch.push({...data[category].tasks[randIndex]});
            data[category].tasks[randIndex].isDone = true;
            found = true;
          }
        }
      }
    });
    updateData(data);
    return taskBatch;
  };

  const getNextTask = () => {
    if (
      questions.length === 0 ||
      questions.filter((q) => !q.isDone).length === 0
    ) {
      const qs = getTaskBatch();
      updateQuestions(qs);
      return qs[0].name;
    } else {
      const remainingQuestions = questions.filter((q) => !q.isDone);
      const quesIndex = Math.floor(Math.random() * remainingQuestions.length);
      remainingQuestions[quesIndex].isDone = true;
      return remainingQuestions[quesIndex].name;
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.body}>
        <View style={styles.playerScroll}>
          <Text>{getNextPlayer()}</Text>
        </View>
        <View style={styles.task}>
          <Text>{getNextTask()}</Text>
        </View>
        <View style={styles.button}>
          <Button
            title={'Play'}
            onPress={() => {
              updateTurn(turn + 1);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  body: {
    alignItems: 'center',
  },
  playerScroll: {
    padding: 50,
    backgroundColor: 'gray',
    borderRadius: 20,
    marginTop: 20,
  },
  task: {
    padding: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
  },
  stackedTasks: {},
  button: {
    marginTop: 20,
  },
});

export default Playground;
