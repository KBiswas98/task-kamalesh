import React from 'react'
import styled from 'styled-components'
import HC9 from './HC9'

export default function HC9Generator({schema}) {

  const list = schema.is_scrollable ? schema.cards: schema.cards.slice(0,1)
  return (
    <RowSlider className="no-scrollbar" multi={schema.is_scrollable}>
      {list.map((row,index) => <HC9 height={schema.height} key={index} isMulti={schema.is_scrollable} data={row} />)}
    </RowSlider>
  )
}

const RowSlider = styled.div`
  display: flex;
  flex-direction: row;
  ${({multi}) => multi && `overflow-x: scroll; `}
  
`