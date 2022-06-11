import {StyleSheet} from 'react-native';
import {colors} from 'app/colors';

export const style = StyleSheet.create({
  inputView: {
    padding: 7,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  input: {
    marginTop: 7,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: colors.gray300,
    borderWidth: 1,
    height: 40,
  },
});
