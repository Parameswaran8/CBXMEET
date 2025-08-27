import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { CBXMEETLOGO } from '../Icons/Icons';

export default function SplaceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View></View>
        <View style={styles.logoContainer}>
          <CBXMEETLOGO width={170} height={153} color={'#fff'} />
          <Text style={styles.titleText}>CBXMEET</Text>
          <Text style={styles.subtitleText}>Meeting Scheduler</Text>
        </View>

        {/* Background stripes */}
        {/* <View style={styles.bottomcontainer}> */}
        <View style={styles.backgroundStripe1} />
        <View style={styles.backgroundStripe2} />
        <View style={styles.backgroundStripe3} />
        <View style={styles.backgroundStripe4} />
        <View style={styles.backgroundStripe5} />
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  topImage: {
    borderRadius: 30,
    height: 37,
    marginBottom: 240,
    alignSelf: 'stretch',
  },
  logoContainer: {
    marginBottom: 5,
    alignItems: 'center',
  },
  logoImage: {
    width: 169,
    height: 152,
    marginBottom: 23,
  },
  titleText: {
    color: '#040C1A',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitleText: {
    color: '#5D636E',
    fontSize: 16,
  },
  backgroundStripe1: {
    height: 53,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(236, 238, 241, 0.28)',
  },
  backgroundStripe2: {
    height: 51,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(220, 227, 236, 0.4)',
  },
  backgroundStripe3: {
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(191, 202, 219, 0.52)',
  },
  backgroundStripe4: {
    height: 57,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(130, 154, 193, 0.46)',
  },
  backgroundStripe5: {
    height: 52,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(33, 64, 113, 0.47)',
  },

  bottomcontainer: {
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: 'red',
  },
});
