import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const CarreersContainer = styled(Container) `
    padding-top: 100px;
`

export const ContainerSection = styled(Container) `
    padding: 40px 20px 60px;
    background: #f2f6fd;
    border-radius: 16px;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        bottom: 1px;
        left: -3px;
        height: 170px;
        width: 218px;
        background: url("/images/careers-page/left-job-head.c1f76229.svg") no-repeat 0 100%;
        background-size: contain;
        display: inline;
        top: auto;
        right: auto;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 1px;
        right: 5px;
        height: 170px;
        width: 213px;
        background: url("/images/careers-page/right-job-head.92312fda.svg") no-repeat 0 100%;
        background-size: contain;
    }
`

export const ContentContainer = styled(Container) `
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
    z-index: 12;
`

export const CustomCol = styled(Col) `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CustomH1 = styled.h1 `
    font-size: 29px !important;
    line-height: 35px;
    font-weight: 800;
`

export const CustomH4 = styled.h4 `
    line-height: 25px;
    color: #66789c;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    max-width: 40rem;
`

export const CustomLabel = styled.label `
    padding-right: 0;
    border: none;
    background: none;
`

export const CustomFormSelect = styled(Form.Select) `
    border: none;
    &:focus {
        box-shadow: unset;
    }
`

export const FormControl = styled(Form.Control) `
    border: none;

    &:focus {
        box-shadow: unset;
    }
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
    background-image: url(/_next/static/media/search-icon.ad1e8376.svg);
    background-repeat: no-repeat;
    background-position: left 19px top 18px;
    color: #fff;
    background-color: ${props => props.theme.common.primary};
    line-height: 26px;
    padding: 10px 25px;
    
    &:hover {
        background-color: #05264e;
        transform: translateY(-2px);
        transition: .2s;
    }
`

export const BlueSpan = styled.span `
    color: ${props => props.theme.common.primary};
    position: relative;

    &::after {
        content: "";
        background-color: ${props => props.theme.common.primary};
        height: 25px;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -6px;
        z-index: -1;
        opacity: .1;
    }
`

export const JobListContainerSection = styled(Container) `
    
`