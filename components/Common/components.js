import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FcIdea } from 'react-icons/fc';
import { SwiperSlide } from "swiper/react";
import Card from 'react-bootstrap/Card';
import { Swiper } from "swiper/react";
import Image from 'next/image';
import Row from 'react-bootstrap/Row';


// COMMON
export const Title = styled.h1 `
    font-size: 36px;
    line-height: 45px;
    font-weight: bold;
`
export const Subtitle = styled.h3 `
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
`

// TITLE SECTION
export const CustomContainer = styled(Container) `
    background-image: url('/images/jobs-detail-page/background.jpg');
    background-size: 100% auto;
    background-color: #f6f6f6;
    background-repeat: no-repeat;
    position: relative;
    background-position: 100% 0%;
    background-attachment: fixed;
`

export const ContainerSection = styled(Container) `
    padding-top: 200px;
    padding-bottom: 100px;
    @media (min-width: 992px) {
        width: 80%;
    }
`

export const CustomCol = styled(Col) `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CustomH4 = styled.h4 `
    line-height: 25px;
`

export const ContentContainer = styled(Container) `
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const CustomFormSelect = styled(Form.Select) `
    border: none;
    &:focus {
        box-shadow: unset;
    }
`

export const CustomLabel = styled.label `
    padding-right: 0;
    border: none;
    background: none;
`

export const CustomButton = styled(Button) `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    min-width: 122px;
    padding-left: 34px;
    padding-right: 15px;
    color: #fff;
    background-color: ${props => props.theme.common.primary};
    line-height: 26px;
    padding: 10px 25px;
`

export const FormControl = styled(Form.Control) `
    border: none;

    &:focus {
        box-shadow: unset;
    }
`



// BROWSE BY CATEGORY
export const BrowseContainer = styled(Container) ``

export const TitleContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const CustomFcIdea = styled(FcIdea)`
    width: 3rem;
    height: 3rem;
    padding-right: 10px;
`

export const CustomSwiperSlide = styled(SwiperSlide) `
    border: 1px solid rgba(6,18,36,.1);
    padding: 22px 18px;
    display: flex;
    width: 100%;
    text-align: left;
    border-radius: 12px;
    margin-bottom: 15px;
    background-color: #fff;
    flex-wrap: wrap;
    cursor: pointer;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
`

export const CustomCard = styled(Card) `
    width: 100%;
    margin: 0 1rem;
`

export const CardBody = styled(Card.Body) `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`

export const CardTitle = styled(Card.Text) `
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 3px;
    font-weight: 700;
`

export const CardText = styled.div `
    font-size: 12px;
    font-weight: 500;
`

export const CustomSwiper = styled(Swiper) `

    & > .swiper-button-prev {
        left: 0px;
    }
    & > .swiper-button-next {
        right: 0px;
    }
`

export const WeAreHiring = styled.div `
    max-width: 85%;
    width: 100%;
    border: 1px solid #e0e6f7;
    padding: 15px;
    box-shadow: 0 10px 20px -5px rgb(10 42 105 / 6%);
`

export const BannerTitleWeAre = styled.span `
    font-size: 16px;
    line-height: 20px;
    color: #a0abb8;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: block;
`
export const BannerTitleHiring = styled.span `
    font-size: 49px;
    line-height: 51px;
    color: ${props => props.theme.common.secondary_color};
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
`

export const BannerTitleContainer = styled.div ``

export const BannerTitleDesc = styled.div`
    font-size: 18px;
    line-height: 23px;
    color: #66789c;
`

export const BrowseCategoryApplyButton = styled(Button) `
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const CarouselItem = styled.div `
    border: 1px solid rgba(6,18,36,.1);
    padding: 22px 18px;
    display: flex;
    width: 100%;
    text-align: left;
    border-radius: 12px;
    margin-bottom: 15px;
    background-color: #fff;
    flex-wrap: wrap;
    cursor: pointer;

    &: hover {
        transform: translateY(-3px);
        transition: all .25s cubic-bezier(.02,.01,.47,1);
        border: 1px solid #b4c0e0;
        box-shadow: 0 10px 20px -5px rgb(10 42 105 / 6%);
    }
`

export const CarouselRow = styled(Row) `
    & > .react-multi-carousel-list {
        padding-top: 5px;
    }

    & > .react-multi-carousel-list > .react-multi-carousel-track {
        gap: 1rem;
    }
`

export const CarouselItemContent = styled.div `

`


// JOBS OF THE DAY
export const JODContainer = styled(Container) ``

export const JOBBodyContainer = styled(Container) `
    margin-top: 70px;
