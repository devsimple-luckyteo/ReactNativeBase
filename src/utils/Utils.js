/**
 * Created by IZ on 18/10/2017
 */
import CryptoJS from 'crypto-js';
import { Alert, AsyncStorage } from 'react-native';

import en from '../res/lang/en';
import vi from '../res/lang/vi';
import { debug } from './constants';
// const ConfigHTTP = require('../services/ConfigHTTP');

export function md5(str) {
  return CryptoJS.MD5(str).toString();
}

export function isEmpty(obj) {
  if (obj == null) return true;
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  if (typeof obj !== 'object') return true;
  for (const key in obj) {
    if (obj[key].length !== '') {
      return false;
    }
  }
  return true;
}

// export function aesDecrypt(str) {
//   console.log('VO HAM GIAI NEN');
//   //console.log(str);
//   let obj = null;
//   try {
//     // const strDecrypt = CryptoJS.AES.decrypt(
//     //   str,
//     //   CryptoJS.enc.Base64.parse(ConfigHTTP.encryptKey),
//     //   {
//     //     //iv: CryptoJS.enc.Hex.parse(ConfigHTTP.encryptKey),
//     //     mode: CryptoJS.mode.ECB,
//     //     padding: CryptoJS.pad.Pkcs7
//     //   }
//     // );

//     // console.log('decrypt data --> ');
//     // console.log(strDecrypt.toString(CryptoJS.enc.Utf8));
//     // obj = JSON.parse(
//     //   // CryptoJS.enc.Utf8.stringify()
//     //   strDecrypt.toString(CryptoJS.enc.Utf8)
//     // );

//     obj = JSON.parse(
//       // CryptoJS.enc.Utf8.stringify()
//       str
//     );
//   } catch (err) {
//     log('Loi decrypt data ');
//     console.error(err);
//   }
//   return obj;
// }
// export function aesEncrypt(data) {
//   return CryptoJS.AES.encrypt(
//     JSON.stringify(data),
//     CryptoJS.enc.Base64.parse(encryptKey),
//     {
//       mode: CryptoJS.mode.ECB,
//       padding: CryptoJS.pad.Pkcs7
//     }
//   );
// }

export function getLanguage() {
  try {
    console.log('getlang');
    AsyncStorage.getItem('lang').then(value => {
      console.log(value);
      if (value === null) {
        console.log('return lang vi');
        return vi;
      }
      if (value === 'vi') {
        console.log('return lang vi');
        return vi;
      }
      console.log('return lang en');
      return en;
    });
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function changeLanguage(lang) {
  try {
    AsyncStorage.setItem('lang', lang);

    console.log(`change language ${lang}`);
    return getLanguage();
  } catch (e) {
    return false;
  }
}

export function validatePhoneNumber(phone) {
  const string = '0123456789';
  for (let i = 0; i < phone.length; i++) {
    if (string.indexOf(phone.charAt(i)) === -1) {
      return false;
    }
  }
  return true;
}

export function checkPhone(phone) {
  const rex = /^(088|089|086|098|097|096|0169|0168|0167|0166|0165|0164|0163|0162|091|094|0123|0124|0125|0127|0129|090|093|0120|0121|0122|0126|0128|092|0188|0993|0994|0995|0996|099|095)\d{7}/;
  return rex.test(phone);
}

export function setTemporarySession(val, key) {
  try {
    AsyncStorage.getItem('temporarySession').then(value => {
      console.log('SET ===> DU LIEU SESSION TEMP');
      console.log(value);
      let temporarySession = JSON.parse(value);
      if (!isEmpty(temporarySession)) {
        temporarySession[key] = val;
      } else {
        temporarySession = {};
        temporarySession[key] = val;
      }
      AsyncStorage.setItem(
        'temporarySession',
        JSON.stringify(temporarySession)
      );
    });
  } catch (error) {
    return false;
  }
}

export function getTemporarySession(key) {
  try {
    AsyncStorage.getItem('temporarySession').then(value => {
      console.log('GET ===> DU LIEU SESSION TEMP');
      console.log(value);
      const temporarySession = JSON.parse(value);
      if (!isEmpty(temporarySession)) {
        return false;
      }
      return temporarySession[key];
    });
  } catch (error) {
    return false;
  }
}

export function deleteTemporarySession(key) {
  try {
    AsyncStorage.getItem('temporarySession').then(value => {
      console.log('DELETE ===> DU LIEU SESSION TEMP');
      console.log(value);
      const temporarySession = JSON.parse(value);
      if (!isEmpty(temporarySession)) {
        delete temporarySession[key];
      }
      AsyncStorage.setItem(
        'temporarySession',
        JSON.stringify(temporarySession)
      );
    });
  } catch (error) {
    return false;
  }
}

export function log(msg, TAG = 'Utils') {
  if (debug) {
    console.log(`${TAG} ->! ${msg}`);
  }
}
export function logE(msg, TAG = 'Utils') {
  if (debug) {
    console.info(TAG);
    console.log(msg);
  }
}

export function alert(msg, textBtn, onPressOK = () => {}, cancelable = true) {
  Alert.alert('', msg, [{ text: textBtn, onPress: onPressOK }], { cancelable });
}

export function alertQuest(
  msg,
  btnPositive,
  onPressPositive,
  btnNegative,
  onPressNegative,
  cancelable = true
) {
  Alert.alert(
    '', //title
    msg, //message
    [
      { text: btnPositive, onPress: onPressPositive },
      { text: btnNegative, onPress: onPressNegative }
    ],
    { cancelable }
  );
}

export function showLoading(component) {
  log('UTOLS', `component log ***** ${JSON.stringify(component.state)}`);
  component.setState({ loading: true });
}

export function hideLoading(component) {
  component.setState({ loading: false });
}

export function formatPrice(number) {
  const array = [];
  let result = '';
  let count = 0;
  const numberString = number.toString();
  if (numberString.length < 3) {
    return number;
  }
  for (let i = numberString.length - 1; i >= 0; i--) {
    count += 1;
    array.push(numberString[i]);
    if (count === 3 && i >= 1) {
      array.push(',');
      count = 0;
    }
  }
  for (let i = array.length - 1; i >= 0; i--) {
    result += array[i];
  }
  return result;
}

export function parseURL(url) {
  // var url = "http://example.com?myVar=test&otherVariable=someData&number=123"

  var regex = /[?&]([^=#]+)=([^&#]*)/g,
    params = {},
    match;
  while ((match = regex.exec(url))) {
    params[match[1]] = match[2];
  }
  console.log(params);
  return params;
}
