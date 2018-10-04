import React, { Component } from 'react'
import './App.css'

class StateParent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bag: {
        foods: ['noodle', 'rice', 'fried chicken'],
        drinks: ['pepsi', 'water', 'lemonade']
      }
    }
  }
  handleReturn (newBag) {
    this.setState({
      bag: newBag
    })
  }
  render () {
    return (
      <div>
        <Child1 bag={this.state.bag} returnbag={this.handleReturn.bind(this)} />
        <Child2 bag={this.state.bag} returnbag={this.handleReturn.bind(this)} />
        <p>What's left</p>
        {this.state.bag.foods.map(item => <p>{item}</p>)}
        {this.state.bag.drinks.map(item => <p>{item}</p>)}
      </div>
    )
  }
}

class Child1 extends Component {
  handleClick (e) {
    console.log(e.target.id)
    let newBag = {...this.props.bag}
    newBag.foods = this.props.bag.foods.map(item => {
      if (item !== e.target.id) return item
    })
    this.props.returnbag(newBag)
  }
  render () {
    return (
      <div style={{border: '2px'}}>
        <h3>Child 1</h3>
        {this.props.bag.foods.map((item, index) => {
          return (<button key={index} id={item} onClick={this.handleClick.bind(this)}>{item}</button>)
        })}
      </div>
    )
  }
}

class Child2 extends Component {
  handleClick (e) {
    console.log(e.target.id)
    let newBag = {...this.props.bag}
    newBag.drinks = this.props.bag.drinks.map(item => {
      if (item !== e.target.id) return item
    })
    this.props.returnbag(newBag)
  }

  render () {
    return (
      <div>
        <h3>Child 2</h3>
        {this.props.bag.drinks.map((item, index) => {
          return (<button key={index} id={item} onClick={this.handleClick.bind(this)}>{item}</button>)
        })}
      </div>
    )
  }
}

export default StateParent
