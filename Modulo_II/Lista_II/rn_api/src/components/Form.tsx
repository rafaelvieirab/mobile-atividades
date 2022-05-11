import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';

type BookProps = {
  id: string;
  author: string;
  title: string;
  url: string;
};


const Item: React.FC<BookProps> = ({ author, title, url, id }: BookProps) => (
  <View style={styles.item}>
    <View style={styles.line}>
      <Icon name="user" color='#282828' size={16} />
      <Text style={styles.text}>{author}</Text>
    </View>

    <View style={styles.line}>
      <Icon name="book" color='#282828' size={16} />
      <Text style={styles.text}>{title}</Text>
    </View>

    <View style={styles.line}>
      <Icon name="paperclip" color='#282828' size={16} />
      <Text style={styles.text}>{url ? url : '(Sem Url)'}</Text>
    </View>
  </View>
);

export default function Form() {
  const [query, setQuery] = React.useState('');
  const [books, setBooks] = React.useState<BookProps[]>([]);

  const getBooks = async () => {
    try {
      const { data } = await api.get(query);
      setBooks(data.hits);
    } catch (error) {
      console.log(error);
      console.log(error);
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
          <TextInput style={styles.input} value={query} onChangeText={setQuery} placeholder='Digite algo' />
          <TouchableWithoutFeedback
            onPress={() => { getBooks() }}
            disabled={query !== ''}
            style={styles.button}
            accessibilityLabel="Procurar por Livros"
          >
            <Icon name="search" color='#517fa4' size={16} />
          </TouchableWithoutFeedback>
        </View>
      </View>

      {
        books !== [] &&
        <View style={styles.body}>
          <FlatList
            data={books}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <Text>{books !== []}</Text>
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 6,
    marginBottom: 4,
    minHeight: 32,
  },
  titleContainer: {
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
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
    width: 200,
    backgroundColor: '#FFF',
    color: '#222',
    padding: 2,
    fontSize: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#33A',
  },
  button: {
    width: 16,
    height: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33A'
  },
  body: {
    flex: 1,
  },
  item: {
    marginHorizontal: 8,
    marginBottom: 4,
    padding: 8,
    backgroundColor: '#B7D',
    borderRadius: 8,
  },
  line: {
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontSize: 12,
    textAlign: 'justify',
  },
});
