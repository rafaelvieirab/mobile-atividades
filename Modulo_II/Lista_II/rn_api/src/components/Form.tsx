import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';
import { BookProps } from '../types/BookProps';
import Item from './Item';

export default function Form() {
  const [query, setQuery] = React.useState('');
  const [books, setBooks] = React.useState<BookProps[]>([]);

  const getBooks = async () => {
    try {
      const params = new URLSearchParams([['query', query]]);
      const { data } = await api.get('', { params });
      setBooks(data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }: ListRenderItemInfo<BookProps>) => (
    <Item author={item.author} title={item.title} url={item.url} id={item.id} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Consulta Livros</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={query}
            onChangeText={setQuery}
            placeholder='Digite algo ...'
            underlineColorAndroid='transparent'
          />
          <TouchableWithoutFeedback onPress={getBooks} disabled={query !== ''} accessibilityLabel="Procurar por Livros">
            <View style={styles.button}>
              <Icon name="search" color='#fff' size={16} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      {
        query !== '' && books.length !== 0 &&
        <View style={styles.body}>
          <FlatList
            data={books}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    width: '76%',
    backgroundColor: '#FFF',
    color: '#222',
    padding: 6,
    fontSize: 14,
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: '#33A',
    textAlign: 'left',
  },
  button: {
    width: 36,
    height: 36,
    backgroundColor: '#3030A0B0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 3,
  },
});
