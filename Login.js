import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <ImageBackground source={require('./backrouw.webp')} style={styles.background}>

    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password" 
        secureTextEntry={true} 
      />
      <TouchableOpacity
        style={styles.buttonDn}
        onPress={() => navigation.navigate('MainTabNavigator')}
      >
        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Đăng nhập</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 50}} onPress={() => navigation.navigate('Đăng ký')}>Tạo tài Khoản</Text>
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
