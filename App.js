
import React, {Component} from 'react';
import {Platform, StyleSheet,Image,Button,ScrollView,TextInput,KeyboardAvoidingView,TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  Bcksty: {
   // flex: 0.3,  
    height: 280,
    //position: 'absolute',
     backgroundColor: 'black',
    flexDirection: 'column', justifyContent: 'space-between',padding :5,
  },
  Bcksty1: {
   //flex: 0.1,
    flex: 2,  
    //height: 30, 
    backgroundColor: 'black',
    flexDirection: 'row', 
    //justifyContent: 'space-between',
  },
   Bcksty2: {
   //  flex: 0.1,
    flex: 1.5, 
    //height: 30, 
    backgroundColor: 'black' ,borderColor: 'black',padding :3,
    flexDirection: 'row', justifyContent: 'center',borderRadius: 4,borderWidth: 2,
  },
   Bcksty3: {
   //  flex: 0.1,
    flex: 4,  
    //height: 30, 
    backgroundColor: 'black',
    flexDirection: 'row', justifyContent: 'center',
  },
  Texsty: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14, 
   //  textAlign: 'center',margin: 5,
    alignSelf:'center',
    justifyContent: 'flex-start',

    //textAlign: 'center',

  },
  Bcksty4: {
   //  flex: 0.1,
    flex: 2.5,  
    //height: 30, 
    backgroundColor: 'black',
    flexDirection: 'row', justifyContent: 'center',
  },
  Texsty1: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15, 
    textAlign: 'center',
