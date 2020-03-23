import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card, Content, Item, Input, Button, DatePicker} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../styles';
import { COLOR } from '../../../config/styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Alert, StyleSheet, Dimensions } from 'react-native';

export const Trafego = ({}) => {
    const navigation = useNavigation();
    const [date, setDate] = useState()
    
    const styles = StyleSheet.create({
        map: {
          height: 220,
          width: Dimensions.get('window').width
        },
    })

    console.log(date)

    return (
        <View>
            <Text style={Styles.label}>Data</Text>
            <Content searchBar style={Styles.searchBar}>
                <Item>
                <DatePicker
                    defaultDate={new Date()}
                    locale={"br"}
                    modalTransparent={true}
                    animationType={"fade"}
                    androidMode={"default"}
                    onDateChange={value => setDate(value)}
                    disabled={false}
                />
                </Item>                
            </Content>
            <Text style={Styles.label}>Navio</Text>
            <Content searchBar style={Styles.searchBar}>
                <Item>
                <Input
                    style={Styles.input}
                />
                </Item>                
            </Content>
            <Button style={Styles.btnEntrar} onPress={() => console.log('pesquisar')}><Text style={{textAlign: "center", fontWeight: 'bold'}}>Pesquisar</Text></Button>
            <Content>
                <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: -23.981225, 
                    longitude: -46.291127,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}      
                maxZoomLevel={20} // default => 20
                enableZoomControl={true}
                zoomEnabled = {true}
                />
            </Content>
        </View>
    )
};
