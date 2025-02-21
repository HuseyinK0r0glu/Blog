import React , {useContext} from "react";
import {StyleSheet} from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScren = ({navigation}) => {

    const {addBlogPost} = useContext(BlogContext);

    return (
        <BlogPostForm onSubmit = {(title,content) => {
            addBlogPost(title,content,() => navigation.navigate('Index'));
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

export default CreateScren;