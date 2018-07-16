import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { fetchData } from '../reduxsaga/actions';

import ComponentBasic from './basic/ComponentBasic';

class Home extends ComponentBasic {
  componentWillReceiveProps(nextProps) {
    const data = nextProps.data;
    console.log(nextProps);
    console.log(data);
  }
  render() {
    const { container, text, button, buttonText, mainContent } = styles;
    return (
      <View style={container}>
        <Text style={text}>Redux Examples</Text>
        <Button
          icon={<Icon name="rocket" size={30} color="#4F8EF7" />}
          titleStyle={buttonText}
          buttonStyle={button}
          onPress={() => this.props.fetchData()}
          title="Load Data"
        />
        <View style={mainContent}>
          {this.props.appData.isFetching && <Text>Loading</Text>}
          {this.props.appData.data !== undefined &&
          this.props.appData.data.length
            ? this.props.appData.data.map((person, i) => (
                <View key={i}>
                  <Text>Name: {person.name}</Text>
                  <Text>Age: {person.age}</Text>
                </View>
              ))
            : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10
  }
});

function mapStateToProps(state) {
  return {
    appData: state.appData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
