import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useLongPress from './UseLongPress';

export default function HC3({ isMulti , data}) {
  const {title, formatted_title, description, formatted_description, url, bg_image, bg_color, cta, is_disabled} = data
  const [moveContainer, setMoveContainer] = useState(0)
  const [hideCard, setHideCard] = useState({startHiding: false, hide: false })
  const [animationRef, setAnimationRef] = useState(null)

  useEffect(() => {
    return () => {
      clearTimeout(animationRef)
    }
  })

  const onLongPress = () => {
    if(is_disabled) return;
    console.log('longpress is triggered');
    moveContainer > 0 ? setMoveContainer(0) : setMoveContainer(115)
  };

  const onClick = () => {
    if(is_disabled) return;
    console.log('click is triggered')
    window.location.href = url;
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 1000,
  };

  const longPressEvent =  useLongPress(onLongPress, onClick, defaultOptions);

  const onPressRemindLater = () => {
    if(is_disabled) return;
    setHideCard({ ...hideCard,  startHiding: true})
    setAnimationRef(setTimeout(() => { 
      console.log('works...'); 
      setHideCard({...hideCard, hide: true})
    }, 700))
  }

  const onPressDismissNow = (cardName) => {
    if(is_disabled) return;
    const blackList = localStorage.getItem('blackList');
    
    setHideCard({ ...hideCard,  startHiding: true})
    setAnimationRef(setTimeout(() => { 
      console.log('works...'); 
      setHideCard({...hideCard, hide: true})
    }, 700))

    if (!!blackList && blackList.split(',').includes(cardName)) return;
    const newBlackList = !!blackList && blackList.length > 0 ? blackList.concat(',' + cardName) : `${cardName}`
    localStorage.setItem('blackList', newBlackList )
  }

  /** style moderators */

  const formattedTexGenerator  = (_text, formatted_text, rgx) => {
    if(is_disabled) return;
    const {text, entities} = formatted_text
    if(entities.length <= 0) {
        return !!text ? text : _text;
    } else {
      let sx = text.split(rgx)
      if(formatted_text.entities.length > 0) {
        return entities.map((itm,index) => 
            <span key={index + itm.text}>{sx[index]}<ColorText  color={itm.color}>
                {itm.text}
              </ColorText>
            </span>
        )
      }
    }
  }

  const goto = (url) => {
    if(is_disabled) return;
    window.location.href = url
  }

  return  (
    <Card multi={isMulti} hide={hideCard} disable>
      <Container  move={moveContainer} bg={bg_color} bgImage={bg_image} >
        <Overlay>
          {/* <CardImage src="assets/asset15.png" /> */}
          <GestureHandler {...longPressEvent}>
            <CardHeading>
              {formattedTexGenerator(title, formatted_title, '{}')}
            </CardHeading>
            <CardSubHeading>
              {formattedTexGenerator(description, formatted_description, '{}')}
            </CardSubHeading>
          </GestureHandler>
          <RowLayer>
            {
              cta.map((itm,index) => <CardActionButton key={index} bg={itm.bg_color} textColor={itm.text_color} onClick={() => goto(itm.url)}>
                {itm.text}
              </CardActionButton> ) 
            }
          </RowLayer>
        </Overlay>
      </Container>
        <ActionSection  move={moveContainer}>
          <Group1 onClick={() => onPressRemindLater()}>
            <IconContainer src="assets/remind.png"/>
            remind later
          </Group1>
          <Group2 onClick={() => onPressDismissNow(title)}>
          <IconContainer2 src="assets/dismiss.png"/>
          dismiss now
          </Group2>
        </ActionSection>
    </Card>
  )
}

const GestureHandler = styled.span`
  z-index: 100;
`

const RowLayer = styled.div`
  display: flex;
  flex-direction: row;
`

const Card = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  ${({hide}) => hide.startHiding && `
    transform: scale(0);
    transition-duration: 1000ms;
  `}
  ${({hide}) => hide.hide && `
    display: none;
  `}
  ${({multi}) =>  multi && `
    margin-right: 15px;
    min-width: 390px;
  `}
`
const Container = styled.div`
  margin-bottom: ;
  width: 100%;
  height: 350px;
  padding: 35px;
  background-color: ${({bg}) => bg};
  border-radius: 12px;
  z-index: 200;
  ${({move}) => `
  transform:  translateX(${move}px);
  transition-duration: 1000ms;
  position: absolute;
  `}
  background-image: ${({bgImage}) => `url(${bgImage.image_url})`};
  background-repeat: no-repeat;
  background-size: ${({bgImage}) => `${bgImage.aspect_ratio * 100 }%`}; 91%;
  `
// const CardImage = styled.img`
//   width: 91.73px;
//   height: 81.2px;
// `

const CardHeading = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;
  width: 80%;
  margin-top: 5px;
`

const ColorText = styled.span`
  margin-bottom: 3px;
  color: ${({color}) => color};
  margin-right: 5px;
`

const CardSubHeading = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  width: 80%;
  color: #FFFFFF;

  margin-top: 24px;
  margin-bottom: 15px;
`

const CardActionButton = styled.div`
  width: 128px;
  height: 42px;
  border-radius: 6px;
  background: ${({bg}) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-right: 10px;
  color: ${({textColor}) => textColor};
  z-index: 600;
`

const ActionSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 100;
  margin-left: 20px;
`

const Group1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 98px;
  width: 72px;
  height: 59px;
  background: #F7F6F3;
  border-radius: 12px;
  margin-bottom: 48px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height, or 120% */

  text-align: center;

  color: #000000;
`

const Group2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 59px;
  background: #F7F6F3;
  border-radius: 12px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height, or 120% */

  text-align: center;

  color: #000000;
`

const Overlay = styled.div`
  padding-top: 110px;
  z-index: 110;
`

const IconContainer = styled.img`
  height: 20px;
  width: 18px;
  margin-bottom: 6px;
`

const IconContainer2 = styled.img`
  height: 20px;
  width: 20px;
  margin-bottom: 6px;
`