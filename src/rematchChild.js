import React, { Component } from 'react'
import { connect } from 'react-redux'


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

const mapStateToProps = (state: any) => state.Model
const mapDispatchToProps = (dispatch: any) => dispatch.Model

export default connect(mapStateToProps,mapDispatchToProps)(Child)