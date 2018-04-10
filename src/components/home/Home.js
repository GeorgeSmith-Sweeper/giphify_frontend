import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGreeting } from '../../actions/GreetingActions';
import { postUserInput } from '../../actions/UserInputActions';

const Home = props => (
  <div>
    <h1>Giphify</h1>
    <p>{props.greeting}</p>
    <p>
      <button onClick={props.fetchGreeting}>Say Hello</button>
    </p>

    <form onSubmit={props.postUserInput}>

    </form>
  </div>
);

const mapStateToProps = state => ({
  greeting: state.greetingReducer.greeting
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchGreeting,
  postUserInput
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
