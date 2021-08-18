import React from 'react'
import styled from 'styled-components'
import { formattedTexGenerator } from '../../utility/ComponentTransfromer'

export default function HC1({ isMulti , data}) {
  const {title, formatted_title, icon, url, bg_color, is_disabled} = data

  const goto = () => {
    if(!is_disabled)
       window.location.href = url;
  }

  return  (
    <Card multi={isMulti}  disable={is_disabled} onClick={() => goto()} bg={bg_color}>
      <LeftPart>
        <AboutIconContainer>
            <AboutIcon src={icon.image_url}/>
        </AboutIconContainer>
        <TextContainer>
          {
            formattedTexGenerator(title, false, formatted_title ,'{}', CardText)
          }
        </TextContainer>
      </LeftPart>
    </Card>
  )
}

const TextContainer = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 6px;
`

const CardText = styled.span`
  ${({ color}) => color && `
    color: ${color};
  `}
`

const AboutIconContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100px;
  overflow: hidden;
  margin-right: 15px;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
`
const AboutIcon = styled.img`
  height: 35px;
  width: 35px;
`

const LeftPart = styled.div`
display: flex; flex-direction: row;`

const Card = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  background-color: ${({bg}) => bg? bg : '#FBAF03'};
  border-radius: 12px;
  overflow: hidden;
  margin: 15px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-right: 15px;
  ${({multi}) =>  multi && `
    min-width: 300px;
  `}

  ${({disable}) => 
    disable && `opacity: 0.7;`
  }
`
