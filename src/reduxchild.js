import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { eat, drink } from './redux/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { bag: state.bag };
}

const mapDispatchToProps = dispatch => {
  return {
    eat: foods => dispatch(eat(foods)),
    drink: drinks => dispatch(drink(drinks))
  }
}

class Child extends Component {
  handleClick1 (e) {
    console.log(this.props)
    this.props.eat(e.target.id)
  }
  handleClick2 (e) {
    console.log(this.props)
    this.props.drink(e.target.id)
  }
  render () {
    return (
      <div>
        <h3>Child</h3>
        {this.props.bag.foods.map((item, index) => {
          return (<button key={index} id={item} onClick={this.handleClick1.bind(this)}>{item}</button>)
        })}
        {this.props.bag.drinks.map((item, index) => {
          return (<button key={index} id={item} onClick={this.handleClick2.bind(this)}>{item}</button>)
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Child)