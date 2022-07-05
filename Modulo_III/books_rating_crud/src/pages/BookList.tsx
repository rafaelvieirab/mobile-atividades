import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import BookContext from '../contexts/BookContext';
import { ActionTypes } from '../redux/action-types';
import api from '../services/api';
import { BookProps } from '../types/BookProps';
import BookSearch from '../components/BookSearch';
import Item from '../components/Item';
import BtnAddBook from '../components/BtnAddBook';
import { Routes } from '../constraints/Routes';

type BookListProps = {
  navigation: any,
}

const BookList: React.FC<BookListProps> = ({ navigation }: BookListProps) => {
  const { state, dispatch } = React.useContext(BookContext);

  const getBooks = async (query: string) => {
    try {
      const { data } = await api.get(`/search?query=${query}`);
      dispatch({ type: ActionTypes.ADD_MANY, payload: data.hits });
    } catch (error) {
      console.error(error);
    }
  };

  const editBook = (book: BookProps) => {
    navigation.navigate(Routes.BookDetail, { isEdit: true, book });
  }

  const deleteBook = (book: BookProps) => {
    dispatch({ type: ActionTypes.DELETE, payload: book });
  };

  const renderItem = (data: any) => (
    <View style={styles.rowFront}>
      <Item author={data.item.author} title={data.item.title} url={data.item.url} objectID={data.item.objectID} />
    </View>
  );

  const renderHiddenItem = (data: any) => (
    <View style={styles.rowBack}>
      <TouchableOpacity onPress={() => editBook(data.item)}>
        <Icon name="pencil" color='#111' size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteBook(data.item)} style={styles.backRightBtn}>
        <Icon name="trash" color='#EEE' size={20} />
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.container}>
      <BookSearch getBooks={getBooks} />

      <View style={styles.body}>
        <SwipeListView
          useFlatList={true}
          data={state.books}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </View>

      <BtnAddBook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 3,
  },
  rowFront: {
    marginBottom: 4,
    alignItems: 'center',
  },
  rowBack: {
    marginBottom: 4,
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    borderRadius: 8,
  },
  backRightBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
  }
});

export default BookList;