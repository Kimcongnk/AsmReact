import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabView, SceneMap } from 'react-native-tab-view';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import login from './Login';
import PersonalPage from './navigation/PersonalPage';
import dangKi from './Register';
import LoginScreen from './Login';
import SignUpScreen from './Register';
import Home from './navigation/Home';
import NotificationsScreen from './navigation/NotificationsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons từ '@expo/vector-icons' hoặc thư viện biểu tượng khác
import Status from './navigation/Status';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function VideoScreen() {
  return (
    <View>
      <Text>Video</Text>
    </View>
  );
}



// const initialLayout = { width: Dimensions.get('window').width };

// const renderScene = SceneMap({
//   // home: HomeScreen,
//   video: VideoScreen,
//   trending: TrendingScreen,
//   notifications: NotificationsScreen,
//   profile: ProfileScreen,
// });

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dòng thời gian" component={Home}
        options={({ navigation }) => ({
          title: 'Trang chủ',
          headerRight: () => (
            <Icon
              name="search-outline"
              size={30}
              color="black"
              style={{ marginRight: 10 }}
              onPress={() => {
                // Điều hướng đến màn hình tìm kiếm tại đây
                // Ví dụ: navigation.navigate('Search');
              }}

            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        })} />
      <Tab.Screen name="Video" component={VideoScreen} />

      <Tab.Screen name="Bài viết mới" component={Status}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-box" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Thông báo" component={NotificationsScreen} options={{

        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="notifications" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Hồ sơ" component={PersonalPage} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Đăng nhập"
          component={LoginScreen}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Đăng ký"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
