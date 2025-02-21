import React , {useState} from "react";
import {View,Text,StyleSheet,TextInput,Button} from "react-native";

const BlogPostForm = ({ onSubmit, initialValues = { title: '', content: '' } }) => {

    const [titleState,setTitleState] = useState(initialValues.title);
    const [contentState,setContentState] = useState(initialValues.content);

    return (
        <View>
            <Text style = {styles.label}>Enter Title:</Text>
            <TextInput style = {styles.textInput} value = {titleState} onChangeText={(text) => setTitleState(text)}/>
            <Text style = {styles.label}>Enter Content:</Text>
            <TextInput style = {styles.textInput} value = {contentState} onChangeText={(text) => setContentState(text)}/>
            <Button style = {styles.button} title = "Save Blog Post" onPress={() => {
                onSubmit(titleState,contentState);
            }}/>
                {/*
                /// here we could directly call the navigation.navigate function but it could cause a problem 
                /// what if there is problem in the addBlogPost part and without adding new one we could go back to Index 
                /// so we send this function to addBlogPost and handle it there 
                
                addBlogPost(titleState, contentState,() => navigation.navigate('Index'));
                */}
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

export default BlogPostForm;