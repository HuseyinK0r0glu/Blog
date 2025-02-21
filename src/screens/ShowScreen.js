import React , {useContext} from "react";
import {View,Text,StyleSheet} from "react-native"; 
import { Context as BlogContext} from "../contexts/BlogContext";

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');

    /// state is the list of the blog post we have 
    const {state} = useContext(BlogContext);

    const BlogPost = state.find((blogPost) => blogPost.id === id);

    return <View>
        <Text>{BlogPost.title}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ShowScreen;