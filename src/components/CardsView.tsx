import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  Button,
  Card,
  Colors,
  Headline,
  IconButton,
  Modal,
  Paragraph,
  Portal,
  Text,
  Title,
} from 'react-native-paper';
import {GameSettings} from './StartGameView';
import {GStyle} from '../Theme';
import {DictionaryEntry, Difficulty} from './WordsDictionary';
// @ts-ignore
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {HowToPlayModal} from './shared/HowToPlayModal';
import {NextSound, SelectSound} from './shared/SoundService';

export const CardsView = (props: {settings: GameSettings; onBack(): void}) => {
  const words: DictionaryEntry[] = _filterDictionaryEntries(props.settings);
  const [wordIdx, setWordIdx] = React.useState(_randomIdx(words.length, 0));
  const [infoModalVisible, setInfoModalVisible] = React.useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hideWord, setHideWord] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const selectedWord = words[wordIdx];

  return (
    <Card style={[styles.container]}>
      <Card.Content style={[GStyle.bg, styles.cardContent]}>
        <View style={[GStyle.row, GStyle.spaceBetween, styles.counterLine]}>
          <IconButton
            icon={'keyboard-backspace'}
            color={Colors.white}
            onPress={() => {
              SelectSound.play();
              props.onBack();
            }}
          />
          <Countdown
            isPlaying={isPlaying}
            durationSec={props.settings.timer.value}
            durationDesc={props.settings.timer.shortName}
            onComplete={() => setModalVisible(true)}
          />
          <IconButton
            color={Colors.white}
            icon={'comment-question-outline'}
            onPress={() => {
              SelectSound.play();
              setInfoModalVisible(true);
            }}
          />
        </View>

        <View style={GStyle.center}>
          <IconButton
            size={30}
            color={Colors.white}
            icon={hideWord ? 'eye-off' : 'eye'}
            onPress={() => {
              SelectSound.play();
              setHideWord(!hideWord);
            }}
          />

          <View style={GStyle.row}>
            <Title style={[GStyle.mt10, GStyle.text, styles.word]}>
              {hideWord
                ? _maskString(selectedWord.word, '* ')
                : selectedWord.word.toUpperCase()}
            </Title>
            <Text style={[GStyle.text, styles.difficulty]}>
              {selectedWord.difficulty}
            </Text>
          </View>
          <Paragraph style={[GStyle.text, styles.textCenter]}>
            {hideWord ? _maskString(selectedWord.desc, '*') : selectedWord.desc}
          </Paragraph>
        </View>
        <View style={[GStyle.row]}>
          {isPlaying ? null : (
            <Button
              icon="play"
              mode="contained"
              style={[GStyle.btn, GStyle.mr15]}
              contentStyle={styles.btnContent}
              labelStyle={GStyle.btnLabel}
              onPress={() => {
                SelectSound.play();
                setIsPlaying(true);
                setHideWord(true);
              }}>
              Play
            </Button>
          )}

          <Button
            icon="refresh"
            mode="contained"
            style={[GStyle.btn]}
            contentStyle={styles.btnContent}
            labelStyle={GStyle.btnLabel}
            onPress={() => {
              NextSound.play();
              setIsPlaying(false);
              setHideWord(false);
              setWordIdx(_randomIdx(words.length, wordIdx));
            }}>
            Reset
          </Button>
        </View>

        {/*=============Modals==========*/}
        <HowToPlayModal
          visible={infoModalVisible}
          onDismiss={() => setInfoModalVisible(false)}
        />
        <TimeOutModal
          visible={modalVisible}
          onDismiss={() => {
            setIsPlaying(false);
            setHideWord(false);
            setModalVisible(false);
          }}
        />
      </Card.Content>
    </Card>
  );
};

const Countdown = (props: {
  isPlaying: boolean;
  durationSec: number;
  durationDesc: string;
  onComplete(): void;
}) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [props.isPlaying]);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={props.isPlaying}
      duration={props.durationSec}
      colors={['#00bf01', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[7, 5, 2, 0]}
      onComplete={() => props.onComplete()}
      initialRemainingTime={props.durationSec}>
      {({remainingTime}) => {
        return (
          <View key="text" style={GStyle.center}>
            <Text style={styles.textColor}>Remaining</Text>
            <Text style={[styles.textColor, styles.fontS35]}>
              {Math.floor(remainingTime / 60) + ':' + (remainingTime % 60)}
            </Text>
          </View>
        );
      }}
    </CountdownCircleTimer>
  );
};

const TimeOutModal = (props: {visible: boolean; onDismiss(): void}) => {
  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={props.onDismiss}
        contentContainerStyle={styles.modal}>
        <View>
          <View style={[GStyle.row, GStyle.justifyCenter]}>
            <IconButton icon={'timer-off'} />
            <Headline>TIME OUT</Headline>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

function _filterDictionaryEntries(settings: GameSettings) {
  if (settings.difficulty === Difficulty.Random) {
    return settings.dictionary.entries;
  }
  return settings.dictionary.entries.filter(
    it => it.difficulty === settings.difficulty,
  );
}

function _maskString(value: string, mask: string): string {
  return value.replace(/[^ ]/g, mask);
}

//todo: make it smart random
function _randomIdx(top: number, prev: number): number {
  const random = () => Math.floor(Math.random() * top);
  let value = random();

  if (top === 0) {
    return value;
  }

  do {
    value = random();
  } while (value === prev);

  return value;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  btnContent: {
    aspectRatio: 3,
    justifyContent: 'center',
  },
  word: {
    alignSelf: 'center',
    fontSize: 30,
  },
  difficulty: {
    borderRadius: 25,
    backgroundColor: '#00be01',
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 5,
    alignSelf: 'flex-start',
  },
  textColor: {
    color: 'white',
  },
  fontS35: {
    fontSize: 35,
  },
  modal: {
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 20,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counterLine: {
    alignItems: 'flex-start',
    width: Dimensions.get('window').width,
  },
  textCenter: {
    textAlign: 'center',
  },
});
