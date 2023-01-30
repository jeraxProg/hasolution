import styled from "styled-components";
import {Nav, Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';


export const CustomNav = styled.div`
    margin: 0 2rem 2rem;
    text-decoration: ${(props) => props.selected ? 'underline' : ''};
    text-underline-offset: ${(props) => props.selected ? '8px' : ''};
    color: ${props => props.theme.common.secondary_color};
    font-weight: bold;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        text-underline-offset: 8px;
        color: ${props => props.theme.common.tertiary_color};
    }
    @media(min-width: 992px) {
        margin: 0 2rem 0;
    }
`

export const CustomContainer = styled(Container) `
    position: absolute;
    left: 0;
    right: 0;
    z-index: 20;
    animation: fadeInDown .7s ease-in-out 0s 1 normal none running;
    transition: all .3s ease 0s;
    @media (min-width: 992px) {
        width: 80%;
    }
`

// FOOTER
export const FooterDesc = styled.div `
    margin: 20px 0 !important;
`

export const Title = styled.h6 `
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
`

export const Items = styled.a `
    color: ${props => props.theme.common.tertiary_color};
    font-size: 14px;
    text-decoration: none;
    transition-duration: .2s;
    cursor: pointer;

    &:hover {
        color: unset;
    }
`

export const ItemsContainer = styled.div `
    flex-direction: column;
    gap: 5px;
`

export const FooterBottom = styled(Row) `
    border-top: 1px solid #e0e6f7;
    padding: 30px 0;
    color: #4f5e64;
    font-size: 12px;
`

export const CustomFormSelect = styled(Form.Select) `

    &:focus {
        border-color: #000;
        box-shadow: unset;
    }
`