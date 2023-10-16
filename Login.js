import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';

const Login = ({ navigation }) => {
  const [nameUser, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!nameUser || !password) {
      alert('Vui lòng nhâp điền đẩy đủ thông tin.');
      return;
    }
    try {

      const response = await fetch('https://6526a0fd917d673fd76cabc2.mockapi.io/User');
      const users = await response.json();

      const user = users.find((u) => u.nameUser === nameUser && u.password === password);

      if (user) {
        navigation.navigate('MainTabNavigator',);

      } else {
        setError('Invalid +" or password' + nameUser + password);
      }
    } catch (error) {
      setError('Error connecting to the server');
    }
  };



  return (
    <ImageBackground source={require('./backrouw.webp')} style={styles.background}>

      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Đăng nhập</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={nameUser}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.buttonDn}
          onPress={handleLogin}
        >
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Đăng nhập</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 50 }} onPress={() => navigation.navigate('Đăng ký')}>Tạo tài Khoản</Text>
      </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  input: {
    width: 379,
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonDn: {
    width: 379,
    backgroundColor: '#1877F2',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },

});

export default Login;
