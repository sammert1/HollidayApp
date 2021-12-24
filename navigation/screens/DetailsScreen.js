// import * as React from 'react';
import {StyleSheet, View, Image, Text } from 'react-native';


export default function HomeScreen ({navigation}) {

    return(
      
        <div>
         
           <View>
             {/* <Image source={{ uri: 'herfst.png' }} /> */}
           </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text
                    style={{ fontSize: 26, fontWeight: 'bold'}}>About Page</Text>
            </View>
            
          <div id='copy'>
            <View>
                <Text>©Stefan Voetberg AO3A</Text>
            </View>     
          </div>
            
        </div>
    );
}
