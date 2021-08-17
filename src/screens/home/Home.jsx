import React from 'react'
import HC3Generator from '../../components/HC3/HC3Generator'
import Navbar from '../../components/Navbar/Navbar'


const h3 = {
  "id": 4,
  "name": "Add money",
  "design_type": "HC3",
  "card_type": 1,
  "cards": [
    {
      "name": "Add money",
      "title": "Your account looks empty!",
      "formatted_title": {
        "text": "Your account looks empty!",
        "entities": []
      },
      "description": "Add some money to your account to get started.",
      "formatted_description": {
        "text": "Add some money to your account to get started.",
        "entities": []
      },
      "url": "https://facebook.com/",
      "bg_image": {
        "image_type": "ext",
        "image_url": "https://westeros-staging.s3.amazonaws.com/media/images/generic/5e97239d1bd747878828852d4f397361.png",
        "aspect_ratio": 0.9142857
      },
      "bg_color": "#FFB486",
      "cta": [
        {
          "text": "Add",
          "bg_color": "#000000",
          "text_color": "#FFFFFF",
          "url_choice": "add",
          "url": "https://instagram.com/"
        }
      ],
      "is_disabled": false
    }
  ],
  "is_scrollable": false,
  "level": 10
}

export default function Home() {
  return (
    <Navbar>
     <HC3Generator schema={h3}/>
      THis is home
    </Navbar>
  )
}
