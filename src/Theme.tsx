import {DefaultTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export const Theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#141c35',
    accent: '#74a760',
  },
};

export const GStyle = StyleSheet.create<any>({
  bg: {
    backgroundColor: Theme.colors.primary,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  fill: {
    flexGrow: 1,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
  },
  bottom: {
    justifyContent: 'flex-end',
  },

  btn: {
    borderRadius: 25,
    borderColor: Theme.colors.accent,
    borderWidth: 2,
  },
  btnIcon: {
    borderColor: Theme.colors.accent,
    borderWidth: 2,
  },
  text: {
    color: 'white',
  },
  btnLabel: {
    fontSize: 18,
  },
  mr10: {
    marginRight: 10,
  },
  mr15: {
    marginRight: 15,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },

  mb30: {
    marginBottom: 30,
  },
});
