// import * as React from 'react';
import {StyleSheet, ScrollView, View, Text } from 'react-native';
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
      <ScrollView style={{ marginTop: 35, marginBottom: 35 }}>
        <div>
         {loading && <p>Loading</p>}
         {error && <p>er is een error opgetreden bij het ophalen van de data</p>}
           
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text
                    onPress={() => alert('this is the "Home" screen.')}
                    style={{ fontSize: 26, fontWeight: 'bold'}}>Home Screen</Text>
            </View>
             {data && <>
             <div className='Data'>
               <Text>
              
               <h1>Data van de vakantieperioden 2021</h1></Text>

                <Text >
                <h2>
                    {data.content[0].vacations[0].type}
                </h2>
                </Text>

                <div className='Herfst'>
                <Text>
                    <h4>{data.content[0].vacations[0].regions[0].region}<br></br></h4>
                    Vanaf: {data.content[0].vacations[0].regions[0].startdate}<br></br>
                    Tot: {data.content[0].vacations[0].regions[0].enddate}<br></br>
                </Text>
                <Text>
                    <h4>{data.content[0].vacations[0].regions[1].region}<br></br></h4>|
                    Vanaf: {data.content[0].vacations[0].regions[1].startdate}<br></br>|
                    Tot: {data.content[0].vacations[0].regions[1].enddate}<br></br>
                </Text>
                <Text>
                <h4>{data.content[0].vacations[0].regions[2].region}<br></br></h4>|
                    Vanaf: {data.content[0].vacations[0].regions[2].startdate}<br></br>|
                    Tot: {data.content[0].vacations[0].regions[2].enddate}<br></br>
                </Text>
                </div>
                <Text >
                <h2>
                    {data.content[0].vacations[1].type}
                </h2>
                </Text>

                <div className='Kerst'>
                <Text>
                <h4>{data.content[0].vacations[1].regions[0].region}<br></br></h4>
                    Vanaf: {data.content[0].vacations[1].regions[0].startdate}<br></br>
                    Tot: {data.content[0].vacations[1].regions[0].enddate}<br></br>
                </Text>
                </div>
                <Text >
                <h2>
                    {data.content[0].vacations[2].type}
                </h2>
                </Text>
                <div className='Voorjaar'>
                <Text>
                <h4>{data.content[0].vacations[2].regions[0].region}<br></br></h4>
                    Vanaf:  {data.content[0].vacations[2].regions[0].startdate}<br></br>
                    Tot: {data.content[0].vacations[2].regions[0].enddate}<br></br>
                </Text>
                <Text>
                <h4>{data.content[0].vacations[2].regions[1].region}<br></br></h4>|
                    Vanaf: {data.content[0].vacations[2].regions[1].startdate}<br></br>|
                    Tot:{data.content[0].vacations[2].regions[1].enddate}<br></br>
                </Text>
                <Text>
                <h4>{data.content[0].vacations[2].regions[2].region}<br></br></h4>|
                    Vanaf: {data.content[0].vacations[2].regions[2].startdate}<br></br>|
                    Tot: {data.content[0].vacations[2].regions[2].enddate}<br></br>
                </Text>
                </div>
                <Text >
                <h2>
                    {data.content[0].vacations[3].type}
                </h2>
                </Text>

                <div className='Mei'>
                <Text>
                <h4>{data.content[0].vacations[3].regions[0].region}<br></br></h4>
                    Vanaf: {data.content[0].vacations[3].regions[0].startdate}<br></br>
                    Tot: {data.content[0].vacations[3].regions[0].enddate}<br></br>
                </Text>
                </div>
                <Text >
                <h2>
                    {data.content[0].vacations[4].type}
                </h2>
                </Text>
                <div className='Zomer'>
                <Text>
                <h4>{data.content[0].vacations[4].regions[0].region}<br></br></h4>
                    Vanaf: {data.content[0].vacations[4].regions[0].startdate}<br></br>
                    Tot: {data.content[0].vacations[4].regions[0].enddate}<br></br>
                </Text>
                <Text>
                <h4>{data.content[0].vacations[4].regions[1].region}<br></br></h4>|
                    Vanaf: {data.content[0].vacations[4].regions[1].startdate}<br></br>|
                    Tot: {data.content[0].vacations[4].regions[1].enddate}<br></br>
                </Text>
                <Text>
                <h4>{data.content[0].vacations[4].regions[2].region}<br></br></h4>|
                    Vanaf: {data.content[0].vacations[4].regions[2].startdate}<br></br>|
                    Tot: {data.content[0].vacations[4].regions[2].enddate}<br></br>
                </Text>
                </div>
                </div> 
            </>
            }
        </div>
        </ScrollView>
    );
}

