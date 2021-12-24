// import * as React from 'react';
import {StyleSheet, View, Image, Text } from 'react-native';
import deltion from '../../image/deltion.png';



export default function HomeScreen ({navigation}) {

    return(
      
        <div>
         
           <View>
             {/* <Image source={{ uri: 'herfst.png' }} /> */}
           </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text
                    style={{ fontSize: 26, fontWeight: 'bold'}}>About Page</Text><br></br>
                    <img src={deltion} alt="deltion" width="600" height="600"></img>
            </View>
            
          <div id='copy'>
            <View>
                <Text>©Stefan Voetberg AO3A</Text>
            </View>     
          </div>
            
        </div>
    );
}
