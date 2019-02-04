import React from 'react'

const Tab = ({index, activeIndex, label}) => (
  <div
    className={index === activeIndex
      ? "tab-layout__nav__tab tab-layout__nav__tab--active"
      : "tab-layout__nav__tab"
    }
  >
    {label.toUpperCase()}
  </div>
)

export default Tab