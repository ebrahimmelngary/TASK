
import React, { Component } from 'react';
import Navigation from './navigation';
import { Spinner } from './components';
import { View } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class MainApp extends Component {
  render() {

    return (
      <View style={{ flex: 1 }}>
        <Navigation />
        {this.props.loading && <Spinner />}

      </View>
    );
  }
};




const mapStateToProps = state => {
  return {

    loading: state.loading.loading,

  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);