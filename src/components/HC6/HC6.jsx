import React from 'react'
import styled from 'styled-components'
import { formattedTexGenerator } from '../../utility/ComponentTransfromer'

export default function HC6({ isMulti , data}) {
  const {title, formatted_title,  icon, url, is_disabled} = data

  const goto = () => {
    if(!is_disabled)
       window.location.href = url;
  }

  return  (
    <Card multi={isMulti}  disable={is_disabled} onClick={() => goto()}>
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
      <NextIcon src="assets/next.png"/>
    </Card>
  )
}

const NextIcon = styled.img`
  width: 10px;
  height: 16px;
`

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
  width: 30px;
  height: 30px;
  margin-right: 15px;
  background: #1B1B1E;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
`
const AboutIcon = styled.img`
  height: 18px;
  width: 18px;
`

const LeftPart = styled.div`
display: flex; flex-direction: row;`

const Card = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  background-color: #ffffff;
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
