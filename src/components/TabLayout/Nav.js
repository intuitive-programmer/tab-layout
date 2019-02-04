import React from 'react'

const Nav = ({children, activeIndex}) => (
  <div className="tab-layout__nav">
    {children.map((child, index) =>
      React.cloneElement(child, {
        key: index,
        index,
        activeIndex,
      })  
    )}
  </div>
)

export default Nav