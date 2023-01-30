import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import {
  AboutUsContainer,
  AboutUsBannerSection,
  BannerContainer,
  ContainerTitle,
  ContainerSubTitle,
  BodyContainer,
  BodyTitle,
  BodyDesc,
  AboutUsDesc,
  BodyWrapper,
  CustomP,
  CustomSpan,
  CustomSpanTitle,
  BodyWrapperInfo
} from './components'



const RecruitmentInfoPage = () => {
    const { t:translate } = useTranslation();

    return (
      <AboutUsContainer>
        <AboutUsBannerSection>
          <BannerContainer>
            <Row>
              <Col className="px-md-5">
                <ContainerTitle className="mb-2 mb-md-4">Recruitment Information</ContainerTitle>
              </Col>
            </Row>
          </BannerContainer>
        </AboutUsBannerSection>
        <BodyContainer className="mt-5">
          <br />
          <BodyWrapper>
            <Image  
              src="/images/home-page/process.jpg"
              alt=""
              width={1000}
              height={800}
              quality={100}/>
          </BodyWrapper>
          <br />
          <BodyWrapperInfo>
            <CustomSpanTitle>{translate('forcompaniesTitle')} </CustomSpanTitle>
            <CustomSpan>{translate('companiesSpan')} </CustomSpan>  
            <CustomP> ► {translate('customP1')} </CustomP>
            <CustomP> ► {translate('customP2')} </CustomP>
            <CustomP> ► {translate('customP3')} </CustomP>
            <CustomP> ► {translate('customP4')} </CustomP>
          </BodyWrapperInfo>
          <br />
          <BodyWrapper>
            <Image  
              src="/images/about-us-page/recruitmet_process.jpg"
              alt=""
              width={1000}
              height={800}
              quality={100}/>
          </BodyWrapper>
          <br />
        </BodyContainer>
      </AboutUsContainer>
    )
}

export default RecruitmentInfoPage