import React, { useState } from 'react';
import Modal from 'react-native-modal';
import CommentDialog from './CommentDialog';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';

const Post = ({ name, timeAgo, text, image }) => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  
  const toggleDialogVisibility = () => {
    setDialogVisible(!isDialogVisible);
  };


  const handleCommentSubmit = (comment) => {
    setDialogVisible(true)
    console.log('Comment submitted:', comment);
  };
  const comments = [
    {
      id: '1',
      username: 'User1',
      text: 'This is comment 1.',
      avatar: 'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/385031266_2216439388748511_3412471248705582262_n.jpg?stp=dst-jpg_p600x600&_nc_cat=110&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=DGmv8QPe_TcAX-K4cIW&_nc_ht=scontent.fhan5-8.fna&oh=00_AfDiHeATPo-vktKH0-WXMNivlBRwfBjqaB4-ohsbgnKKBA&oe=651E818C',
    },
    {
      id: '2',
      username: 'User2',
      text: 'This is comment 2.',
      avatar: 'https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/384291299_1515631979208048_4770117039668296456_n.jpg?stp=dst-jpg_p600x600&_nc_cat=109&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=MAP7HCd7sxsAX9Inkod&_nc_ht=scontent.fhan5-9.fna&oh=00_AfCgg8gLqMLoM0EWe3QarBIPKCfF0wfxQ0LWfG2f2c1Cvw&oe=651DA796',
    },
  ];

  const handleCloseCommentDialog = () => {
    setCommentDialogVisible(false);
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
        <TouchableOpacity style={styles.likeButton}>
          <MaterialIcons name='favorite' size={30} color={'red'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCommentSubmit}>
          <MaterialIcons name="forum" size={30}  marginLeft=  {40}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <MaterialIcons name='share' size={30}  marginLeft=  {40}/>
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

const posts = [
  {
    id: '1',
    name: 'Thùy Tiên',
    timeAgo: '2 hours ago',
    text: 'Hello, this is my first post on Facebook!',
    image: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/381794564_833221594936865_5371120138734268424_n.jpg?stp=dst-jpg_p600x600&_nc_cat=104&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=RbCt37atHQMAX_UbUIT&_nc_ht=scontent-hkt1-2.xx&oh=00_AfDbjU6SvyRS3PbLupqThPHMznQtO6dz_U_MzhoZUywNWQ&oe=651DC05C',
  },
  {
    id: '2',
    name: 'Thanh Thanh',
    timeAgo: '4 hours ago',
    text: 'Enjoying a beautiful day!',
    image: 'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/383960685_1988331814861883_1479282622347721948_n.jpg?stp=dst-jpg_p640x640&_nc_cat=108&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=7rONw5x59qMAX_qZCE_&_nc_ht=scontent.fhan5-8.fna&oh=00_AfAm_Ak3UuWPMGkeCHjSvv9QgTrcOLQR1dHUoyC_-cx-qg&oe=651C90DD',
  },
  {
    id: '3',
    name: 'Jane Smith',
    timeAgo: '4 hours ago',
    text: 'Enjoying a beautiful day!',
    image: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/384115678_693354559334343_1308331711096516567_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=M_4ET5UPqAMAX9CWtTq&_nc_ht=scontent.fhan5-2.fna&oh=00_AfC7Tlt7cb9aknfHLPWb8ooMEGun8QVE0SlCzNp1L4xKvg&oe=651CBFE8',
  },

];

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList

        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Post name={item.name} timeAgo={item.timeAgo} text={item.text} image={item.image} />
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
