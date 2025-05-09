import { StyleSheet } from "react-native";
import colorsWhiteMode from "@/app/const/colors";
export const style = StyleSheet.create({
    initial_page_loader: {
        minHeight: "100%",
        minWidth: "100%",
        backgroundColor: colorsWhiteMode.background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image_loading: {
        width: "50%",
        height: 100
    },
    login_container: {
        minHeight: "100%",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",

    }
    ,
    AuthElementTop_content: {
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    AuthElementTop_title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
    AuthElementTop_subtitle: {
        fontSize: 14,
        fontWeight: "regular",
        color: colorsWhiteMode.text_color,
        textAlign: "center",
        marginTop: 8
    },
    AuthElementTop_logo: {
        width: 64,
        height: 48,
    },
    InputElementAuth: {
        width: "80%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ddd",
        borderTopColor: "transparent",
        borderRightColor: "transparent",
        borderLeftColor: "transparent",
        display: "flex",
        flexDirection: "row",
        marginTop: 5
    },
    form_login: {
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 60
    },
    InputElement: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    contentButtonElement: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
    ContainerButtonCustom: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width:"100%"
    },
    ButtonCustumAuth: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        backgroundColor: colorsWhiteMode.orenge_color,
        color: "white",
        padding:15,
        borderRadius:10

    },
    Text_button:{
         color:"white",
         fontSize:16,
         fontWeight:"medium"
    }
    ,

    ButtonCustumAuth_sigUp:{
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        borderColor: colorsWhiteMode.orenge_color,
        borderWidth:1,
        color: "white",
        padding:15,
        borderRadius:10,
         marginBottom:10
    },
    Text_button_signUp:{
         color:colorsWhiteMode.orenge_color
    },
    SigUElementBottom:{
     height:"100%",
     display:"flex",
     flexDirection:"column",
     alignItems:"flex-end",
     justifyContent:"flex-end"
    },
    InputContent_password:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      width:"84%",
      marginLeft:14
    }
})