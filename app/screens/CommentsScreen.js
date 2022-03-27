import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from 'react';
import { fetchNewsItem } from "../services/APIService";
import { CommentsStyle } from "../css/CommentsStyle";
import CommentsList from "../components/CommentsList";

function CommentsScreen(props)  {
    const { route : {params} } = props;
    const [comments, setComments] = useState(null);

    useEffect(()=>{
        fetchComments();
    }, [])

    async function fetchComments(){
        try {
                const response = await fetchNewsItem(params.id);
                setComments(response);
            } catch (error) {
                console.log(error);
            }
    }
    return(
        <ScrollView>
            <View>
                <Text style={CommentsStyle.title}>{params.title}</Text>
                {CommentsList(comments)}
            </View>
        </ScrollView>
    )
}

export default CommentsScreen;