import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Routes } from '../constraints/Routes';

type BtnAddBookType = {
  navigation: any,
};

const BtnAddBook: React.FC<BtnAddBookType> = ({ navigation }: BtnAddBookType) => {
  const createBook = () => {
    navigation.navigate(Routes.BookDetail, { isEdit: false });
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={createBook}>
        <View style={styles.btnContainer}>
          <Icon name="plus" color="#FFF" size={32}></Icon>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    zIndex: 3,
  },
  btnContainer: {
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22F',
    borderRadius: 32,
  },
});

export default BtnAddBook;