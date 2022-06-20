import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

interface HeaderProps{
  title: string
}

export default function Header(props: HeaderProps){
  return(
    <View style={styles.container}>

      <BorderlessButton>
        <Feather name="arrow-left" size={24} color='#15b6d6'/>
      </BorderlessButton>

      <Text style={styles.title}>{props.title}</Text>
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