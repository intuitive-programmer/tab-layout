import React, { Component } from 'react'

import Nav from '../components/TabLayout/Nav'

class TabLayout extends Component {
  static Nav = ({children}) => (
    <Nav>{children}</Nav>
  )

  render() {
    return(
      React.Children.map(this.props.children, child =>
        React.cloneElement(child)  
      )
    )
  }
}

export default TabLayout