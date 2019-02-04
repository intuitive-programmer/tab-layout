import React from 'react'

const Two = ({ index, activeIndex }) => (
  <div
    className={index === activeIndex
      ? "page page--active"
      : "page"
    }
  >
    Page Two.
  </div>
)

export default Two