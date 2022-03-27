import React, { useState } from 'react';
import { View } from 'react-native';
import { fetchNewsItem } from '../services/APIService';
import Comment from './Comment';

const CommentsList = (props) => {
    const [replies, setReplies] = useState(null);

    const fetchReplies = (params) => {
        console.log('fetchReplies')
        const actions = params.kids.map(fetchNewsItem);
          var results = Promise.all(actions);
          results.then(data => {
            setReplies(data);
          }); 
    }
    const commentProps = {...props, fetchReplies: fetchReplies, children: replies ? replies.map(reply => Comment(reply)) : null };

    return(
        <View>
            {Comment(commentProps)}
        </View>
    );
}

export default CommentsList;