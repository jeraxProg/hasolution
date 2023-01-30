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

const AboutUsPage = () => {
  const { t:translate } = useTranslation();

  return (
    <AboutUsContainer>
      <AboutUsBannerSection>
        <BannerContainer>
          <Row>
            <Col className="px-md-5">
              <ContainerTitle className="mb-2 mb-md-4">{translate('aboutus')}</ContainerTitle>
              {/* <ContainerSubTitle>Get the latest news, updates and tips</ContainerSubTitle> */}
            </Col>
          </Row>
        </BannerContainer>
      </AboutUsBannerSection>
      <BodyContainer className="mt-5">
        <BodyWrapperInfo>
        <BodyTitle className="mb-3">{translate('titleAbout')}</BodyTitle>
        <BodyDesc className="col-md-12">{translate('aboutHaSOlution')}</BodyDesc>
        </BodyWrapperInfo>
        <br />
        <br />
        <BodyWrapperInfo>
        <BodyTitle className="mb-3">{translate('missionTitle')}</BodyTitle>
        <BodyDesc>{translate('mission')}</BodyDesc>
        </BodyWrapperInfo>
        <br />
        <br />
        <BodyWrapperInfo>
        <BodyTitle className="mb-3">{translate('visionTitle')}</BodyTitle>
        <BodyDesc>{translate('vision')}
        </BodyDesc>
        </BodyWrapperInfo>
        <br />
        <br />
        <BodyWrapperInfo>
        <BodyTitle className="mb-3">{translate('value')}</BodyTitle>
         <CustomH2>{translate('people')}</CustomH2>
        <BodyDesc>{translate('peopleDesc')}
        </BodyDesc>
         <CustomH2>{translate('knowledge')}</CustomH2>
        <BodyDesc>{translate('knowledgeDesc')}
        </BodyDesc>
        </BodyWrapperInfo>
      </BodyContainer>
    </AboutUsContainer>
  )
}

export default AboutUsPage;