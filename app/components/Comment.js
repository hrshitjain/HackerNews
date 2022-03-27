
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { CommentsStyle } from '../css/CommentsStyle';

const Comment = (props) =>{
    return(
            <View key={props.id}
                  style={CommentsStyle.container}>
                {props && <View>
                    <Text>{props.text}</Text>
                    <TouchableHighlight onPress={()=> props.fetchReplies(props)}>
                    <Text style={CommentsStyle.loadmore}>Load replies...</Text>
                    </TouchableHighlight>
                    {/* {isLoading && <ActivityIndicator />} */}
                    {props.children}
                </View>}
            </View>
        );
}

export default Comment;