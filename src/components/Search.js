import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    return (
      <div>
      <h1>Wikipedia Viewer</h1>
        <form onSubmit = {this.props.handleSubmit}>
        <input type = 'text' value = {this.props.value} onChange = {this.props.handleChange}></input>
      <button type = 'button' onClick ={this.props.handleSubmit} className="btn btn-primary">Search</button>
          <a href="https://en.wikipedia.org/wiki/Special:Random" target='_blank'><button type = 'button' className="btn btn-success">Random</button></a></form>
      </div>);
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Search;