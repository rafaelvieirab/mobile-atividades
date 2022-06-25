import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ratingValues from '../constraints/RatingValues';

export default function Rating() {
  const [rate, setRate] = React.useState(0);

  React.useEffect(() => {
    const random = 1 + (Math.random() * 4);
    const truncatedRandom = Math.trunc(random);
    setRate(truncatedRandom);
  }, []);

  return (
    <View style={styles.container}>
      {
        ratingValues.map(ratingValue => (
          <TouchableWithoutFeedback
            key={ratingValue}
            onPress={() => setRate(ratingValue)}
            style={styles.button}
          >
            <Icon
              name={ratingValue <= rate ? "star" : "star-o"}
              color={ratingValue <= rate ? "#F7F20C" : "#FFF"}
              size={18}
            />
          </TouchableWithoutFeedback>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
