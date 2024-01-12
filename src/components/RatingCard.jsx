import { H1, RatingCardWrapper, RatingIconBox } from './ratingCardstyles'
import Star from '../assets/icon-star.svg';
const RatingCard = () => {
  return (
    <RatingCardWrapper>
        <RatingIconBox>
            <img src={Star} alt="star-icon" />
        </RatingIconBox>
        <H1>How did we do?</H1>
    </RatingCardWrapper>
  )
}

export default RatingCard