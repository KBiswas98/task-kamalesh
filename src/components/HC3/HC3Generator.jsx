import React from 'react'
import styled from 'styled-components'
import HC3 from './HC3'
const blackList = localStorage.getItem('blackList')

export default function HC1Generator({schema}) {

  const isMulti = schema.cards.length > 1 

  const filteredSchema = !!blackList && blackList.length > 0 ? schema.cards.filter(itm => !blackList.split(',').includes(itm.title) ) : schema.cards
  
  return (
    <RowSlider className="no-scrollbar" multi={isMulti}>
      {filteredSchema.map((row,index) => <HC3 key={index} isMulti={isMulti} data={row} />)}
    </RowSlider>
  )
}

const RowSlider = styled.div`
  display: flex;
  flex-direction: row;
  ${({multi}) => multi && `overflow-x: scroll;`}
  
`