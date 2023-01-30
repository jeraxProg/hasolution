import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {useRouter} from 'next/router'
import { useTranslation, Trans } from 'react-i18next';
import {
    AdsContainer, 
    BoxImageJob,
    BoxImageOne,
    BoxImageTwo,
    FigureImage,
    ContentJobInner,
    MillionJobs,
    FindJobs,
    SpanRight,
    SearchDesc,
    SearchJobsContainer
} from './components'

const Ads = () => {
    const { t:translate } = useTranslation();

    const router = useRouter();


  return (
    <AdsContainer>
        <Container>
            <Row>
                <Col className="col-12 col-lg-6">
                    <BoxImageJob>
                        {/* <BoxImageOne
                            // loader={myLoader}
                            src="/images/home-page/img-chart.png"
                            alt=""
                            width={240}
                            height={200}
                            quality={100}
                            className="d-none d-lg-block"
                        />
                        <BoxImageTwo
                            // loader={myLoader}
                            src="/images/home-page/controlcard.png"
                            alt=""
                            width={240}
                            height={200}
                            quality={100}
                            className="d-none d-lg-block"
                        /> */}
                        <FigureImage>
                            <Image
                                // loader={myLoader}
                                src="/images/home-page/img1.png"
                                alt=""
                                width={500}
                                height={400}
                                quality={100}
                            />
                        </FigureImage>
                    </BoxImageJob>
                </Col>
                <Col className="col-12 col-lg-6">
                    <ContentJobInner>
                        {/* <MillionJobs className="text-muted">{translate('millionsofjobs')}.</MillionJobs> */}
                        <FindJobs className="mb-5">
                            <Trans components={{ span: <SpanRight />}}>
                                findtherightone
                            </Trans>
                        </FindJobs>
                        <SearchDesc>{translate('adsDesc')}</SearchDesc>
                        <SearchJobsContainer className="mt-5">
                            <Button onClick={() => router.push('/careers')}>{translate('searchjobs')}</Button>
                        </SearchJobsContainer>
                    </ContentJobInner>
                </Col>
            </Row>
        </Container>
    </AdsContainer>
  )
}

export default Ads