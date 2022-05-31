import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Rating() {
  const [rate, setRate] = React.useState(0);
  const [ratingValues, setRatingValues] = React.useState<number[]>([]);

  React.useEffect(() => {
    const random = 1 + (Math.random() * 4);
    const truncatedRandom = Math.trunc(random);
    setRate(truncatedRandom);
  }, []);

  React.useEffect(() => {
    const tempArray = [];
    for (let index = 1; index <= 5; index++)
      tempArray.push(index)
    setRatingValues(tempArray);
  }, []);

  return (
    <View style={styles.container}>
      {
        ratingValues.map(ratingValue => (
          <TouchableWithoutFeedback key={ratingValue} onPress={() => setRate(ratingValue)} >
            <Icon
              name={ratingValue <= rate ? "star" : "star-o"}
              color={ratingValue <= rate ? "#F7F20C" : "#FFF"}
              size={16}
              style={styles.starStyle}
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
    justifyContent: 'space-around',
  },
  starStyle: {
    borderWidth: 1,
  },
});
