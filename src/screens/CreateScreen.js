import React , {useState,useContext} from "react";
import {View,Text,TextInput,StyleSheet , Button} from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";

const CreateScren = ({navigation}) => {

    const {addBlogPost} = useContext(BlogContext);

    const [titleState,setTitleState] = useState('');
    const [contentState,setContentState] = useState('');

    return (
        <View>
            <Text style = {styles.label}>Enter Title:</Text>
            <TextInput style = {styles.textInput} value = {titleState} onChangeText={(text) => setTitleState(text)}/>
            <Text style = {styles.label}>Enter Content:</Text>
            <TextInput style = {styles.textInput} value = {contentState} onChangeText={(text) => setContentState(text)}/>
            <Button style = {styles.button} title = "Add Blog Post" onPress={() => {
                /// here we could directly call the navigation.navigate function but it could cause a problem 
                /// what if there is problem in the addBlogPost part and without adding new one we could go back to Index 
                /// so we send this function to addBlogPost and handle it there 
                addBlogPost(titleState, contentState,() => navigation.navigate('Index'));
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput : {
        fontSize : 18,
        borderWidth : 1,
        borderColor : 'black',
        marginBottom : 15,
        margin : 5,
        padding : 5
    },
    label : {
        fontSize : 20,
        marginBottom : 5,
        marginLeft : 5
    },
    button : {

    }
});

export default CreateScren;