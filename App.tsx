import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Theme} from './src/Theme';
import {
  GameSettings,
  StartGameView,
  TimerOptions,
} from './src/components/StartGameView';
import {CardsView} from './src/components/CardsView';
import {Dictionaries, Difficulty} from './src/components/WordsDictionary';

const App = () => {
  const [gameInProgress, setGameInProgress] = React.useState(false);
  const [gameSettings, setGameSettings] = React.useState<GameSettings | null>(
    null,
  );

  return (
    <PaperProvider theme={Theme}>
      {!gameInProgress ? (
        <View style={styles.container}>
          <StartGameView
            defaultSettings={{
              difficulty: Difficulty.Random,
              dictionary: Dictionaries[0],
              timer: TimerOptions[4],
            }}
            onPlay={settings => {
              setGameInProgress(true);
              setGameSettings(settings);
            }}
          />
        </View>
      ) : null}

      {gameInProgress && gameSettings ? (
        <CardsView
          settings={gameSettings}
          onBack={() => setGameInProgress(false)}
        />
      ) : null}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
