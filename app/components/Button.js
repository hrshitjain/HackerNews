import React, { memo } from "react";
import { TouchableHighlight, Text } from "react-native";

const Button = memo(({text , onPress, containerStyle, textStyle}) => {
    return(
    <TouchableHighlight style={containerStyle}
                        onPress={onPress}>
        <Text style={textStyle}>{text}</Text>
    </TouchableHighlight>);
});
export default Button;