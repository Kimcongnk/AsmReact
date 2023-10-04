import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const notifications = [
  {
    id: '1',
    text: 'John Doe liked your post.',
    timeAgo: '2 hours ago',
    userAvatar: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/381794564_833221594936865_5371120138734268424_n.jpg?stp=dst-jpg_p600x600&_nc_cat=104&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=RbCt37atHQMAX_UbUIT&_nc_ht=scontent-hkt1-2.xx&oh=00_AfDbjU6SvyRS3PbLupqThPHMznQtO6dz_U_MzhoZUywNWQ&oe=651DC05C',
  },
  {
    id: '2',
    text: 'Jane Smith commented on your photo.',
    timeAgo: '3 hours ago',
    userAvatar: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/383965926_868820918155517_7136791803631367924_n.jpg?stp=cp6_dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=_8v78wYwbsUAX90T7LM&_nc_ht=scontent-hkt1-1.xx&oh=00_AfDp_c14Qy0KH1JBXGZeaPASfCYUE_JQi-eo4yHE-G3FSg&oe=651D5001',
  },
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationContainer}>
            <Image source={{ uri: item.userAvatar }} style={styles.avatar} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationText}>{item.text}</Text>
              <Text style={styles.timeAgo}>{item.timeAgo}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
  },
  timeAgo: {
    color: '#888',
  },
});

export default NotificationsScreen;
