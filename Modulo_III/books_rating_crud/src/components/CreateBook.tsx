import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import BookContext from '../contexts/BookContext';
import { ActionTypes } from '../redux/action-types';
import { BookProps } from '../types/BookProps';
//import uuid from 'uuid-random';

type CreateBookType = {
  isEdit: false,
  book?: BookProps,
};

const CreateBook: React.FC<CreateBookType> = ({ isEdit, book }: CreateBookType) => {
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
    const objectID = book?.objectID || 0/*uuid()*/;
    const newBook = { objectID, author, title, url };

    dispatch({
      type: isEdit ? ActionTypes.EDIT : ActionTypes.CREATE,
      payload: newBook
    });
    clearFields();
  }

  return (
    <View style={styles.container}>
      <View style={styles.btnBackContainer}>
        <TouchableOpacity onPress={handleSubmit} disabled={!isValidFields}>
          <View style={styles.btnBack}>
            <Icon name="arrow-back" color='#FFF' size={16} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          value={author}
          onChangeText={setAuthor}
          placeholder='Digite o nome do Autor'
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder='Digite o titulo'
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={styles.input}
          value={url}
          onChangeText={setUrl}
          placeholder='Digite a URL'
          underlineColorAndroid='transparent'
        />
      </View>

      <TouchableOpacity onPress={handleSubmit} disabled={!isValidFields}>
        <View style={styles.button}>
          <Icon name="save" color='#FFF' size={16} />
          <Text style={styles.buttonText}>Salvar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBackContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btnBack: {
  },
  inputsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    backgroundColor: '#FFF',
    color: '#222',
    padding: 6,
    fontSize: 18,
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: '#33A',
    textAlign: 'left',
  },
  button: {
    width: 36,
    height: 36,
    backgroundColor: '#5C5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#EEE',
    fontSize: 18,
  },
});

export default CreateBook;