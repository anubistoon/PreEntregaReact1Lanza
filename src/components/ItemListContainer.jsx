import React from 'react'

function ItemListContainer({greeting}) {
  return (
    <div className="d-flex justify-content-center align-items-top vh-100 mt-5">
      <h3 className="text-center">{greeting}</h3>
    </div>
  )
}

export default ItemListContainer