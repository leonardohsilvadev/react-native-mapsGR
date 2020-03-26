import React from "react";
import { ActivityIndicator, StyleSheet, Modal, View } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import { COLOR } from '../config/styles'

const Styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    top: '0@vs',
    left: '0@s',
    right: '0@s',
    bottom: '0@vs',
  },
  subView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '128@s',
    height: '128@vs',
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: '0@s',
      height: '3@vs',
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  text: {
    marginTop: '8@vs',
    textAlign: 'center',
  },
});

export const Loader = ({open}) => {
  if(open){
    return (
        <View style={Styles.container}>
          <Modal animationType="slide" transparent visible onRequestClose={() => { }}>
            <View style={Styles.subView}>
                <ActivityIndicator size="large" color={COLOR.ACCENT} />
            </View>
          </Modal>
        </View>
      );
  } else {
      return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});