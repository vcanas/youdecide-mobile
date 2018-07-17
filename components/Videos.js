import React from "react";
import { View, Text, StyleSheet, WebView } from "react-native";

class Videos extends React.Component{
    render(){
        return (
            <View style={styles.wrapVideo}>
                <Text>{this.props.meta.snippet.title}</Text>
                <VideoObject id={this.props.meta.id.videoId}/>
            </View>
        );
    }
}

const VideoObject = (props) => {
    return (<WebView source={{uri: `https://www.youtube.com/embed/${props.id}`}} />)
}

export default Videos;

const styles = StyleSheet.create({

    wrapVideo: {
        width: "100%",
        height: 200,
        minHeight: 200,
        maxHeight: 250,
        marginTop: 20,
        fontFamily: "San Francisco"
    }
});
