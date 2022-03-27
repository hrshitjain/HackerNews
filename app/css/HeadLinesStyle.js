import { StatusBar, StyleSheet } from "react-native"


export const HeadlinesStyle = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 16,
      },
    loadButton:{
      backgroundColor: 'blue',
      padding:10,
      alignSelf: 'center',
      marginVertical: 5
    },
    loadText:{
      color: 'white',
    }
})