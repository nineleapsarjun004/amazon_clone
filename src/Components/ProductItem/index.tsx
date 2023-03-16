import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styles from './styles';

interface ProductItemProps {
    item:{
    id:  string,
    title: string,
    image: string,
    avgRating: number,
    ratings: number,
    price: number,
    }
}

const ProductItem = ({item}: ProductItemProps) => {
  return (
    <>
    
    <View style={styles.root}>
            <Image style={styles.imaga} source={{uri: item.image}} />
            <View style= {styles.rightcorner}>
            <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
            <View style={styles.ratingstyle}>
                {[0,0,0,0,0].map((el, i) =>
                <FontAwesome
                style={styles.star} 
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
                />)}
                <Text>{item.ratings}</Text>
            </View>
            <Text style={styles.price}>from ₹{item.price}</Text>
          </View>
        </View>
    </>
  )
}


export default ProductItem;