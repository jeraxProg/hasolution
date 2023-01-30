import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import moment from 'moment';
import {
    FooterDesc, 
    Title,
    Items,
    ItemsContainer, 
    FooterBottom,
    CustomFormSelect
} from './components'
import {useRouter} from 'next/router';
import { useTranslation } from 'react-i18next';
import { usei18nStore } from '../../zustand/store/i18n-translate';



const Footer = () => {
    const {t: translate} = useTranslation();
    const { onChangeTranslate, language } = usei18nStore(state => state);
    const router = useRouter()



  return (
    <Container className="mt-5">
        <Row>
            <Col className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4">
                <Col>{translate('logo')}</Col>
                <FooterDesc>{translate('footerDesc')}</FooterDesc>
            </Col>
            <Col className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <Title className="mb-4">{translate('resources')}</Title>
                <ItemsContainer className="d-flex">
                    <Items onClick={() => router.push('/careers')}>{translate('careers')}</Items>
                    <Items onClick={() => router.push('/recruitment-info')}>{translate('rectruitmentnav')}</Items>
                    <Items onClick={() => router.push('/about-us')}>{translate('aboutus')}</Items>
                    <Items onClick={() => router.push('/contact-us')}>{translate('contactus')}</Items>
                </ItemsContainer>
            </Col>
            {/* <Col className="col-12 col-sm-6 col-md-6 col-lg-2 mb-4">
                <Title className="mb-4">Community</Title>
                <ItemsContainer className="d-flex">
                    <Items>Feature</Items>
                    <Items>Pricing</Items>
                    <Items>Credit</Items>
                    <Items>FAQ</Items>
                </ItemsContainer>
            </Col> */}
            {/* <Col className="col-12 col-sm-6 col-md-6 col-lg-2 mb-4">
                <Title className="mb-4">Quick Links</Title>
                <ItemsContainer className="d-flex">
                    <Items>iOS</Items>
                    <Items>Android</Items>
                    <Items>Microsoft</Items>
                    <Items>Desktop</Items>
                </ItemsContainer>
            </Col> */}
            <Col className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <ItemsContainer className="d-flex">
                    {/* <Items>Privacy</Items>
                    <Items>Help</Items>
                    <Items>Terms</Items> */}
                    <Items>
                        Language:
                        <CustomFormSelect size="sm" name="language" onChange={(e) => onChangeTranslate(e)} value={language}>
                            <option value="ja">Japanese</option>
                            <option value="en">English</option>
                        </CustomFormSelect>
                    </Items>
                </ItemsContainer>
            </Col>
        </Row>
        <FooterBottom className="mt-5 gap-2 gap-md-0">
            <Col className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">Copyright {moment().year()}. (HA SOLUTION) all right reserved</Col>
            <Col className="d-flex col-12 col-md-6">
                {/* <Col className="d-flex justify-content-center">Privacy Policy</Col> */}
                {/* <Col className="d-flex justify-content-center">Terms & Conditions</Col> */}
                {/* <Col className="d-flex justify-content-center">Security</Col> */}
            </Col>
        </FooterBottom>
    </Container>
  )
}

export default Footer