import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';

const PersonalPage = () => {
  const user = {
    name: 'Ngọc Trinh',
    username: '@ngocTrinh',
    bio: 'Nature Lover 🌿',
    followers: 1500,
    following: 500,

  };

  // const renderPost = ({ item }) => (
  //   <View style={styles.post}>
  //     <Image source={{ uri: item.image }} style={styles.postImage} />
  //     <Text style={styles.postText}>{item.text}</Text>
  //   </View>
  // );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/383968739_3516675395246108_8124236311783564171_n.jpg?stp=dst-jpg_p640x640&_nc_cat=105&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=mULrXIY5DJoAX9rXE8j&_nc_ht=scontent.fhan5-6.fna&oh=00_AfDP5BsHBCi5ayGA1h2MQHlOIeI1nrvHXyio0qiInSHqMA&oe=651ED09B' }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <Text>{user.followers} Followers</Text>
        <Text>{user.following} Following</Text>
      </View>
 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: 'gray',
  },
  bio: {
    fontSize: 16,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  post: {
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postText: {
    fontSize: 16,
    padding: 16,
  },
});

export default PersonalPage;
