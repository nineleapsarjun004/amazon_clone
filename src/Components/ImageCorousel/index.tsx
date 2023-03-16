import { View, Image, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const ImageCarousel = ({images}: {images : [string]}) => {
  return (
    <View style={styles.root}>
       <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image]}
            source={{uri: item}}
          />
        )}
        
        />
    </View>
  );
};

const styles = StyleSheet.create({
    root: {},
    image: {
      margin: 10,
      height: 250,
      resizeMode: 'contain',
    },
});

export default ImageCarousel;