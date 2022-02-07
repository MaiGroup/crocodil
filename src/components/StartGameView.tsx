import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {
  Button,
  Checkbox,
  Colors,
  IconButton,
  Subheading,
} from 'react-native-paper';
import {GStyle} from '../Theme';
import {Dictionary, Difficulty} from './WordsDictionary';
import {AppModal} from './shared/AppModal';
import {HowToPlayModal} from './shared/HowToPlayModal';
import {SelectSound} from './shared/SoundService';

export const TimerOptions: {value: number; name: string; shortName: string}[] =
  [
    {value: 60, name: '1 min', shortName: '1m'},
    {value: 2 * 60, name: '2 min', shortName: '2m'},
    {value: 3 * 60, name: '3 min', shortName: '3m'},
    {value: 5 * 60, name: '5 min', shortName: '5m'},
    {value: 10 * 60, name: '10 min', shortName: '10m'},
    {value: 15 * 60, name: '15 min', shortName: '15m'},
    {value: 20 * 60, name: '20 min', shortName: '20m'},
  ];

export interface GameSettings {
  difficulty: string;
  /**
   * Value in seconds
   */
  timer: {value: number; name: string; shortName: string};
  dictionary: Dictionary;
}

export const StartGameView = (props: {
  defaultSettings: GameSettings;
  onPlay(settings: GameSettings): void;
}) => {
  const [infoModalVisible, setInfoModalVisible] = React.useState(false);
  // const [languageModalVisible, setLanguageModalVisible] = React.useState(false);
  const [levelModalVisible, setLevelModalVisible] = React.useState(false);
  const [timerModalVisible, setTimerModalVisible] = React.useState(false);
  const [dictionary] = React.useState<Dictionary>(
    props.defaultSettings.dictionary,
  );
  const [level, setLevel] = React.useState(props.defaultSettings.difficulty);
  const [timer, setTimer] = React.useState(props.defaultSettings.timer);

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={require('./../assets/img/c2_1.jpg')}
        resizeMode="cover"
        style={styles.imageBg}>
        <View style={[GStyle.fill, GStyle.center]}>
          <IconButton
            icon="comment-question-outline"
            size={30}
            color={Colors.white}
            style={[styles.btnHelp]}
            onPress={() => {
              SelectSound.play();
              setInfoModalVisible(true);
            }}
          />

          <View style={[GStyle.fill, GStyle.bottom]}>
            {/*<Button*/}
            {/*  icon="globe-model"*/}
            {/*  mode="contained"*/}
            {/*  style={[GStyle.btn, GStyle.mb15]}*/}
            {/*  contentStyle={styles.btnContent}*/}
            {/*  labelStyle={GStyle.btnLabel}*/}
            {/*  onPress={() => setLanguageModalVisible(true)}>*/}
            {/*  Language - {dictionary.language}*/}
            {/*</Button>*/}
            <Button
              icon="diamond-outline"
              mode="contained"
              style={[GStyle.btn, GStyle.mb15]}
              contentStyle={styles.btnContent}
              labelStyle={GStyle.btnLabel}
              onPress={() => {
                SelectSound.play();
                setLevelModalVisible(true);
              }}>
              Level - {level}
            </Button>
            <Button
              icon="update"
              mode="contained"
              style={[GStyle.btn, GStyle.mb15]}
              contentStyle={styles.btnContent}
              labelStyle={GStyle.btnLabel}
              onPress={() => {
                SelectSound.play();
                setTimerModalVisible(true);
              }}>
              Timer - {timer.name}
            </Button>
          </View>

          <Button
            icon="play-circle-outline"
            mode="contained"
            style={[GStyle.btn, GStyle.mb15]}
            contentStyle={styles.btnPlay}
            labelStyle={GStyle.btnLabel}
            onPress={() => {
              SelectSound.play();
              props.onPlay({
                difficulty: level,
                timer: timer,
                dictionary: dictionary,
              });
            }}>
            Play
          </Button>

          {/*===========Modals===========*/}
          <HowToPlayModal
            visible={infoModalVisible}
            onDismiss={() => setInfoModalVisible(false)}
          />
          {/*<AppModal*/}
          {/*  visible={languageModalVisible}*/}
          {/*  onDismiss={() => setLanguageModalVisible(false)}*/}
          {/*  children={*/}
          {/*    <LanguagesCheckList*/}
          {/*      subheading={'Select language.'}*/}
          {/*      defaultValue={dictionary}*/}
          {/*      onSelect={value => {*/}
          {/*        setDictionary(value);*/}
          {/*        setLanguageModalVisible(false);*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  }*/}
          {/*/>*/}
          <AppModal
            visible={levelModalVisible}
            onDismiss={() => setLevelModalVisible(false)}
            children={
              <CheckList
                subheading={'Nivelul de dificultate:'}
                model={Difficulty}
                defaultValue={level}
                onSelect={value => {
                  SelectSound.play();
                  setTimeout(() => {
                    setLevel(value);
                    setLevelModalVisible(false);
                  }, 200);
                }}
              />
            }
          />

          <AppModal
            visible={timerModalVisible}
            onDismiss={() => setTimerModalVisible(false)}
            children={
              <TimerCheckList
                subheading={'Timpul pentru a ghici un cuvînt.'}
                defaultValue={timer.value}
                onSelect={value => {
                  SelectSound.play();
                  setTimeout(() => {
                    setTimer(value);
                    setTimerModalVisible(false);
                  }, 200);
                }}
              />
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const CheckList = (props: {
  subheading: string;
  defaultValue: string;
  model: any;
  onSelect(value: string): void;
}) => {
  const [value, setValue] = React.useState(props.defaultValue);
  return (
    <View>
      <Subheading>{props.subheading}</Subheading>
      {Object.values(props.model).map((v: any) => (
        <Checkbox.Item
          key={v}
          label={v}
          onPress={() => {
            setValue(v);
            props.onSelect(v);
          }}
          status={value === v ? 'checked' : 'unchecked'}
        />
      ))}
    </View>
  );
};

const TimerCheckList = (props: {
  subheading: string;
  defaultValue: number;
  onSelect(value: any): void;
}) => {
  const [value, setValue] = React.useState(props.defaultValue);
  return (
    <View>
      <Subheading>{props.subheading}</Subheading>
      {TimerOptions.map(it => (
        <Checkbox.Item
          key={it.name}
          label={it.name}
          onPress={() => {
            setValue(it.value);
            props.onSelect(it);
          }}
          status={value === it.value ? 'checked' : 'unchecked'}
        />
      ))}
    </View>
  );
};

// const LanguagesCheckList = (props: {
//   subheading: string;
//   defaultValue: Dictionary;
//   onSelect(value: Dictionary): void;
// }) => {
//   const [value, setValue] = React.useState(props.defaultValue);
//   return (
//     <View>
//       <Subheading>{props.subheading}</Subheading>
//       {Dictionaries.map(it => (
//         <Checkbox.Item
//           key={it.language}
//           label={it.language}
//           onPress={() => {
//             setValue(it);
//             props.onSelect(it);
//           }}
//           status={value.language === it.language ? 'checked' : 'unchecked'}
//         />
//       ))}
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    justifyContent: 'center',
  },
  btnContent: {
    aspectRatio: 6,
    justifyContent: 'flex-start',
  },
  btnPlay: {
    height: 50,
    aspectRatio: 4,
  },
  btnHelp: {alignSelf: 'flex-end', margin: 10},
});
