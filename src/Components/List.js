import React, { Component } from 'react'
import { connect } from 'react-redux'
import QCard from './QCard';

class List extends Component {
  render() {
    this.props.questions.sort((a, b) => {
      return b.timestamp - a.timestamp;
    })
    return (
      <div className="list">
        {this.props.questions.map(ele => <QCard question={ele} key = {ele.id}/>)}
      </div>
    )
  }
}


export default connect()(List);