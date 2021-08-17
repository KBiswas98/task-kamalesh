import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useLongPress from './UseLongPress';

export default function HC3({ isMulti }) {
  
  const [moveContainer, setMoveContainer] = useState(0)
  const [hideCard, setHideCard] = useState({startHiding: false, hide: false })
  let animationRef = null

  useEffect(() => {
    return () => {
      clearTimeout(animationRef)
    }
  }, [])

  const onLongPress = () => {
    console.log('longpress is triggered');
    moveContainer > 0 ? setMoveContainer(0) : setMoveContainer(115)
  };

  const onClick = () => {
    console.log('click is triggered')
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 1000,
  };

  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  const onPressRemindLater = () => {
    setHideCard({ ...hideCard, startHiding: true})
    animationRef =  setTimeout(() => setHideCard({...hideCard, hide: true}), 700)
  }

  const onPressDismissNow = (cardName) => {
    const blackList = localStorage.getItem('blackList');

    if (!!blackList && blackList.includes(cardName)) return;

    const newBlackList = !!blackList && blackList.length > 0 ? blackList.concat(',' + cardName) : `${cardName}`
    localStorage.setItem('blackList', newBlackList )
  }

  return  (
    <Card multi={isMulti} hide={hideCard}>
      <Container {...longPressEvent} move={moveContainer}>
        <Overlay>
          <CardImage src="assets/asset15.png" />
          <CardHeading>
            <ColorText>
              Big display card
            </ColorText>
            with action
          </CardHeading>
          <CardSubHeading>
            This is a sample text for the subtitle that you can add to contextual cards
          </CardSubHeading>
          <CardActionButton>
            Action
          </CardActionButton>
        </Overlay>
      </Container>
        <ActionSection  move={moveContainer}>
          <Group1 onClick={onPressRemindLater}>
            <IconContainer src="assets/remind.png"/>
            remind later
          </Group1>
          <Group2 onClick={() => onPressDismissNow('card 1')}>
          <IconContainer2 src="assets/dismiss.png"/>
          dismiss now
          </Group2>
        </ActionSection>
    </Card>
  )
}

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
  background-color: #454AA6;
  border-radius: 12px;
  z-index: 200;
  ${({move}) => `
  transform:  translateX(${move}px);
  transition-duration: 1000ms;
  position: absolute;
  `}
  `
const CardImage = styled.img`
  width: 91.73px;
  height: 81.2px;
`

const CardHeading = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;

  margin-top: -15px;
`

const ColorText = styled.p`
  margin-bottom: 3px;
  color: #FBAF03;
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
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #FFFFFF;
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