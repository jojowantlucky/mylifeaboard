import React from 'react'

const getCosts = () => {
  
  fetch('https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/costs?maxRecords=3&view=Grid%20view', {
    options: {

    }
  })
  
  return (
    <div>getCosts</div>
  )
}

export default getCosts