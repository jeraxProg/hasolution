import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {
    CustomFcIdea, 
    CustomSwiperSlide, 
    CardTitle,
    CardText,
    CarouselItem,
    CarouselItemContent
} from './components'
import {useRouter} from 'next/router'

const CustomSwiperSliderComponent = ({category, cat_length}) => {
    const router = useRouter();


  return (
    <CarouselItem onClick={() => router.push(`/careers?keyword=${category.title}`)}>
        <CarouselItemContent className="d-flex">
            <CustomFcIdea />
            <Col>
                <CardTitle>{category.title}</CardTitle>
                <CardText>
                    {cat_length[category.title] === undefined ? '0' : cat_length[category.title]}{" "}{cat_length[category.title] > 1 ? "Jobs": "Job"}{" "}Available
                </CardText>
            </Col>
        </CarouselItemContent>
    </CarouselItem>
  )
}

export default CustomSwiperSliderComponent