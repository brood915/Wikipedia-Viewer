import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  render() {
    return (<div>{Object.keys(this.props.articles).map(function(each,index){
let articles = this.props.articles[each]; return (<a href={'http://en.wikipedia.org/?curid='+ articles.pageid} key = {articles.pageid.toString()} target='_blank'>
	<div className="result"><h2 className = 'title'>{articles.title}</h2><div className = 'info'>{articles.extract}</div></div></a>);}, this)}</div>)
  }
}

Result.propTypes = {
  articles: PropTypes.object.isRequired,

}

export default Result;