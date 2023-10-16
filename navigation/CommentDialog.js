import React, { useState } from 'react';
import { Modal, View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CommentDialog = ({ visible, onClose, comments, coonCommentSubmit }) => {
  const [newComment, setNewComment] = useState('');
  const newComment1 = {
    comment: "newCosssmentText",
    authorId: 3, // Replace with the actual author ID
   
  };
  const addPost = async () => {
    // Tạo một đối tượng bài posts mới
    // Thêm dữ liệu có sẵn vào array comment
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
    
      comment: comments,
    };
  
 const response = await fetch(`https://6526a0fd917d673fd76cabc2.mockapi.io/user`, {

    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment1),
    

  }
);

  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.dialogContainer}>
        <View style={styles.dialogBox}>
          <Text style={styles.dialogTitle}>Comments</Text>

          <FlatList
           data={comments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.commentContainer}>
                {/* <Image source={{  }} style={styles.commentAvatar} /> */}
                <View style={styles.commentContent}>
                <Text style={styles.commentUsername}>{item.authorId}</Text>
                  <Text style={styles.commentText}>{item.comment}</Text>
                </View>
              </View>
            )}
          />

          <View style={styles.commentInputContainer}>
            <TextInput
              style={styles.commentInput}
              placeholder="Coment..."
              value={newComment}
              onChangeText={setNewComment}
            />
            <TouchableOpacity onPress={addPost}>
              <Text style={styles.commentButton}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogBox: {
    backgroundColor: '#deeaf7',
    borderRadius: 10,
    width: 400,
    maxHeight: 500,
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  commentAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  commentContent: {
    flex: 1,
  },
  commentUsername: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 14,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 8,
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  commentButton: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CommentDialog;