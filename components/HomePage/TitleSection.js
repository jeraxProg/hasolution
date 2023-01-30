import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BiCategoryAlt, BiSearchAlt } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { VscSymbolKeyword } from 'react-icons/vsc';
import { useHomePageStore } from '../../zustand/store/homepage';
import { useTranslation } from 'react-i18next';
import {
  CustomContainer, 
  ContainerSection,
  ContentContainer,
  CustomCol, 
  CustomH4, 
  CustomFormSelect, 
  CustomLabel,
  CustomButton,
  FormControl,
  CustomImage,
  CustomImageStory,
  CustomH1
} from './components'


const Homepage = ({cat_list, employers}) => {
  const { handleSubmit, details, handleChange, isLoading } = useHomePageStore(state => state);
  const { industry, location, keyword } = details;
  const { t:translate } = useTranslation();

  // const filteredCategory = cat_list.filter((item) => item.isShown === true)

  return (
      <CustomContainer fluid>
          <ContainerSection>
            <ContentContainer>
              <Row>
                <CustomCol lg={6} xs={12}>  
                  <CustomH1 >{translate('welcome')}</CustomH1>
                  <CustomH4>{translate('empowering')}</CustomH4>
                </CustomCol>
                {/* <CustomCol lg={6} className="d-none d-lg-block position-relative">
                  <CustomImage
                    // loader={myLoader}
                    src={"/images/home-page/headway-5QgIuuBxKwM-unsplash.jpg"}
                    alt=""
                    width={400}
                    height={500}
                    quality={100}
                    className="position-absolute"
                  />
                  <CustomImageStory
                    // loader={myLoader}
                    src={"/images/home-page/working-rafiki.svg"}
                    alt=""
                    width={300}
                    height={300}
                    quality={100}
                    className="position-absolute"
                  />
                </CustomCol> */}
              </Row>
              <Row>
                <CustomCol className="col-12 col-lg-6">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Form className="d-flex flex-column flex-lg-row gap-3" onSubmit={(e) => handleSubmit(e, details)}>
                          {/* <Col>
                            <InputGroup className="h-100">
                              <CustomLabel className="input-group-text"><BiCategoryAlt /></CustomLabel>
                              <CustomFormSelect 
                                aria-label="Default select example"
                                value={industry}
                                onChange={(e) => handleChange(e, 'industry')} 
                                placeholder="Industry"
                              >
                                <option value="">Industry</option>
                                {filteredCategory.map((category, i) => {
                                  return (
                                    <option key={i} value={category.title}>{category.title}</option>
                                  )
                                })}
                              </CustomFormSelect>
                            </InputGroup>
                          </Col>
                          <Col>
                            <InputGroup className="h-100">
                              <CustomLabel className="input-group-text"><HiOutlineLocationMarker /></CustomLabel>
                              <CustomFormSelect 
                                aria-label="Default select example"
                                value={location}
                                onChange={(e) => handleChange(e, 'location')} 
                                placeholder="Location"
                              >
                                <option value="">Location</option>
                                {employers.map((location, i) => {
                                  return (
                                    <option key={i} value={location.location}>{location.location}</option>
                                  )
                                })}
                              </CustomFormSelect>
                            </InputGroup>
                          </Col> */}
                          <Col>
                            <InputGroup className="h-100">
                              <CustomLabel className="input-group-text"><VscSymbolKeyword /></CustomLabel>
                                <FormControl
                                  placeholder={translate('searchjobnow')}
                                  aria-describedby="basic-addon1"
                                  value={keyword} 
                                  onChange={(e) => handleChange(e, 'keyword')} 
                                />
                            </InputGroup>
                          </Col>
                          <div>
                            <CustomButton type="submit" disabled={!keyword && true}><BiSearchAlt />{translate('search')}</CustomButton>
                          </div>
                        </Form>
                      </Row>
                    </Card.Body>
                  </Card>
                </CustomCol>
              </Row>
            </ContentContainer>
          </ContainerSection>
      </CustomContainer>
  )
}

export default Homepage