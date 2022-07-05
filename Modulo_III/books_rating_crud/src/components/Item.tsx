import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BookProps } from '../types/BookProps';
import Rating from './Rating';

const Item: React.FC<BookProps> = ({ author, title, url }: BookProps) => {
  return (
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

      <View style={styles.line}>
        <Rating />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '99%',
    marginHorizontal: 6,
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