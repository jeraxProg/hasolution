import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Import Swiper React components
import { SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import {BsPatchCheck} from 'react-icons/bs';
import {useRouter} from 'next/router';
import CarouselItemComponent from './CarouselItemComponent';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from 'react-i18next';
import {
    BrowseContainer, 
    TitleContainer,
    WeAreHiring,
    BannerTitleWeAre,
    BannerTitleHiring,
    BannerTitleContainer,
    BannerTitleDesc,
    BrowseCategoryApplyButton,
    Title,
    Subtitle,
    CarouselRow
} from './components';


const BrowseByCategory = ({cat_list, cat_length}) => {
    const router = useRouter();
    const { t:translate } = useTranslation();
    let filteredCategory = cat_list


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

  return (
    <BrowseContainer className="mt-5">
        <TitleContainer>
            <Title className="mb-10">{translate('browsebycategory')}</Title>
            {/* <Subtitle>Aliquip ullamco duis incididunt ea nulla consectetur cillum eu eiusmod dolore cupidatat nulla do in.</Subtitle> */}
        </TitleContainer>
        <CarouselRow className="mt-5 mb-5">
            <Carousel responsive={responsive} ssr={true} infinite={true}>
                {cat_list && (
                    filteredCategory.map((item, i) => {
                        return (<CarouselItemComponent key={i} category={item} cat_length={cat_length} />)
                    })
                    )
                }
            </Carousel>
        </CarouselRow>
        <Row>
            <Container className="d-flex justify-content-center">
                <WeAreHiring>
                    <Row>
                        <Col lg={2} xs={12} className="d-flex align-items-center justify-content-center mb-3 mb-lg-0 d-none d-lg-block">
                            <Image
                                // loader={myLoader}
                                src="/images/home-page/Hiring-rafiki.svg"
                                alt=""
                                width={200}
                                height={200}
                                quality={100}
                                style={{width: '100%'}}
                            />
                        </Col>
                        <Col lg={3} xs={12} className="d-flex align-items-center justify-content-center mb-3 mb-lg-5">
                            <BannerTitleContainer>
                                <BannerTitleWeAre>{translate('weare')}</BannerTitleWeAre>
                                <BannerTitleHiring>{translate('hiring')}</BannerTitleHiring>
                            </BannerTitleContainer>
                        </Col>
                        <Col lg={2} xs={12} className="d-flex align-items-center justify-content-center mb-3 mb-lg-0">
                            {/* <BannerTitleDesc className="text-center">Lorem in laborum officia officia sint ex id laborum.</BannerTitleDesc> */}
                        </Col>
                        <Col lg={3} xs={12} className="d-flex align-items-center justify-content-center mb-3 mb-lg-0">
                            <BrowseCategoryApplyButton onClick={() => router.push("/careers")}><BsPatchCheck />{translate('applynow')}</BrowseCategoryApplyButton>
                        </Col>
                        <Col lg={2} xs={12} className="d-flex align-items-center justify-content-center mb-3 mb-lg-0 d-none d-lg-block">
                            <Image
                                // loader={myLoader}
                                src="/images/home-page/Job_hunt-rafiki.svg"
                                alt=""
                                width={200}
                                height={200}
                                quality={100}
                                style={{width: '100%'}}
                            />
                        </Col>
                    </Row>
                </WeAreHiring>
            </Container>
        </Row>
    </BrowseContainer>
  )
}

export default BrowseByCategory;