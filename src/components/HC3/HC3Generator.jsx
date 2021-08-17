import React from 'react'
import styled from 'styled-components'
import HC3 from './HC3'

export default function HC1Generator({schema}) {

  const isMulti = schema.cards.length > 1 
  const blackList = localStorage.getItem('blackList')

  const filteredSchema = schema.cards.filter(itm => !blackList.includes(itm.name) )
  return (
    <RowSlider multi={isMulti}>
      {filteredSchema.map((row,index) => <HC3 key={index} isMulti={isMulti} data={row} />)}
    </RowSlider>
  )
}

const RowSlider = styled.div`
  display: flex;
  flex-direction: row;
  ${({multi}) => multi && `overflow-x: scroll;`}
  
`