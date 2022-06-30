import React from 'react';
import { ListRenderItemInfo, StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import BookContext from '../contexts/BookContext';
import { ActionTypes } from '../redux/action-types';
import api from '../services/api';
import { BookProps } from '../types/BookProps';
import Form from './Form';
import Item from './Item';

export default function Main() {
  const { state, dispatch } = React.useContext(BookContext);

  const getBooks = async (query: string) => {
    try {
      const { data } = await api.get(`/search?query=${query}`);
      dispatch({ type: ActionTypes.ADD_MANY, payload: data.hits/*.slice(10) */ });
    } catch (error) {
      console.error(error);
    }
  };

  const goModal = (isEdit?: boolean) => {
    // navega para a tela do CreateBook
  }

  const deleteBook = (book: BookProps) => {
    console.log(book.title);
    dispatch({ type: ActionTypes.DELETE, payload: book });
  };

  const renderItem = ({ item }: ListRenderItemInfo<BookProps>) => (
    <Item author={item.author} title={item.title} url={item.url} objectID={item.objectID} />
  );

  const renderItem2 = (data: any) => (
    <View style={styles.rowFront}>
      <Item author={data.item.author} title={data.item.title} url={data.item.url} objectID={data.item.objectID} />
    </View>
  );

  const renderHiddenItem2 = (data: any) => (
    <View style={styles.rowBack} >
      <TouchableOpacity onPress={() => goModal(true)}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteBook(data.item)} style={[styles.backRightBtn]}>
        <Text style={{ color: '#FFF' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHiddenItem = ({ item }: ListRenderItemInfo<BookProps>) => (
    <Item author={item.author} title={item.title} url={item.url} objectID={item.objectID} />
  );

  return (
    <View style={styles.container}>
      <Form getBooks={getBooks} />

      <View style={styles.body}>
        {/* <FlatList
          data={state.books}
          renderItem={renderItem}
          keyExtractor={item => item.objectID}
        /> */}
        <SwipeListView
          // useFlatList={true}
          data={state.books}
          renderItem={renderItem2}
          renderHiddenItem={renderHiddenItem2}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </View>
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
    alignItems: 'center',
    borderBottomWidth: 0.25,
    justifyContent: 'center',
    height: 50,
    color: '#000',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    backgroundColor: 'red',
    right: 0
  }
});
