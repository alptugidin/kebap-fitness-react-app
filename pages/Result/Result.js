import React from 'react';
import {Text, View} from 'react-native';
import {style} from 'app/pages/Result/style';
const Result = ({route}) => {
  const info = route.params;
  return (
    <View style={style.main}>
      <View style={style.textView}>
        <Text style={style.welcomeText}>Üyeliğiniz Tamamlandı!</Text>
      </View>
      <View style={style.resultView}>
        <View style={style.resultTable}>
          <View style={style.row}>
            <Text style={style.infoText}>İsim: </Text>
            <Text style={style.innerText}>{info.name}</Text>
          </View>

          <View style={style.row}>
            <Text style={style.infoText}>Soyisim: </Text>
            <Text style={style.innerText}>{info.surname}</Text>
          </View>

          <View style={style.row}>
            <Text style={style.infoText}>Yaş: </Text>
            <Text style={style.innerText}>{info.age}</Text>
          </View>

          <View style={style.row}>
            <Text style={style.infoText}>Şehir: </Text>
            <Text style={style.innerText}>{info.city}</Text>
          </View>

          <View style={style.row}>
            <Text style={style.infoText}>E-mail: </Text>
            <Text style={style.innerText}>{info.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Result;
