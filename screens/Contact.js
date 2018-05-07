import React from 'react';
import { ScrollView, StyleSheet, View, WebView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact',
  };

  render() {
    let jsCode = `
        document.getElementsByClassName('navbar-toggle')[0].disabled = true;
    `;
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: 'http://allbrooklynautosound.com/contact/' }}
          injectedJavaScript={jsCode}
          javaScriptEnabledAndroid={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
