import React from 'react'
import styled from 'styled-components'
import HC5 from './HC5'

export default function HC5Generator({schema}) {

  const list = schema.is_scrollable ? schema.cards: schema.cards.slice(0,1)
  return (
    <RowSlider className="no-scrollbar" multi={schema.is_scrollable}>
      {list.map((row,index) => <HC5 key={index} isMulti={schema.is_scrollable} data={row} />)}
    </RowSlider>
  )
}

const RowSlider = styled.div`
  display: flex;
  flex-direction: row;
  ${({multi}) => multi && `overflow-x: scroll; `}
  
`