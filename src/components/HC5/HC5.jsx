import React from 'react'
import styled from 'styled-components'

export default function HC5({ isMulti , data}) {
  const {url, bg_image, bg_color, is_disabled} = data

  const goto = () => {
    if(!is_disabled)
       window.location.href = url;
  }

  return  (
    <Card multi={isMulti}  disable={is_disabled} onClick={() => goto()}  bg={bg_color} bgImage={bg_image}>
    </Card>
  )
}

const Card = styled.div`
  width: 100%;
  height: 150px; 
  position: relative;
  background-color: ${({bg}) => bg};
   background-image: ${({bgImage}) => `url(${bgImage.image_url})`};
  background-repeat: no-repeat; 
   background-size: ${({bgImage}) => `100%`};
  border-radius: 12px;
  overflow: hidden;
  margin: 15px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  ${({multi}) =>  multi && `
    margin-right: 15px;
    min-width: 350px;
  `}

  ${({disable}) => 
    disable && `opacity: 0.7;`
  }
`
