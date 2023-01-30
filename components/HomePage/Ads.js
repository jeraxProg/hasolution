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
    FigureImage,
    ContentJobInner,
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
                <Col className="col-12 col-lg-12">
                    <ContentJobInner className='d-flex'>
                        <FindJobs className="mb-5">
                            <Trans components={{ span: <SpanRight />}}>
                                findtherightone
                            </Trans>
                              
                            <SearchJobsContainer className="mt-5">
                            <Button onClick={() => router.push('/careers')}>{translate('searchjobs')}</Button>
                        </SearchJobsContainer>
                        </FindJobs>
                      
                    </ContentJobInner>
                </Col>
            </Row>
        </Container>
    </AdsContainer>
  )
}

export default Ads