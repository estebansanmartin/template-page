import React from 'react'

const List = props => (
  <div>
    {
      props.items.map((item, index) => <article className="card" key={index}>{item}</article>)
    }
  </div>
)

export default List