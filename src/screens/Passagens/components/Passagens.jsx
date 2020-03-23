import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card, Content, Item, Input, DatePicker} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../styles';
import { COLOR } from '../../../config/styles';
import { scale, verticalScale } from 'react-native-size-matters';

export const Passagens = ({passagens, changeDate}) => {

    const cardWhite = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
        colors: [COLOR.LIGHT, COLOR.LIGHT]
    }

    return (
        <View>
            <Text style={{ paddingLeft: scale(20), paddingBottom: verticalScale(4), color: COLOR.ORANGE, fontSize: scale(14) }}>Pesquisar</Text>
            <Content searchBar style={Styles.searchBar}>
                <Item>
                <DatePicker
                    defaultDate={new Date()}
                    locale={"br"}
                    modalTransparent={true}
                    animationType={"fade"}
                    androidMode={"default"}
                    onDateChange={value => changeDate(value)}
                    disabled={false}
                />
                </Item>                
            </Content>
            <Content style={Styles.passagensBox}>
                {passagens && passagens.map(passagem => 
                    <LinearGradient {...cardWhite} style={Styles.cardBox}>
                        <Card style={Styles.card} transparent>                        
                            <Icon
                                name="ship"
                                type="FontAwesome"
                                style={Styles.iconCard}                            
                            />
                            <View style={Styles.infosPassagem}>
                                <Text style={Styles.titleCard}>
                                    {passagem.nomeNavio}{"\n"}
                                    <Text style={Styles.smallText}>
                                        {passagem.data} - {passagem.hora}
                                    </Text>
                                </Text>
                                <Text style={Styles.secondText}>   
                                    <Icon
                                        name="speedometer"
                                        type="SimpleLineIcons"
                                        style={Styles.secondIcon}                            
                                    /> Velocidade: <Text style={Styles.value}>{passagem.velocidade}</Text>{" "}
                                <Text style={Styles.secondText}>                                
                                    <Icon
                                        name="weight"
                                        type="MaterialCommunityIcons"
                                        style={Styles.secondIcon}                            
                                    /> Tonelagem: <Text style={Styles.value}>{passagem.tonelagem}</Text>
                                </Text>
                                </Text>
                            </View>
                        </Card>
                    </LinearGradient>
                )}   
            </Content>
        </View>
)};
