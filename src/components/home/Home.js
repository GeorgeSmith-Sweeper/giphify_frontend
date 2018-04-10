import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGreeting } from '../../actions/GreetingActions';

const Home = props => (
  <div>
    <h1>Giphify</h1>
    <p>{props.greeting}</p>
    
    <p>
      <button onClick={props.fetchGreeting}>Say Hello</button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  greeting: state.greetingReducer.greeting
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchGreeting,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
