import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';


export const JobDetailsContainer = styled(Container) `
    padding-top: 150px;
`

export const JobDetailColumn = styled(Col) `
    padding: 20px;
    border: 1px solid #e0e6f7;
    border-radius: 8px;
`

export const JobTitle = styled.h3 `
    font-size: 28px;
    line-height: 35px;
    font-family: Plus Jakarta Sans,sans-serif;
    font-weight: 700;
`

export const ApplyNowButton = styled(Link) `
    background-color: ${props => props.theme.common.primary};
    color: #fff;
    padding: 18px 25px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    &:hover {
        color: #fff;
        background-color: ${props => props.theme.common.secondary_color};
        transform: translateY(-2px);
        transition: .2s;
    }

    @media (min-width: 992px) {
        margin-left: auto;
    }
`

export const JobsCardBodySubTitleContainer = styled.div `
    font-size: 12px;
    color: ${props => props.theme.common.side_color};
`

export const JobsCardBodySubTitle = styled.div ``

export const JobOverview = styled.div `
    border: thin solid #e0e6f7;
    border-radius: 8px;
    padding: 20px 30px 30px;
    margin-bottom: 50px;
`

export const TextDesc = styled.span `
    font-size: 16px;
    color: #66789c;
    line-height: 24px;
    font-weight: 400;
    display: inline-block;
    width: 50%;
    min-width: 120px;
    max-width: 120px;
    margin-left: 10px;
`

export const WorkDesc = styled.span `
    width: 100%;
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
`

export const JobDesc = styled(Container) `



`

export const ApplyButton = styled(Button) `
    color: #fff;
    background-color: ${props => props.theme.common.primary};
    line-height: 26px;
    padding: 10px 25px;

    &:hover {
        background-color: ${props => props.theme.common.secondary_color};
        transform: translateY(-2px);
        transition: .2s;
    }
`

export const JobDetailSecondColumn = styled(Col)`
    border: 1px solid #e0e6f7;
    padding: 25px;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 40px;
`

export const CompanyTitle = styled.span `
    font-size: 18px;
    font-family: Plus Jakarta Sans,sans-serif;
    line-height: 18px;
    font-weight: 700;
    display: flex;
    padding-top: 5px;
    align-items: center;
`

export const CompanyLocation = styled.span `
    font-size: 12px;
    color: ${props => props.theme.common.side_color};
    display: inline-block;
    line-height: 24px;
    display: flex;
    align-items: center;
`

export const CompanyDetailContainer = styled.div `

`

export const UnorderListContainer = styled.ul ``

export const ListsItem = styled.li `
    margin-left: 25px;
    padding-bottom: 5px !important;
    color: ${props => props.theme.common.tertiary_color};
    font-size: 14px;
    line-height: 22px;
`

export const CompanyOpenJobs = styled.span `
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.common.primary};
    font-weight: 400;
    display: block;
`

export const JobDetailColumnContainer = styled(Container) `
    @media (max-width: 992px) {
        padding: 0;
    }
`

export const JobsCardTagsContainer = styled.div ``

export const JobsCardTags = styled.div `
    background-color: #eff3fc;
    font-size: 12px;
    padding: 7px 10px;
    border-radius: 5px;
    color: ${props => props.theme.common.tertiary_color};
`