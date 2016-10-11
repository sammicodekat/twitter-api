import React, { Component } from 'react'
import TwitterStore from '../stores/TwitterStore'
import List from './List'
import SearchBar from './SearchBar'
import { Grid } from 'semantic-ui-react'
const { Column, Row } = Grid

export default class SearchPage extends Component {
  constructor () {
    super();

    this.state = {
      tweets: TwitterStore.getTweets()
    }
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    TwitterStore.startListening(this._onChange)
  }

  componentWillUnmount(){
    TwitterStore.stopListening(this._onChange)
  }

  _onChange(){
    this.setState({
      tweets: TwitterStore.getTweets()
    })
  }

  render(){
    const {tweets} = this.state;
    console.log("tweets in SearchPage",tweets);
    return (
      <Grid>
        <Row color='orange' textAlign='right'>
          <Column><SearchBar/></Column>
        </Row>
        <Row color='orange' textAlign='center'>
          <Column><List tweets ={tweets}/></Column>
        </Row>
      </Grid>
    )
  }
}