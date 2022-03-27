import { Text, TouchableHighlight, View } from "react-native"
import { HeadlinesStyle } from "../css/HeadLinesStyle";
import React, { memo } from 'react';

const HeadLine = memo(({title, onPress}) => {
    return(
    <TouchableHighlight onPress={onPress}>
        <View style={HeadlinesStyle.item}>
            <Text style={HeadlinesStyle.title}>{title}</Text>
        </View>
    </TouchableHighlight>);});

export default HeadLine;