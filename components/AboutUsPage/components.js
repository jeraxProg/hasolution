import styled from 'styled-components';
import Container from 'react-bootstrap/Container';



export const AboutUsContainer = styled(Container) `
    padding-top: 100px;
`

export const AboutUsBannerSection = styled.div `
    background: url("/images/about-us-page/img-about.0287ca62.png") no-repeat top;
    background-size: cover;
    position: relative;
    padding: 50px 0;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100%;
        width: 100%;
        background: url("/images/about-us-page/bg-black-trans.c550ad77.png") repeat-x 0 100%;
    }
`

export const BannerContainer = styled(Container) `
    z-index: 2;
    position: relative;
`

export const ContainerTitle = styled.h2 `
    color: #fff;
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    @media (min-width: 485px) {
        font-size: 25px;
    }
    @media (min-width: 768px) {
        font-size: 36px;
    }
`

export const ContainerSubTitle = styled.h4 `
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #fff;
`

export const BodyContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BodyWrapper = styled.div `
width: 70%
`

export const BodyTitle = styled.h2 `
    font-size: 20px;
    font-weight: 700;
    @media (min-width: 485px) {
        font-size: 25px;
    }
    @media (min-width: 768px) {
        font-size: 36px;
    }
`

export const BodyDesc = styled.p `
    font-weight: 100;
    font-size: 25px!important;
    line-height: 30px!important;
    text-align: justify;
    text-indent: 50px;
`

export const AboutUsDesc = styled.div ``