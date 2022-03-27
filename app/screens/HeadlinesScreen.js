import { ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import React, { useRef } from 'react';
import { HeadlinesStyle } from "../css/HeadLinesStyle";
import HeadLine from "../components/HeadLine";
import { useEffect } from "react";
import { useState } from "react";
import { fetchNewsIds, fetchNewsItem } from "../services/APIService";
import { NewsBatchSize } from "../utils/Constants";
import * as screenNames from '../navigation/ScreenNames';
import Button from "../components/Button";


function HeadLinesScreen({ navigation })  {
    const newsIds = useRef([]);
    const [index, setIndex] = useState(0);
    const [headlines, setHeadlines] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    useEffect(()=> {
      fetchLatestNews();
    },[index]);

    async function fetchLatestNews() {
      try {
            setisLoading(true);
            if(index == 0){
              await setIds();
            }
            const sliced = newsIds.current.slice(index, index + NewsBatchSize);
            const actions = sliced.map(fetchNewsItem);
            var results = Promise.all(actions);
            results.then(data => {
              setHeadlines(oldNews => [...oldNews, ...data]);
              setisLoading(false);
            } 
            );
          } catch (error) {
            setisLoading(false);
            console.log(error)
          }
    }

    setIds = async() => {
      const ids = await fetchNewsIds();
      newsIds.current = ids;
    }

    const fetchMoreNews = ()=>{
      if(index < newsIds.current.length){
        setIndex(oldIndex => oldIndex + NewsBatchSize);
      }
    }

    function onHeadlineSelected(item){
      navigation.navigate(screenNames.CommentsScreen, item)
    }

    const renderItem = ({item}) => (
        <HeadLine title={item.title}
                  onPress={()=>onHeadlineSelected(item)}/>
    );

    return(
        <SafeAreaView style={HeadlinesStyle.container}>
            <FlatList data={headlines}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => item.id }>
            </FlatList>
            {!isLoading && <Button containerStyle={HeadlinesStyle.loadButton}
                                   textStyle={HeadlinesStyle.loadText}
                                   text='Load More'
                                   onPress={()=>fetchMoreNews()}/>}
            {isLoading && <ActivityIndicator />}
        </SafeAreaView>
    )

}

export default HeadLinesScreen;