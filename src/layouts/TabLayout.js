import React, { Component } from 'react'

import Nav from '../components/TabLayout/Nav'

class TabLayout extends Component {
  static Nav = ({children, activeIndex}) => (
    <Nav activeIndex={activeIndex}>{children}</Nav>
  )

  state = {
    activeIndex: 0,
  }

  render() {
    const { state, props } = this
    return(
      React.Children.map(props.children, child =>
        React.cloneElement(child, {
          activeIndex: state.activeIndex,
        })  
      )
    )
  }
}

export default TabLayout