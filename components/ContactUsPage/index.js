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
  BodyWrapper
} from './components'

import { CustomH2 } from '../Common/components';
import { BodyWrapperInfo } from '../RecruitmentInfoPage/components';

const ContactUsPage = () => {
  const { t:translate } = useTranslation();

  return (
    <AboutUsContainer>
      <AboutUsBannerSection>
        <BannerContainer>
          <Row>
            <Col className="px-md-5">
              <ContainerTitle className="mb-2 mb-md-4">{translate('contactus')}</ContainerTitle>
              {/* <ContainerSubTitle>Get the latest news, updates and tips</ContainerSubTitle> */}
            </Col>
          </Row>
        </BannerContainer>
      </AboutUsBannerSection>
      <BodyContainer className="mt-5">
      <BodyWrapper>
            <Image  
              src="/images/about-us-page/contactus.png"
              alt=""
              width={1000}
              height={800}
              quality={100}/>
          </BodyWrapper>
          <br/>
          <br/>
     </BodyContainer>
    </AboutUsContainer>
  )
}

export default ContactUsPage;