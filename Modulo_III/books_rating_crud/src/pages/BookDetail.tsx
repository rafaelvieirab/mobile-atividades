import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import BookContext from '../contexts/BookContext';
import { ActionTypes } from '../redux/action-types';
import { BookProps } from '../types/BookProps';
import uuid from 'uuid-random';
import Icon from 'react-native-vector-icons/FontAwesome';

type BookDetailParamType = {
  isEdit: false,
  book?: BookProps,
};

type BookDetailType = {
  navigation: any,
  route: {
    params: BookDetailParamType,
  },
};

const BookDetail: React.FC<BookDetailType> = ({ navigation, route }: BookDetailType) => {
  const { isEdit, book } = route.params;
  const [author, setAuthor] = React.useState(book?.author || '');
  const [title, setTitle] = React.useState(book?.title || '');
  const [url, setUrl] = React.useState(book?.url || '');
  const [isValidFields, setIsValidFields] = React.useState(false);

  const { dispatch } = React.useContext(BookContext);

  React.useEffect(() => {
    const isValid = author !== '' && title != '';
    setIsValidFields(isValid);
  }, [author, title, url]);

  const clearFields = () => {
    setAuthor('');
    setTitle('');
    setUrl('');
  }

  const handleSubmit = () => {
    const objectID = book?.objectID || uuid();
    const newBook = { objectID, author, title, url };

    dispatch({
      type: isEdit ? ActionTypes.EDIT : ActionTypes.CREATE,
      payload: newBook
    });
    clearFields();
    navigation.navigate('Main');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.label}>
            <Icon name="user" color='#222' size={20} />
            <Text style={styles.labelText}>Autor</Text>
          </View>
          <TextInput
            style={styles.input}
            value={author}
            onChangeText={setAuthor}
            placeholder='Digite o nome do Autor'
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.label}>
            <Icon name="book" color='#222' size={20} />
            <Text style={styles.labelText}>Título</Text>
          </View>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder='Digite o titulo'
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.label}>
            <Icon name="paperclip" color='#222' size={20} />
            <Text style={styles.labelText}>URL</Text>
          </View>
          <TextInput
            style={styles.input}
            value={url}
            onChangeText={setUrl}
            placeholder='Digite a URL'
            underlineColorAndroid='transparent'
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit} disabled={!isValidFields}>
          <View style={styles.button}>
            <Icon name="save" color='#FFF' size={20} />
            <Text style={styles.buttonText}>Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputsContainer: {
    flex: 1,
    minHeight: 180,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    width: '100%',
    minHeight: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginBottom: 6,
    marginLeft: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  labelText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    backgroundColor: '#FFF',
    color: '#222',
    padding: 6,
    fontSize: 18,
    textAlign: 'left',
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: '#33A',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: '#5C5',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 6,
    color: '#EEE',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookDetail;