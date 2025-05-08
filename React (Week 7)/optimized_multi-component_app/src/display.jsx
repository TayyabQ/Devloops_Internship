import React, { useState } from 'react'

const display = ({name, organization}) => {

  return (
    <div>
        <p>My name is {name}</p>
        <p>I am in {organization}</p>
    </div>
  )
}

export default display
