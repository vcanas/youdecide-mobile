import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default class Header extends React.Component{
    render(){
        return (
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}><Text style={styles.spanTitle}>You</Text>Decide</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    header:{
        height: 80,
        justifyContent: "flex-end",
        backgroundColor: "gray",
        width: "100%",
        alignItems: "center",
        paddingBottom: 5
    },
    title:{
        fontSize: 25,
        color: "white"
    },
    spanTitle:{
        color: "red"
    }

});
