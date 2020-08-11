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

  const [questions, updateQuestions] = useState([
    {name: '', phase: 1, isDone: true},
  ]);

  const getNextPlayer = () => {
    if (turn === players.length) {
      updateTurn(0);
    }
    return players[turn];
  };

  const data: DataType = {
    truth: {
      percentage: 40,
      tasks: [
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
          name: 'Name three countries in five seconds',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Two countries beginning with the letter D',
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
          name: 'Name three animals beginning with C',
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
          name: "Name a country that starts with an A, but doesn't end with A",
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
          name: 'famous director or a famous actor?',
          phase: 1,
          isDone: false,
        },
        {
          name: 'live in a cave or live in a tree house?',
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
          name: 'Last person to touch the wall drinks',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Rice cooker/pressure cooker',
          phase: 1,
          isDone: false,
        },
        {
          name: 'White underwear/knickers',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Take/eat lime with your drink or else drink double',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Eat one teaspoon of salt',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Take one piece of clothing off or drink',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Tell a joke... or drink',
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
          name: 'Recite the alphabet backwards starting from J',
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
          name: 'Yell out the first word that comes to your mind',
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
          name: "Try to juggle 2 or 3 items of the group's choosing.",
          phase: 1,
          isDone: false,
        },
        {
          name:
            'Walk on your hands from one side of the room to the other. You can ask someone to hold your legs if necessary.',
          phase: 1,
          isDone: false,
        },
        {
          name: 'Get slapped on the face by the person of your choosing.',
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
      percentage: 20,
      tasks: [
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
          name: 'Ate rice today? Drink!',
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
  };

  const getTaskBatch = () => {
    const taskBatch: Array<TaskType> = [];
    Object.keys(data).forEach((category) => {
      const numTasks = data[category].percentage / 10;
      var remainingTasks = data[category].tasks.filter((task) => !task.isDone);
      for (let i = 0; i < numTasks; i++) {
        remainingTasks = remainingTasks.filter((task) => !task.isDone);
        const randIndex = Math.floor(Math.random() * remainingTasks.length);
        taskBatch.push(remainingTasks[randIndex]);
      }
    });
    return taskBatch;
  };

  const getNextTask = () => {
    if (
      questions.length === 0 ||
      questions.filter((q) => !q.isDone).length === 0
    ) {
      const qs = getTaskBatch();
      updateQuestions(qs);
      qs[0].isDone = true;
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
