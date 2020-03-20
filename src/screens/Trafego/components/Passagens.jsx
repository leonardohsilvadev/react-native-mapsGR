import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card, Content, Item, Input} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../styles';
import { style, styleShadow } from '../styles'
import { COLOR } from '../../../config/styles';
import { scale, verticalScale } from 'react-native-size-matters';

export const Passagens = ({}) => {
    const navigation = useNavigation();

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
                <Input
                    style={Styles.input}
                />
                </Item>                
            </Content>
            <Content style={Styles.passagensBox}>
                <LinearGradient {...cardWhite} style={Styles.cardBox}>
                    <Card style={Styles.card} transparent>                        
                        <Icon
                            name="ship"
                            type="FontAwesome"
                            style={Styles.iconCard}                            
                        />
                        <View style={Styles.infosPassagem}>
                            <Text style={Styles.titleCard}>
                                BOCHEM RUSSELS{"\n"}
                                <Text style={Styles.smallText}>
                                    10/03/2020 - 11:57:06
                                </Text>
                            </Text>
                            <Text style={Styles.secondText}>   
                                <Icon
                                    name="speedometer"
                                    type="SimpleLineIcons"
                                    style={Styles.secondIcon}                            
                                /> Velocidade: <Text style={Styles.value}>6.9</Text>{" "}
                            <Text style={Styles.secondText}>                                
                                <Icon
                                    name="weight"
                                    type="MaterialCommunityIcons"
                                    style={Styles.secondIcon}                            
                                /> Tonelagem: <Text style={Styles.value}>1490000</Text>
                            </Text>
                            </Text>
                        </View>
                    </Card>
                </LinearGradient>
                <LinearGradient {...cardWhite} style={Styles.cardBox}>
                    <Card style={Styles.card} transparent>                        
                        <Icon
                            name="ship"
                            type="FontAwesome"
                            style={Styles.iconCard}                            
                        />
                        <View style={Styles.infosPassagem}>
                            <Text style={Styles.titleCard}>
                                BOCHEM RUSSELS{"\n"}
                                <Text style={Styles.smallText}>
                                    10/03/2020 - 11:57:06
                                </Text>
                            </Text>
                            <Text style={Styles.secondText}>   
                                <Icon
                                    name="speedometer"
                                    type="SimpleLineIcons"
                                    style={Styles.secondIcon}                            
                                /> Velocidade: <Text style={Styles.value}>6.9</Text>{" "}
                            <Text style={Styles.secondText}>                                
                                <Icon
                                    name="weight"
                                    type="MaterialCommunityIcons"
                                    style={Styles.secondIcon}                            
                                /> Tonelagem: <Text style={Styles.value}>1490000</Text>
                            </Text>
                            </Text>
                        </View>
                    </Card>
                </LinearGradient>
                <LinearGradient {...cardWhite} style={Styles.cardBox}>
                    <Card style={Styles.card} transparent>                        
                        <Icon
                            name="ship"
                            type="FontAwesome"
                            style={Styles.iconCard}                            
                        />
                        <View style={Styles.infosPassagem}>
                            <Text style={Styles.titleCard}>
                                BOCHEM RUSSELS{"\n"}
                                <Text style={Styles.smallText}>
                                    10/03/2020 - 11:57:06
                                </Text>
                            </Text>
                            <Text style={Styles.secondText}>   
                                <Icon
                                    name="speedometer"
                                    type="SimpleLineIcons"
                                    style={Styles.secondIcon}                            
                                /> Velocidade: <Text style={Styles.value}>6.9</Text>{" "}
                            <Text style={Styles.secondText}>                                
                                <Icon
                                    name="weight"
                                    type="MaterialCommunityIcons"
                                    style={Styles.secondIcon}                            
                                /> Tonelagem: <Text style={Styles.value}>1490000</Text>
                            </Text>
                            </Text>
                        </View>
                    </Card>
                </LinearGradient>
                <LinearGradient {...cardWhite} style={Styles.cardBox}>
                    <Card style={Styles.card} transparent>                        
                        <Icon
                            name="ship"
                            type="FontAwesome"
                            style={Styles.iconCard}                            
                        />
                        <View style={Styles.infosPassagem}>
                            <Text style={Styles.titleCard}>
                                BOCHEM RUSSELS{"\n"}
                                <Text style={Styles.smallText}>
                                    10/03/2020 - 11:57:06
                                </Text>
                            </Text>
                            <Text style={Styles.secondText}>   
                                <Icon
                                    name="speedometer"
                                    type="SimpleLineIcons"
                                    style={Styles.secondIcon}                            
                                /> Velocidade: <Text style={Styles.value}>6.9</Text>{" "}
                            <Text style={Styles.secondText}>                                
                                <Icon
                                    name="weight"
                                    type="MaterialCommunityIcons"
                                    style={Styles.secondIcon}                            
                                /> Tonelagem: <Text style={Styles.value}>1490000</Text>
                            </Text>
                            </Text>
                        </View>
                    </Card>
                </LinearGradient>
                <LinearGradient {...cardWhite} style={Styles.cardBox}>
                    <Card style={Styles.card} transparent>                        
                        <Icon
                            name="ship"
                            type="FontAwesome"
                            style={Styles.iconCard}                            
                        />
                        <View style={Styles.infosPassagem}>
                            <Text style={Styles.titleCard}>
                                BOCHEM RUSSELS{"\n"}
                                <Text style={Styles.smallText}>
                                    10/03/2020 - 11:57:06
                                </Text>
                            </Text>
                            <Text style={Styles.secondText}>   
                                <Icon
                                    name="speedometer"
                                    type="SimpleLineIcons"
                                    style={Styles.secondIcon}                            
                                /> Velocidade: <Text style={Styles.value}>6.9</Text>{" "}
                            <Text style={Styles.secondText}>                                
                                <Icon
                                    name="weight"
                                    type="MaterialCommunityIcons"
                                    style={Styles.secondIcon}                            
                                /> Tonelagem: <Text style={Styles.value}>1490000</Text>
                            </Text>
                            </Text>
                        </View>
                    </Card>
                </LinearGradient>
            </Content>
        </View>
)};
