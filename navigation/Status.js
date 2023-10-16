import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

const StatusUpdate = () => {
  const [posts, setPosts] = useState([]);
  const [statusText, setStatusText] = useState('');
  const [images, setImages] = useState([]);
  const addPost = async () => {
    
const comments = [
  {
    id: 1,
    comment: "Cảm ơn bạn đã chia sẻ bài viết này!",
    authorId: 1,
    postId: 1,
  },
  {
    id: 2,
    comment: "Bài viết rất hay, mình rất thích!",
    authorId: 2,
    postId: 1,
  },
];

    const post = {
      status: statusText,
      comment: comments,
    };
  
 const response = await fetch(
  "https://6526a0fd917d673fd76cabc2.mockapi.io/user",
  {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
    

  }
);

  };
 

  const handleImageSelect = () => {

  };

  const handlePostStatus = () => {

  
   
  };

  return (
  
  <ScrollView style={styles.container}>
      <View style={styles.statusInput}>
        <TextInput
          style={styles.statusTextInput}
          placeholder="What's on your mind?"
          value={statusText}
          onChangeText={(text) => setStatusText(text)}
         
        />
      </View>
      {images.length > 0 && (
        <ScrollView horizontal style={styles.imageScrollView}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.selectedImage} />
          ))}
        </ScrollView>
      )}
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={handleImageSelect} style={styles.addImageButton}>
          <Text>Add Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addPost} style={styles.postButton}>
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  statusInput: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
  },
  statusTextInput: {
    fontSize: 16,
  },
  imageScrollView: {
    marginVertical: 16,
  },
  selectedImage: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addImageButton: {
    flex: 1,
    backgroundColor: '#e4e6eb',
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 8,
  },
  postButton: {
    flex: 2,
    backgroundColor: '#1877f2',
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default StatusUpdate;
