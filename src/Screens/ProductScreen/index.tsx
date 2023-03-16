import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../Components/QuantitySelector';
import { Pressable } from 'react-native';
import Button from '../../Components/Button';
import ImageCarousel from '../../Components/ImageCorousel';

const ProductScreen = () => {
      const [selectedOption, setSelectedOption] = useState(product.options[0]);
     const [quantity, setQuantity] = useState(10);
  
  return (
    <>
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image carousel */}
      <ImageCarousel images={product.images}/>

      {/* Option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        from ${product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Qunatiti selector */}
      <View>
        <QuantitySelector quantity = {quantity} setQuantity = {setQuantity}/>
      </View>

      {/* Button */}
          <Button text={'Add to Cart'} onPress={() => {console.warn('Add to Cart')}} containerStyles = {{backgroundColor: '#e3c905'}}/>
          <Button text={'Buy Now'} onPress={() => {console.warn('Buy Now')}} />
    </ScrollView>
    </>
  );
};

export default ProductScreen;