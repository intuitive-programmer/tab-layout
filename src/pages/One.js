import React from 'react'

const One = ({ index, activeIndex }) => (
  <div
    className={index === activeIndex
      ? "page page--active"
      : "page"
    }
  >
    Page One.
  </div>
)

export default One