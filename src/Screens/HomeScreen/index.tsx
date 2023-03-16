import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductScreen from '../ProductScreen';
import products from '../../data/products';
import ProductItem from '../../Components/ProductItem';


const HomeScreen = () => {
  return (
    <View style={styles.page}>
         <View>
            <TextInput style={styles.search}></TextInput>
        </View>
      <FlatList 
      data={products}
      renderItem={({item}) => <ProductItem item={item} />}
      showsVerticalScrollIndicator = {false}
      />
      <View/>
    </View>
  );
};

const styles = StyleSheet.create({
    page: {
        padding: 10
    },
    search: {
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 10,
        borderRadius: 10,
    },
})

export default HomeScreen;