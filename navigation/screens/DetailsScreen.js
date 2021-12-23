// import * as React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';


export default function HomeScreen ({navigation}) {

  const [data, setData] = useState();
  const [loading, toggleLoading] = useState(false);
  const [error, setError] = useState(false);
  const endpoint = 'https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/infotypes/schoolholidays/schoolyear/2021-2022?output=json'

useEffect(() => {
  async function fetchData () {

    toggleLoading(true);
    setError(false);

  
    try {
    const vakantieData = await axios.get(endpoint);
    setData (vakantieData.data);
    console.log ('*********');
    console.log ( vakantieData );
  }
    catch(e) {
      console.error(e);
      setError(true);
   }

   
   toggleLoading(false);

 }
 fetchData();
}, [endpoint]);

    return(
        <div>
         {loading && <p>Loading</p>}
         {error && <p>er is een error opgetreden bij het ophalen van de data</p>}
           
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text
                    onPress={() => alert('this is the "Home" screen.')}
                    style={{ fontSize: 26, fontWeight: 'bold'}}>About Page</Text>
            </View>
             {data && <>
               <Text>
                <h2>
                    {data.id}
                </h2>
                <h2>
                    {data.content[0].vacations[0].regions[0].startdate}
                </h2>
                <h1>Een mooie vakantie App</h1></Text>
                
            </>
            }
        </div>
    );
}