backgroundColor: '#32cd32',padding :3,
//borderColor: '#ffff00',
borderRadius: 5,borderWidth: 2,
  },
  Texsty2: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20, 
    textAlign: 'center',
    alignSelf:'center',

  },
   Texsty3: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14, 
    textAlign: 'center',borderRadius: 5,borderWidth: 2,padding :3,
    backgroundColor: '#ffffff',borderRadius: 30,alignSelf:'center',
    //borderColor: '#ffff00',
  },
  Texsty4: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15, 
    textAlign: 'center',
    alignSelf:'center',

  },
  Bcksty5: {
    flex: 2, 
    // center: 5, 
    padding :2,
    height: 5, 
    //position: 'absolute',
    //width: 50,
   // zIndex: 999,
    //backgroundColor: '#ffffff',
    flexDirection: 'row', justifyContent: 'space-around',alignSelf:'center', margin:2,
  },
  bxsty:{
     flexDirection: 'row',backgroundColor: '#0000ff',
     justifyContent: 'space-around',
     color: '#ffffff', fontWeight: 'bold',fontSize: 18,alignSelf:'center',  margin: 5,
    borderRadius: 30,padding :3, 
    zIndex: 999,
    //position: 'absolute',
    //borderColor: '#ffffff',borderRadius: 2,borderWidth: 1,
  },
  bxsty1:{
     flexDirection: 'row',backgroundColor: '#ffffff',
     justifyContent: 'space-around',
     color: 'black', fontWeight: 'bold',fontSize: 18,alignSelf:'center', padding :3,
  },
    Bcksty8: {
    flex: 2,  
    // height: 15, 
    backgroundColor: '#ffffff',
    flexDirection: 'row', justifyContent: 'center',
  },
   footer: {
    flexDirection: 'row',flex: 1.5,
    backgroundColor: '#ffffff',justifyContent: 'flex-end',
  },
   Texsty8: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15, 
    textAlign: 'center',
    backgroundColor: '#ffffff',alignSelf:'center',
  },
   Texsty9: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15, 
    textAlign: 'center',
    backgroundColor: '#ffffff',alignSelf:'center',
  },
  msgg: {
    paddingHorizontal: 25,flexDirection: 'column',
    fontSize: 18,color: 'black',
    fontWeight: 'bold',backgroundColor: '#ffffff',
    flex: 2,justifyContent: 'flex-end',
  },
  Picsty: {
     //padding: 10,
   // margin: 5,
    height: 35,
    width: 35,
   // resizeMode : 'cover',
    //alignItems: 'stretch',
  //  borderRadius :20,
    borderRadius: 35/2,
  },
   Picsty1: {
    // padding: 5,
    //margin: 5,
    height: 25,
    width: 25,
   // resizeMode : 'cover',
    //alignItems: 'flex-end',
    borderRadius: 25/2,
    alignSelf:'center',
  },
  Bcksty9: {
   //  flex: 0.1,
    flex: 1.5,  
    //height: 30, 
    backgroundColor: '#ffffff',
    flexDirection: 'row', justifyContent: 'center',
  },
    Bckstyvew: {
   // flex: 0.3,  
    height: 280, 
    //position: 'absolute',
     backgroundColor: '#ffffff',
    flexDirection: 'column', justifyContent: 'space-between',padding :5,
  },
});
export default class App extends Component<Props> {
  render() {
     let pic = { uri:'http://pngimages.net/sites/default/files/user-png-image-15189.png' };
    let pic1 = { uri:'http://vectorpage.com/uploads/2014/06/Nature-Backgrounds-8.png' };
     let pic2 = { uri:'http://www.technovera.in/assets/img/about.png' };
    let pic3 = { uri:'http://blog.easemytrip.com/wp-content/uploads/2017/09/valley-flower-1024x630.png' };
    let pic4 = { uri:'https://images5.alphacoders.com/602/thumb-1920-602663.jpg' };

      return (
          <ScrollView style = {{flex:1, backgroundColor: 'white'}} ref = 'scroll'>
        <KeyboardAvoidingView behavior="padding" enabled>
        <View>


  <View style={styles.Bcksty}>
     
      <View style={styles.Bcksty1}>
     <Text>         </Text>
          <Image  source={require('./Image/user2.jpg')}  style={styles.Picsty} />

        <Text style={styles.Texsty}> Your Game </Text>
         <Text>                                           </Text>

         <Image  source={require('./Image/closeWhite24.png')}  style={styles.Picsty1} />
     
      </View>
      
      <View style={styles.Bcksty2}>
        <Text style={styles.Texsty1}>  SPONSORED  </Text>
      </View>
      
      <View style={styles.Bcksty3}> 
        <Text style={styles.Texsty2} > World of warcraft deep lore  QA includes activities that ensure the implementation of processes   </Text>
      </View>

      <View style={styles.Bcksty2}>

        <Text style={styles.Texsty3}>  Today 10:00 AM | Start in 19 Min  </Text>
      </View>

      <View style={styles.Bcksty4}> 
        <Text style={styles.Texsty4} > procedures and standards in context to verification of developed </Text>
      </View>

       <View style={styles.Bcksty1}>
       <Text>   </Text>
       </View>
 </View>


 <View style = {{flex:1, flexDirection: 'column', justifyContent: 'center'}} >
       <View style={styles.Bcksty5}>
         <TouchableOpacity style={styles.bxsty} ><Text style={styles.bxsty}> Edit Game </Text>
         </TouchableOpacity> 
         <Text>    </Text>
          <TouchableOpacity style={styles.bxsty} ><Text style={styles.bxsty}> Practise </Text>
         </TouchableOpacity> 
      </View>
 </View>

 <View style={styles.Bckstyvew}>
            <View style={{flex:1,backgroundColor: '#ffffff'}}> 
               <Text>    </Text>
          </View>

       <View style={styles.Bcksty8}> 
        <Text style={styles.Texsty8} > On a node with a set width/height aspect ratio control </Text>
      </View>
      <View style={styles.Bcksty8}>
       
        <Image  source={require('./Image/pink16.png')}  style={styles.Picsty1} />
        <Text style={styles.Texsty8}>  10 your friends plan to play this game </Text>
       </View>

        <View style={styles.Bcksty9}>
          <Image source={pic2}  style={styles.Picsty1} /> 
          <Text>  </Text>
          <Image source={pic3}  style={styles.Picsty1} /> 
          <Text>  </Text>
          <Image source={pic4}  style={styles.Picsty1} /> 

        </View>

        <View style={styles.Bcksty8}>
         <TouchableOpacity style={{borderColor: 'red'}}>
        <Icon.Button backgroundColor={'#ffffff'} color={'black'} borderRadius={30} alignSelf={'center'} borderColor={'#808080'} margin={3}  margin={5} borderRadius={30} borderWidth={2} name="share" size={20}> Share Game </Icon.Button>
        </TouchableOpacity>
       </View>
     
         <View style={{borderBottomWidth: 1, borderBottomColor: '#808080',width: 500,}}></View>
          <View style={styles.footer}>
           
            <Image source={pic1}  style={styles.Picsty1} /> 
            <Text style={styles.Texsty8} >   Have fun!   </Text>
            <Text>                                               </Text>
            <Image  source={require('./Image/sendMessage.png')}  style={styles.Picsty1} />
             <Text>   </Text>
          </View>
  </View>



    </View>
       </KeyboardAvoidingView>
        </ScrollView>
    );
  }
}


