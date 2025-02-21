<<<<<<< HEAD
import React , {useState,useContext} from "react";
import {View,Text,StyleSheet,TextInput} from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation}) => {

    const id = navigation.getParam('id');

    const {state , editBlogPost} = useContext(BlogContext);

    const blogPost = state.find(blogPost => blogPost.id === id);

    return (
        <BlogPostForm initialValues = {{title : blogPost.title , content : blogPost.content}} onSubmit={(title,content) => {
            editBlogPost(id,title,content,() => navigation.pop());
        }}/>
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
=======
import React from "react";
import {View,Text,StyleSheet} from "react-native";

const EditScreen = () => {
    return (
        <View>
            <Text>Edit Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({});
>>>>>>> 5095424e87001635498c7d804a4eb85da7c5c419

export default EditScreen;