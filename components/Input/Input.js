import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {style} from './style';

const Input = ({type, setUser, info}) => {
  const handleOnChange = text => {
    setUser(prevState => ({...prevState, [info]: text}));
  };

  return (
    <View style={style.inputView}>
      <Text style={style.type}>{type}</Text>
      <TextInput
        style={style.input}
        placeholder={'Lütfen ' + type + ' giriniz'}
        onChangeText={text => handleOnChange(text)}
      />
    </View>
  );
};

export default Input;
