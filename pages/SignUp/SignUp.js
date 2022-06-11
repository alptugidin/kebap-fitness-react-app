import React, {useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import {style} from 'app/pages/SignUp/style';
import Input from 'app/components/Input';

const SignUp = ({navigation}) => {
  const info = {
    name: '',
    surname: '',
    age: '',
    email: '',
    city: '',
  };

  const [user, setUser] = useState(info);

  const [buttonState, setButtonState] = useState(true);

  useEffect(() => {
    const state = Object.keys(user).every(e => user[e].length > 0);
    state && setButtonState(false);
  }, [user]);

  return (
    <View style={style.main}>
      <View style={style.inputView}>
        <Input type="İsim" setUser={setUser} info="name" />
        <Input type="Soyisim" setUser={setUser} info="surname" />
        <Input type="Yaş" setUser={setUser} info="age" />
        <Input type="E-posta" setUser={setUser} info="email" />
        <Input type="Şehir" setUser={setUser} info="city" />
        <View style={style.buttonView}>
          <Button
            disabled={buttonState}
            onPress={() => navigation.navigate('Result', user)}
            title="Kaydet"
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;
