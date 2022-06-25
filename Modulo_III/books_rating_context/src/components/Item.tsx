import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemeContext from '../contexts/ThemeContext';
import { BookProps } from '../types/BookProps';
import Rating from './Rating';


const Item: React.FC<BookProps> = ({ author, title, url }: BookProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <View style={styles.item}>
      <View style={styles.line}>
        <Icon name="user" color={theme.colorIcon} size={16} />
        <Text style={styles.text}>{author}</Text>
      </View>

      <View style={styles.line}>
        <Icon name="book" color={theme.colorIcon} size={16} />
        <Text style={styles.text}>{title}</Text>
      </View>

      <View style={styles.line}>
        <Icon name="paperclip" color={theme.colorIcon} size={16} />
        <Text style={styles.text}>{url ? url : '(Sem Url)'}</Text>
      </View>

      <View style={styles.line}>
        <Rating />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  item: {
    marginHorizontal: 6,
    marginBottom: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#B8D',
    borderRadius: 8,
  },
  line: {
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontSize: 13,
    textAlign: 'justify',
  },
});

export default Item;