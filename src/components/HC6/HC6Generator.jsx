import React from 'react'
import styled from 'styled-components'
import HC6 from './HC6'

export default function HC6Generator({schema}) {

  const list = schema.is_scrollable ? schema.cards: !!schema.cards && schema.cards.slice(0,1)
  return (
    <RowSlider className="no-scrollbar" multi={schema.is_scrollable}>
      {list.map((row,index) => <HC6 key={index} isMulti={schema.is_scrollable} data={row} />)}
    </RowSlider>
  )
}

const RowSlider = styled.div`
  display: flex;
  flex-direction: row;
  ${({multi}) => multi && `overflow-x: scroll; `}
  
`