import { View, Image, StyleSheet, Text } from 'react-native';
import Countdown from 'react-countdown'
import axios from 'axios';
import React, {useEffect, useState} from 'react';


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

      <div>
        
        {loading && <p>Loading</p>}
        {error && <p>er is een error opgetreden bij het ophalen van de data</p>}
        {data && <>
            <div id="Herfst">
        <span>Nog </span>
        <Countdown 
            date={new Date(data.content[0].vacations[0].regions[0].startdate).getTime()}
        />  
        

        <span> dagen tot: Herfstvakantie</span> 
        {/* <img src="../../images/herfst" alt="Girl in a jacket" width="500" height="600"/> */}

        <br></br><br></br>
        </div>

        <div id="Kerst">
        <span>Nog </span>
        <Countdown 
            date={new Date(data.content[0].vacations[1].regions[0].startdate).getTime()}
        />  
        
        <span> dagen tot: Kerstvakantie</span>
        <br></br><br></br>
        </div>

        <div id="Voorjaar">
        <span>Nog </span>
        <Countdown 
            date={new Date(data.content[0].vacations[2].regions[0].startdate).getTime()}
        />  
        
        <span> dagen tot: Voorjaarsvakantie</span>
        <br></br><br></br>
        </div>

        <div id="Mei">
        <span>Nog </span>
        <Countdown 
            date={new Date(data.content[0].vacations[3].regions[0].startdate).getTime()}
        />  
        
        <span> dagen tot: Meivakantie</span>
        <br></br><br></br>
        </div>

        <div id="Zomer">
        <span>Nog </span>
        <Countdown 
            date={new Date(data.content[0].vacations[4].regions[0].startdate).getTime()}
        />  
        
        <span> dagen tot: Zomervakantie</span>
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

    );
}