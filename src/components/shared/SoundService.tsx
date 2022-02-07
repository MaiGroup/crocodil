import Sound from 'react-native-sound';

const nextSoundFile = require('../../assets/raw/next.mp3');
const selectSoundFile = require('../../assets/raw/select.wav');

export const NextSound = new Sound(nextSoundFile, Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  NextSound.play(() => NextSound.release());
});

export const SelectSound = new Sound(
  selectSoundFile,
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    SelectSound.play(() => SelectSound.release());
  },
);
