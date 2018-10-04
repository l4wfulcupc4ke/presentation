import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { connect } from 'react-redux'
import { eat, drink } from './redux/actions'
import Child from './reduxchild'

class ReduxParent extends Component {
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

const mapStateToProps = state => {
  return {
    bag: state.bag
  }
}
const mapDispatchToProps = dispatch => {
  return {
    eat: foods => dispatch(eat(foods)),
    drink: drinks => dispatch(drink(drinks))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReduxParent)

