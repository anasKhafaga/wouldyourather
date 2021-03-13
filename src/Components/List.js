import React, { Component } from 'react'
import { connect } from 'react-redux'
import QCard from './QCard';

class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.questions.map(ele => <QCard question={ele} key = {ele.id}/>)}
      </div>
    )
  }
}


export default connect()(List);