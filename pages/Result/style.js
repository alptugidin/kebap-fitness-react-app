import {StyleSheet} from 'react-native';
import {colors} from 'app/colors';

export const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  textView: {
    flex: 1 / 4,
    justifyContent: 'flex-end',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.green500,
  },
  resultView: {
    flex: 3 / 4,
    width: '80%',
  },
  resultTable: {
    marginTop: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.green300,
    borderRadius: 8,
    padding: 5,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  innerText: {
    fontSize: 18,
  },
});
