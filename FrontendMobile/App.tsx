import React, { Component } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  }
});

interface AppProps { }

interface AppState {
  alertEnabled: boolean;
}

export default class App extends Component<AppProps, AppState> {
  readonly state = {
    alertEnabled: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.content}>
        <Switch
          value={this.state.alertEnabled}
          onValueChange={() => {
            this.setState(prevState => ({
              alertEnabled: !prevState.alertEnabled
            }));
          }}
        ></Switch>
        <Text>Enable Distancing Alert</Text>
      </View>
    );
  }
}
