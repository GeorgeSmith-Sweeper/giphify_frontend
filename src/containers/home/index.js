import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGreeting } from '../../reducers/greeting';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>{props.greeting}</p>
    <p>
      <button onClick={props.fetchGreeting}>Say Hello</button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  greeting: state.reducer.greeting
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchGreeting,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
