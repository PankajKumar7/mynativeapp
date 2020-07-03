import React from 'react';
import { View, Text , StyleSheet , Button, TouchableHighlight } from  'react-native';
import * as Animatable from 'react-native-animatable';
// import { Button } from 'react-native-elements';



const Splash = ()=>{
    return (
        <View style={styles.container}>
        <View style={styles.topbase}>
            <Animatable.Image 
            animation="bounceIn"
            source={require('./images/awlogo.png')}/>

        </View>


        <Animatable.View
             animation="fadeInUpBig"
             style={styles.bottombase}>
           <Text style={styles.contectText}>
               Stay connect with everyone !
           </Text>
           <View style={styles.btnbox}>
           <View style={styles.login}>
           <Button style={styles.button}  title="Log In"/>
           </View>
           <View style={styles.signup}>
           <Button type="clear"  style={styles.button}  title="Sign Up"/>
           </View>
           </View>
        </Animatable.View>
        </View>
    )
}



const styles = StyleSheet.create({


    container: {
        flex: 1 ,
        backgroundColor: '#0f58a5',},
    topbase: {
        flex:2,
        alignItems:'center',
        justifyContent: 'center'
        

    }   ,
    bottombase : {
        flex:1,
        backgroundColor: '#f1f2f3',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    contectText: {
        fontSize:40,
        color: '#eb5527'
    },
    btnbox: {
    
        flexDirection: 'row',
       
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    login: {
        flex:1,
        paddingRight: 5  
    },
    signup: {
        flex: 1,        
        paddingLeft: 5
    },
    button: {     
        
    },

});



export default Splash;