`

export const CustomJobCatButton = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    inline-size: 190px;
    gap: 10px;
    box-shadow: 0 2px 4px -5px #0a2a69;
    align-items: center;
    padding: 13px 17px;
    width: auto;
    background: #fff;
    border: 1px solid #e0e6f7;
    border-color: ${props => props.isSelected ? props.theme.common.primary : '#e0e6f7'};
    border-radius: 8px;
    font-family: ${props => props.theme.common.primary_font};
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    margin: 0 5px 10px;
    cursor: pointer;
    color: ${props => props.isSelected ? props.theme.common.primary : '#000'};

    &:hover, &:focus-visible {
        color: ${props => props.theme.common.primary};
        border-color: ${props => props.theme.common.primary};
        box-shadow: 0 2px 4px -5px #0a2a69;
        background-color: unset;
    }
    &:active {
        color: ${props => props.theme.common.primary};
        border-color: ${props => props.theme.common.primary};
        box-shadow: 0 2px 4px -5px #0a2a69;
        background-color: unset;
    }
`

export const JobsCard = styled.div `
    border-radius: 8px;
    border: 1px solid #e0e6f7;
    overflow: hidden;
    margin-bottom: 24px;
    position: relative;
    background: #f8faff;
    cursor: pointer;

    &:hover {
        border-color: #b4c0e0;
        background-color: #fff;
        transform: translateY(-3px);
        transition: all .25s cubic-bezier(.02,.01,.47,1);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        .components__JobsCardBody-sc-22cbuj-34 {
            .price-per-hour {
                .apply-btn-container {
                    .apply-btn {
                        background: ${props => props.theme.common.primary};
                        color: #fff;
                    }
                }
            }
        }
    }
`

export const JobsCardHeader = styled.div `
    display: flex;
    justify-content: start;
    padding: 30px 20px 15px;
    position: relative;
    gap: 15px;
`

export const JobsCardTitleContainer = styled.div ``

export const JobsCardTitle = styled.div `
    color: ${props => props.theme.common.secondary_color};
    font-weight: bold;
`

export const JobsCardSubTitle = styled.div `
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${props => props.theme.common.side_color};
`

export const JobsCardBody = styled.div `
    display: inline-block;
    width: 100%;
    padding: 5px 10px 20px;
`

export const JobsCardBodyTitle = styled.h6 `
    font-family: ${props => props.theme.common.primary_font};
    font-size: 14px;
    font-weight: bold;
`

export const JobsCardBodySubTitleContainer = styled.div `
    font-size: 12px;
    color: ${props => props.theme.common.side_color};
`

export const JobsCardBodySubTitle = styled.div ``

export const JobsCardTagsContainer = styled.div ``

export const JobsCardTags = styled.div `
    background-color: #eff3fc;
    font-size: 12px;
    padding: 7px 10px;
    border-radius: 5px;
    color: ${props => props.theme.common.tertiary_color};
`

export const JobsCardDescription = styled.div `
    color: ${props => props.theme.common.tertiary_color};
    font-size: 14px;
    height: 110px;
    overflow: hidden;
`

export const JobsCardPrice = styled.span `
    color: ${props => props.theme.common.primary};
    font-family: ${props => props.theme.common.primary_font};
    font-weight: 700;
    font-size: 17px;
`

export const JobsCardHour = styled.span `
font-size: 17px;
`

export const JobsCardButton = styled(Button) `
    background-color: #e0e6f7;
    color: ${props => props.theme.common.primary};
    padding: 12px 10px;
    min-width: 95px;
    border-radius: 4px;
    font-size: 12px;
    text-transform: capitalize;
    border: unset;

    &:hover {
        background-color: #254181;
    }
`



// ADS SECTION
export const AdsContainer = styled.div `
    margin: 100px 0; 
`

export const BoxImageJob = styled.div `
    position: relative;
`

export const BoxImageOne = styled(Image) `
    position: absolute;
    top: -40px;
    left: -50px;
`
export const BoxImageTwo = styled(Image) `
    position: absolute;
    bottom: -120px;
    right: -50px;
`

export const FigureImage = styled.div `
    display: flex;
    justify-content: center;
    position: relative;

    & > img {
        border-radius: 32px;
        max-width: 80%;
    }
`

export const ContentJobInner = styled.div `
    padding: 40px 40px 40px 20px;
    @media (min-width: 992px) {
        padding-top: 10px;
    }
`

export const MillionJobs = styled.span `
    font-size: 32px;
    line-height: 40px;
    font-weight: 800;
`

export const FindJobs = styled.h2 `
    font-size: 52px;
    line-height: 66px;
    font-weight: 800;
    color: ${props => props.theme.common.secondary_color};
`

export const SpanRight = styled.span `
    color: ${props => props.theme.common.primary};
`

export const SearchDesc = styled.span `
    color: ${props => props.theme.common.secondary_color};
`

export const SearchJobsContainer = styled.div `

    & > button {
        color: #fff;
        background-color: ${props => props.theme.common.primary};
        line-height: 26px;
        padding: 10px 25px;
        border-radius: 8px;
        font-size: 14px;
        transition: .2s;

        &:hover {
            background-color: ${props => props.theme.common.secondary_color};
            transform: translateY(-2px);
            transition: .2s;
        }
    }
`


// NO RESULTS
export const CustomImage = styled(Image) ``

export const CustomDesc = styled.h1 `
    font-family: Plus Jakarta Sans,sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
`


//About us

export const CustomH2 = styled.h2 `
    font-size: 30px;
    margin: 30px 0;
    font-style: italic;


`