import { StatusBar, StyleSheet } from "react-native"

export const CommentsStyle = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight || 0,
        borderColor: 'red',
        borderWidth: 2,
        margin:10,
        padding:10
    },
    title:{
        margin: 16,
        fontWeight: 'bold'
    },
    loadmore:{
        alignSelf:'flex-end',
        margin:10,
        fontWeight: 'bold'
    }

});