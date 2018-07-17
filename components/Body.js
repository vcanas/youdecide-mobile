import React from "react";
import { TextInput, View, StyleSheet, ScrollView, Alert } from "react-native";
import searchYoutube from "youtube-api-search";
import  Videos  from "./Videos";


export default class Body extends React.Component{

    constructor(){
        super();
        this.API_KEY = "AIzaSyC9x5YoilkOUlpZCSxvDPHQavspm81qtYM";
        this.maxResults = 20;
        this.state = {}

    }

    onChange = (text) => {
        // handle input
        this.search(text)
    };

    search = (query) => {
        searchYoutube({key: this.API_KEY, term: query, maxResults: 50}, (videos) => {
            this.changeState(videos)
        })
    };

    changeState = (newState) => {
        this.setState ({
            search: newState
        })
    };

    componentWillMount(){
        this.setState({search: {}})
    }

    render(){
        return (
            <View style={styles.bodyContainer}>
                <InputForm inputChange={this.onChange} parentState={this.state.search} />
                <Results vids={this.state.search}/>
            </View>
        );
    }
}

const Results = (props) => {
    return (

        <ScrollView style={styles.videoWrap}>
            {Object.entries(props.vids)
                .map(([key, vid]) => {
                    return (
                        <Videos key={key} meta={vid} />
                    );
            })}
        </ScrollView>
    );
};

const InputForm = (props) => {

    let handleChange = (text) => {
        props.inputChange(text)
    };

    return (
        <View>
            <TextInput style={styles.input} placeholder="Search for any video!" onChangeText={(text) => {
            handleChange(text)
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: "auto",
        padding: 10,
        fontSize: 20,
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        width: 205
    },
    bodyContainer: {
        flexDirection: "column",
        alignItems: "center"
    },
    videoWrap: {
        marginTop: 50,
        width: 300,
        padding: 10,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        maxHeight: "77%",
        borderColor: "rgba(0,0,0,0.2)"
    }
});

