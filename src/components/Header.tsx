import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import React from "react";
import { Text, View, StyleSheet, Button,TouchableOpacity  } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

interface HeaderProps{
  title: string,
  showCancel?: boolean
}

export default function Header({title,showCancel = true}: HeaderProps){
  const {navigate,goBack} = useNavigation();

  function handleGoBackToAppHomepage(){
    // console.log('clicou')
    navigate("OrphanagesMap") 
  }

  return(
    <View style={styles.container}>

      <TouchableOpacity onPress={goBack}>
        <Feather name="arrow-left" size={24} color='#15b6d6'/>
      </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>


      {showCancel ? 
        (
          <TouchableOpacity onPress={handleGoBackToAppHomepage}>  
            <Feather name="x" size={24} color='#ff669d'/>
          </TouchableOpacity>) 
          : 
          ( 
            <View/>
          )
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      padding: 24,
      backgroundColor: '#f9fafc',
      borderBottomWidth: 1,
      borderColor: '#ddef0',
      paddingTop: 44,

      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center"
    },

    title:{
      fontFamily: 'Nunito_600SemiBold',
      color: '#8fa7b3',
      fontSize: 16
    }
})