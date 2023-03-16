import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginVertical: 5,
    },
    imaga: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    rightcorner: {
        padding: 10,
        flex: 3,
        marginLeft: 5
    },
    title: {
        fontSize: 18,
    },
    ratingstyle: {
        flexDirection: 'row',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
   
    star: {
        margin: 2,
    }
})

export default styles;