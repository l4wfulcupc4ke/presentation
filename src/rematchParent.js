import React, { Component } from 'react'
import { connect } from 'react-redux'
import Child from './rematchChild'
class RematchParent extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <Child />
        <p>What's left</p>
        {this.props.bag.foods.map(item => <p>{item}</p>)}
        {this.props.bag.drinks.map(item => <p>{item}</p>)}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => state.Model
const mapDispatchToProps = (dispatch: any) => dispatch.Model
export default connect(mapStateToProps,mapDispatchToProps)(RematchParent)