/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [showGithubProfile, setSetshowGithubProfile] = useState(false);

  return showGithubProfile ? (
    <>
      <Button
        title="Close GitHub"
        onPress={() => setSetshowGithubProfile(false)}
      />
      <WebView source={{uri: 'https://github.com/AbdullahiAA'}} />
    </>
  ) : (
    <SafeAreaView style={[backgroundStyle, styles.app]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Image source={require('./assets/profile.jpg')} />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>Jelili Abdullahi</Text>
          <Text style={styles.bio}>Mobile Intern </Text>
          <View style={styles.label}>
            <Text style={styles.labelText}>HNGx</Text>
          </View>

          <Button
            title="Open GitHub"
            onPress={() => setSetshowGithubProfile(true)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },

  infoContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
    gap: 8,
  },

  name: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
    fontSize: 36,
    fontWeight: '200',
  },

  bio: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
    fontSize: 16,
  },

  label: {
    marginVertical: 4,
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'lightblue',
  },

  labelText: {
    fontSize: 12,
    color: 'blue',
  },
});

export default App;
