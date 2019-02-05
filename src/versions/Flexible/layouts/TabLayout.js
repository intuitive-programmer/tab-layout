import React, { Component } from 'react'

import Nav from '../components/TabLayout/Nav'
import Content from '../components/TabLayout/Content'

class TabLayout extends Component {
  static Nav = ({children, activeIndex, activateTab}) => (
    <Nav
      activeIndex={activeIndex}
      activateTab={activateTab}
    >{children}</Nav>
  )

  static Content =({children, activeIndex}) => (
    <Content
      activeIndex={activeIndex}
    >{children}</Content>
  )

  state = {
    activeIndex: 0,
  }

  activateTab = tabIndex => this.setState({ activeIndex: tabIndex })

  render() {
    const { state, props } = this
    return(
      React.Children.map(props.children, child =>
        React.cloneElement(child, {
          activeIndex: state.activeIndex,
          activateTab: this.activateTab,
        })  
      )
    )
  }
}

export default TabLayout