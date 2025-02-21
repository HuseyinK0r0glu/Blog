import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as BlogProvider } from "./src/contexts/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
 
const navigator = createStackNavigator({
    Index : IndexScreen,
    Show : ShowScreen
},{
  initialRouteName : 'Index',
  defaultNavigationOptions : {
    title : 'Blogs'
  }
});

{/*
  // Instead of exporting like this we first create App then export it 
  // to wrap the navigator 

  // that allows us to convert the navigator into a React component that can be rendered in the app

  export default createAppContainer(navigator);
*/}

const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
    <App/>
  </BlogProvider>
};
