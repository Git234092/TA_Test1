import React, { useRef, useState } from 'react'
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button,Touchable,TouchableOpacity, TextInput, Alert, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';


const PageOne = ({navigation}) =>   {

    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
  
    const submit = () => {
      if(Email === "user123" && Password === "123"){
        Alert.alert(`You are loged in`)
        navigation.navigate("Home", {myEmail: `${Email}`}, {myPassword:`${Password}`})
      }
      else{
        Alert.alert(`Email or Password is incorrect`)
      }
    }

    const scrollView = useRef();
    
    return (
    <View style={styles.mainContainer}>
     <View style={{flexDirection:"row", padding: 20, }}>
      <TouchableWithoutFeedback 
        onPress={()=>scrollView.current.scrollTo({x:0})}>
        <View>
          <Text style={styles.mainHeader}> Sign IN</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
      onPress={()=>scrollView.current.scrollTo({x:800})}
      >
        <View>
          <Text style={styles.mainHeader}> Sign UP</Text>
        </View>
      </TouchableWithoutFeedback>
      </View>
     
      <ScrollView 
      horizontal 
      pagingEnabled
      ref={scrollView}
      >
{/*Sign IN */}
        <View style={{width: Dimensions.get("window").width, paddingHorizontal:50}}>
          <View style={styles.inputContainer}>
            <Text style={styles.secondHeader}>Sign In</Text>
            <TextInput 
            style={styles.label}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="email"
            value={Email}
            onChangeText = {(emailData) => setEmail(emailData)}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.label}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="password"
            value={Password}
            onChangeText = {(passwordData) => setPassword(passwordData)}
            />
        </View>
            <TouchableOpacity 
            style={styles.buttonStyles}
            onPress={() => submit()}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
 {/*Sign UP */}
 <View style={{width: Dimensions.get("window").width, paddingHorizontal:50}}>
          <View style={styles.inputContainer}>
            <Text style={styles.secondHeader}>Sign UP</Text>
            <TextInput 
            style={styles.label}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="email"
            value={Email}
            
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.label}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="password"
            value={Password}
            
            />
        </View>
            {/*<TouchableOpacity 
            style={styles.buttonStyles}
            onPress={() => submit()}>
            <Text>Sign In</Text>
          </TouchableOpacity>*/}
        </View>
 
    </ScrollView>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
  mainContainer:{
    fontSize: 20,
    paddingHorizontal: 10,
    paddingTop: 100,
    backgroundColor: "white",
  },
  mainHeader:{  
    fontSize: 20,
    paddingHorizontal: 45,
    paddingBottom:20,
    paddingTop: 10,
    backgroundColor:"lightblue",
   borderRadius:8,
  },  
  secondHeader:{
    fontSize: 20,
    paddingHorizontal: 100,
  },
  inputContainer:{
    paddingVertical:10,
    paddingTop: 20,
    backgroundColor: "white",
  },
  label:{
    borderWidth:1,
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:8,
    fontSize: 15,
    marginTop: 20,
    marginBottom: 1,
    lineHeight: 25,
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

export default PageOne;