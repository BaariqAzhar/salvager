import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImgStar5 from '../assets/img/star5.png'
import ImgStar4 from '../assets/img/star4.png'
import ImgStar3 from '../assets/img/star3.png'
import ImgStar2 from '../assets/img/star2.png'
import ImgStar1 from '../assets/img/star1.png'
import ImgStar0 from '../assets/img/star0.png'

{/* <StarComponent star={'3'} size={'1em'} /> */}

export default function StarComponent(props) {
    const classes = useStyles(props);
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
        case 5:
            ImgStar = ImgStar5
            break;
        case 4:
            ImgStar = ImgStar4
            break;
        case 3:
            ImgStar = ImgStar3
            break;
        case 2:
            ImgStar = ImgStar2
            break;
        case 1:
            ImgStar = ImgStar1
            break;
        case 0:
            ImgStar = ImgStar0
            break;
        default:
            ImgStar = ImgStar5
            break;
    }
    return (
        <img src={ImgStar} className={classes.star} />
    )
}

const useStyles = makeStyles(theme => ({
    star: props => ({
        height: props.size,
        // width: props.size,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    })
}));
