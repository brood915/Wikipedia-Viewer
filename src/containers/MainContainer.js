import React from 'react';
import Search from '../components/Search';
import Result from '../components/Result';
import fetchJsonp from 'fetch-jsonp';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      articles: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getData() {
    fetchJsonp('https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrnamespace=0&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&format=json&gsrsearch=' + this.state.value).then((res) => res.json()).then((json) => json.query.pages).then((articles) => this.setState({
      articles
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getData();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (<div><Search handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} value = {this.state.value}/> <Result keys = {this.state.keys} articles = {this.state.articles}/></div>);
  }
}

export default MainContainer;
