import React from 'react';
import {Button, Text, View} from 'react-native';
import {style} from 'app/pages/Welcome/style';
const Welcome = ({navigation}) => {
  return (
    <View style={style.main}>
      <View style={style.textView}>
        <Text style={style.text}>Kebab Fitness Salonu</Text>
      </View>
      <View style={style.buttonView}>
        <Button
          title="Üye Kaydı Oluştur"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default Welcome;
