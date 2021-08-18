import React from 'react'
import styled from 'styled-components'
import HC1 from './HC1'

export default function HC1Generator({schema}) {

 
  return (
    <RowSlider className="no-scrollbar" multi={schema.is_scrollable}>
      {schema.cards.map((row,index) => <HC1 key={index} isMulti={schema.is_scrollable} data={row} />)}
    </RowSlider>
  )
}

const RowSlider = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  ${({multi}) => multi ? `overflow-x: scroll; ` : 'flex-wrap: nowrap;'}
  
`