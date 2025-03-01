import React , {useContext} from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"; 
import { Context as BlogContext} from "../contexts/BlogContext";
import {EvilIcons} from "@expo/vector-icons"

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');

    /// state is the list of the blog post we have 
    const {state} = useContext(BlogContext);

    const BlogPost = state.find((blogPost) => blogPost.id === id);

    return <View>
        <Text>{BlogPost.title}</Text>
        <Text>{BlogPost.content}</Text>
    </View>
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit',{id : navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
};

const styles = StyleSheet.create({});

export default ShowScreen;