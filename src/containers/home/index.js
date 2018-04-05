import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGreeting } from '../../modules/greeting';


const Home = props => (
  <div>
    <h1>Home</h1>
    <p>{props.greeting}</p>
    <p>
      <button onClick={props.fetchGreeting}>Say Hello</button>
    </p>
    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
);

const mapStateToProps = state => ({
  greeting: state.greeting.greeting
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchGreeting,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
