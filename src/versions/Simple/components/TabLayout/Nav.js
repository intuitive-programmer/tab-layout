import React from 'react'

const Nav = ({children, activeIndex, activateTab}) => (
  <div className="tab-layout__nav">
    {children.map((child, index) =>
      React.cloneElement(child, {
        key: index,
        index,
        activeIndex,
        onClick: () => activateTab(index),
      })  
    )}
  </div>
)

export default Nav