import React, { useState } from 'react';
import { View, Text, Left, Icon, Card, Content, Item, Input, Button, DatePicker, Picker} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../styles';
import { COLOR } from '../../../config/styles';
import { Alert, StyleSheet, Dimensions } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';

export const Trafego = ({setDate, navios, setNavio, navio, getTrafegoByNavio}) => {
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
                <Picker
                    placeholder="Navios"
                    mode="dialog"
                    style={{ width: '100%', height: verticalScale(50) }}
                    onValueChange={value => setNavio(value)}       
                    selectedValue={navio}
                >
                    {navios && navios.map(navio =>                         
                        <Picker.Item label={navio.name} value={navio.name} />
                    )}
                </Picker>               
            </Content>
            <Button style={Styles.btnEntrar} onPress={() => getTrafegoByNavio()}><Text style={{textAlign: "center", fontWeight: 'bold'}}>Pesquisar</Text></Button>            
        </View>
    )
};
