// @generated: @expo/next-adapter@2.0.0-beta.9
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
  Ionicons,
  Entypo 

} from '@expo/vector-icons';

export default function App() {
  console.log("Component loaded")
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <View
        style={{
          flexDirection:"row"
        }}
      >
          <Ionicons name="ios-mail-unread" size={32}  />
          <Entypo name="add-user" size={32}/>
          <Entypo name="address" size={32}/>
          <Entypo name="aircraft" size={32}/>
          <Entypo name="baidu" size={32}/>
      </View>
     

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
