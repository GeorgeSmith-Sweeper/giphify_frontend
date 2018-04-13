import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddSearchQuery } from '../actions/searches';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  handleChange = (e) => {
    const query = e.target.value;
    this.setState(() => ({
      query
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    dispatch(handleAddSearchQuery(this.state));

    this.setState(() => ({
      query: '',
    }))
  }

  render() {
    const { query } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Search for GIFs"
            value={query}
            onChange={this.handleChange}
            className='textarea'
            maxLength={200}
          />
          <button
            className='btn'
            type='submit'
          >
            submit
          </button>

        </form>
      </div>
    );
  }
}

export default connect()(Home);
