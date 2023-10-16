
import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import CommentDialog from './CommentDialog';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';

const Post = ({ postId, name, timeAgo, text, likes, image, comments }) => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);



  const toggleDialogVisibility = () => {
    setDialogVisible(!isDialogVisible);
  };


  const handleCommentSubmit = (comment) => {
    setDialogVisible(true)
  };

  const handleCloseCommentDialog = () => {
    setCommentDialogVisible(false);
  };
  const handleLike = () => {
    if (isLiked) {
      const newLikeCount = likeCount - 1;
      setLikeCount(newLikeCount);
      setIsLiked(false);
    } else {
      const newLikeCount = likeCount + 1;
      setLikeCount(newLikeCount);
      setIsLiked(true);
    }

    updateLikeCount(postId, likeCount);
  };


  const updateLikeCount = async (postId, newLikeCount) => {

    try {
      const response = await fetch(`https://6526a0fd917d673fd76cabc2.mockapi.io/user/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ like: newLikeCount }),

      });

    } catch (error) {
      console.error('Network error:', error);
    }
  };



  const handleFollow = () => {

  };

  const handleShare = () => {

  };
  return (
    <View style={styles.post}>
      <View style={styles.userInfo}>
        <Image source={{ uri: image }} style={styles.avatartAdmin} />
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>{name}</Text>

          <Text style={styles.timeAgo}>{timeAgo}</Text>

        </View>
        <TouchableOpacity style={{ marginLeft: 15 }}>
          <Text >Follow</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.postText}>{text}</Text>
      <Image source={{ uri: image }} style={styles.postImage} />
      <View style={styles.viewSjd}>
        <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
          <MaterialIcons name='favorite' size={30} color={'red'} />

        </TouchableOpacity><Text  >{likeCount}</Text>
        <TouchableOpacity onPress={handleCommentSubmit}>
          <MaterialIcons name="forum" size={30} marginLeft={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <MaterialIcons name='share' size={30} marginLeft={40} />
        </TouchableOpacity>
      </View>

      {/* Comment Dialog */}

      <CommentDialog
        visible={isDialogVisible}
        onClose={toggleDialogVisibility}
        comments={comments}
        onCommentSubmit={handleCommentSubmit}
      />
    </View>
  );
};


const Home = () => {
  const [postss, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://6526a0fd917d673fd76cabc2.mockapi.io/user");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [postss]);

  return (
    <View style={styles.container}>
      <FlatList
        data={postss}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Post postId={item.id} name={item.name} timeAgo={item.timeAgo} text={item.status} image={item.image} likes={item.like} comments={item.comment} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  post: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatartAdmin: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 4,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoText: {
    marginLeft: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeAgo: {
    color: '#888',
  },
  postText: {
    fontSize: 16,
    marginBottom: 8,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 10,
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
  viewSjd: {

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'

  },

  commentDialog: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  postContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 10,
  },
});

export default Home;