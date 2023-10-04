import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

const StatusUpdate = () => {
  const [statusText, setStatusText] = useState('');
  const [images, setImages] = useState([]);

  const handleTextChange = (text) => {
    setStatusText(text);
  };

  const handleImageSelect = () => {

  };

  const handlePostStatus = () => {

    setStatusText('');
    setImages([]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.statusInput}>
        <TextInput
          style={styles.statusTextInput}
          placeholder="What's on your mind?"
          value={statusText}
          onChangeText={handleTextChange}
          multiline
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
        <TouchableOpacity onPress={handlePostStatus} style={styles.postButton}>
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
