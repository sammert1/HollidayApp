import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import Countdown from 'react-countdown'
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import herfst from '../../image/herfst.png';
import kerst from '../../image/kerst.png'
import voorjaar from '../../image/voorjaar.png';
import mei from '../../image/mei.png';
import zomer from '../../image/zomer.png';


export default function DetailsScreen ({navigation}) {


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
        {data && <>
            <div id="Herfst">
        <span>Nog </span>
        <Countdown 
            date={new Date(data.content[0].vacations[0].regions[0].startdate).getTime()}
        />  
        

        <span> dagen tot: </span><img src={herfst} alt="Herfst" width="200" height="150"/>

        <br></br><br></br>
        </div>

        <div id="Kerst">
        <span>Nog </span>
        <Countdown 
            date={new Date(data.content[0].vacations[1].regions[0].startdate).getTime()}
        />  
        
        <span> dagen tot: </span> <img src={kerst} alt="Kerst" width="200" height="150"/>

        <br></br><br></br>
        </div>

        <div id="Voorjaar">
        <span>Nog </span>
        <Countdown 
            date={new Date(data.content[0].vacations[2].regions[0].startdate).getTime()}
        />  
        
        <span> dagen tot: </span><img src={voorjaar} alt="Voorjaar" width="200" height="150"/>
        <br></br><br></br>
        </div>

        <div id="Mei">
        <span>Nog </span>
        <Countdown 
            date={new Date(data.content[0].vacations[3].regions[0].startdate).getTime()}
        />  
        
        <span> dagen tot: </span><img src={mei} alt="Mei" width="200" height="150"/>
        <br></br><br></br>
        </div>

        <div id="Zomer">
        <span>Nog </span>
        <Countdown 
            date={new Date(data.content[0].vacations[4].regions[0].startdate).getTime()}
        />  
        
        <span> dagen tot: </span><img src={zomer} alt="Zomer" width="200" height="150"/>
        </div>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>
                </Text>
        </View>
        </>
        }
        
        </div>
        </ScrollView>
    );
}