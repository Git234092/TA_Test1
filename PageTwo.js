
import React from "react";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button,Touchable,TouchableOpacity, TextInput, Alert, TouchableWithoutFeedback, Dimensions,Image} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

const PageTwo = ({route, navigation}) => {

    const {myEmail} = route.params;
    
    

    return(
        <View style={styles.MainContainer}>
        
           <Image 
             style={styles.imageStyle}
             source = {require("../RNFirstProject/images/test1.jpeg")}/>

            <View style={styles.container}>
             <Text style = {styles.TexHeader}>John Smith</Text>
            </View >
            <View style={styles.container}>
             <Text style = {styles.TexHeader}>Email: {myEmail} </Text>
            </View>
            <View style={styles.container}>
            <Text style = {styles.TexHeader}> Phone:</Text>
            </View>
            <View>
                <TouchableOpacity
                style={styles.buttonStyles}
                onPress={()=> navigation.goBack()}
                >
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};


const styles = StyleSheet.create({
imageStyle:{
    width:100,
    height:100,
    borderRadius:100,
    
},

MainContainer:{
    paddingTop: 10,
    backgroundColor: "white",
    marginTop: 30,
    alignItems:"center",
},

container:{
    paddingTop: 10,
},
TexHeader:{
    fontSize: 20,
   paddingHorizontal: 100,
   paddingBottom:30,
   paddingTop: 20,
   backgroundColor:"lightblue",
   borderRadius:8,
},
buttonStyles:{
    width:300,
    alignItems:"center",
    borderRadius:100,
    marginTop: 30,
    marginBottom: 5,
    backgroundColor:"lightblue",
    paddingVertical:5,
    
  },

});
export default PageTwo

