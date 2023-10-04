import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export function RegisterScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleRegistration = () => {
    // Thực hiện logic đăng ký của bạn tại đây, ví dụ: gửi dữ liệu đến máy chủ
    // Bạn có thể sử dụng các trạng thái 'tên người dùng', 'mật khẩu' và 'email' để thu thập đầu vào của người dùng
  };

  return ( 
    <ImageBackground source={require('./backrouw.webp')} style={styles.background}>
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Đăng kí</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.buttonDn}

      >
        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Đăng nhập</Text>
      </TouchableOpacity>
      <Text>Bạn đã có tài khoản</Text>
    </View>
    </ImageBackground>
  );
}

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
    borderWidth: 1,
  },
  buttonDn: {
    width: 379,
    backgroundColor: '#1877F2',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});
export default RegisterScreen;