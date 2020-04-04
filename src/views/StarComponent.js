import React from 'react';

import ImgStar5 from '../assets/img/star5.png'
import ImgStar4 from '../assets/img/star4.png'
import ImgStar3 from '../assets/img/star3.png'
import ImgStar2 from '../assets/img/star2.png'
import ImgStar1 from '../assets/img/star1.png'
import ImgStar0 from '../assets/img/star0.png'

export default function StarComponent(props) {
    let ImgStar;
    switch (props.star) {
        case '5':
            ImgStar = ImgStar5
            break;
        case '4':
            ImgStar = ImgStar4
            break;
        case '3':
            ImgStar = ImgStar3
            break;
        case '2':
            ImgStar = ImgStar2
            break;
        case '1':
            ImgStar = ImgStar1
            break;
        case '0':
            ImgStar = ImgStar0
            break;
    }
    return (
        <img src={ImgStar} />
    )
}
