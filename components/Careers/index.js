import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BiCategoryAlt, BiSearchAlt } from 'react-icons/bi';
import { BsCardList } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { VscSymbolKeyword } from 'react-icons/vsc';
import JobCardComponent from '../Common/JobCardComponent';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import { useCareersPageStore } from '../../zustand/store/careerspage';
import {
    CarreersContainer,
    ContainerSection,
    ContentContainer,
    CustomCol,
    CustomH4,
    CustomLabel,
    CustomFormSelect,
    FormControl,
    CustomButton,
    CustomH1,
    BlueSpan,
    JobListContainerSection
} from './components'
import { searchEmployers } from '../../utils/client/employers';
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import useHooks from './hooks';
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import SpinnerComponent from '../Common/SpinnerComponent'
import NoResultComponent from '../Common/NoResults'
import { useTranslation } from 'react-i18next';

const Index = ({employers, numOfEmployers}) => {
  const {employersItem, searchedEmployers } = useCareersPageStore(state => state);
  const {
    items,
    loading, 
    details, 
    keyword,
    pageCount, 
    handlePageClick,
    handleSubmit,
    handleChange,
    handleGetAll
  } = useHooks(employers, numOfEmployers);

  const { t:translate } = useTranslation();


  return (
    <CarreersContainer>
        <ContainerSection>
          <ContentContainer>
            <Row>
              <CustomCol xs={12} className="text-center">
                <CustomH1 ><BlueSpan>{numOfEmployers} {translate('totalJobs')}</BlueSpan>{translate('availablenow')}</CustomH1>
                {/* <CustomH4 className="m-auto"></CustomH4> */}
              </CustomCol>
            </Row>
            <Row className="d-flex justify-content-center">
              <CustomCol className="col-lg-10">
                <Card>
                  <Card.Body>
                    <Row>
                      <Form className="d-flex flex-column flex-lg-row gap-3" onSubmit={(e) => handleSubmit(e, details)}>
                        {/* <Col>
                          <InputGroup className="h-100">
                            <CustomLabel className="input-group-text"><BiCategoryAlt /></CustomLabel>
                            <CustomFormSelect 
                                aria-label="Default select example"
                                //   value={industry}
                                //   onChange={(e) => handleChange(e, 'industry')} 
                                placeholder="Industry"
                            >
                              <option value="">Industry</option>
                              <option value="Info Tech">Info Tech</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </CustomFormSelect>
                          </InputGroup>
                        </Col>
                        <Col>
                          <InputGroup className="h-100">
                            <CustomLabel className="input-group-text"><HiOutlineLocationMarker /></CustomLabel>
                            <CustomFormSelect 
                                aria-label="Default select example"
                                //   value={location}
                                //   onChange={(e) => handleChange(e, 'location')} 
                                placeholder="Location"
                            >
                              <option value="">Location</option>
                              <option value="Japan">Japan</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </CustomFormSelect>
                          </InputGroup>
                        </Col> */}
                        <Col>
                          <InputGroup className="h-100">
                            <CustomLabel className="input-group-text"><VscSymbolKeyword /></CustomLabel>
                              <FormControl
                                placeholder="Keyword"
                                aria-describedby="basic-addon1"
                                value={keyword} 
                                onChange={(e) => handleChange(e, 'keyword')} 
                              />
                          </InputGroup>
                        </Col>
                        <div>
                          <CustomButton type="submit" disabled={!keyword && true}>
                            {loading.search ? <SpinnerComponent spinnerColor='#fff' spinnerSize='20px' /> : 
                              <><BiSearchAlt />{translate('search')}</>
                            }
                          </CustomButton>
                        </div>
                        {numOfEmployers !== items.length && 
                          <div>
                            <CustomButton onClick={() => handleGetAll()}>
                              {loading.all ? <SpinnerComponent spinnerColor='#fff' spinnerSize='20px' /> : 
                              <><BsCardList />All</>
                              }
                            </CustomButton>
                          </div>
                        }
                      </Form>
                    </Row>
                  </Card.Body>
                </Card>
              </CustomCol>
            </Row>
          </ContentContainer>
        </ContainerSection>
        <JobListContainerSection className="mt-5 mb-5">
        {items.length !== 0 ?
          (<Row>
              {items.reverse().map((employer, i) => {
              return (
                <Col  key={i} className="col-12 col-md-6 col-lg-4">
                  <JobCardComponent 
                    keyId={employer._id}
                    imgSrc="/images/home-page/brand-1.png" 
                    cardTitle={employer.company_name} 
                    location={employer.location}
                    jobTitle={employer.occupation_title}
                    typeOfJob={employer.job_type}
                    timePosted={moment(employer.createdAt).fromNow()}
                    jobDesc={employer.job_desc.replace(/(<([^>]+)>)/ig, '')}
                    jobTags={employer.job_tags}
                    jobSalary={`${employer.salary}`}
                    category={employer.cat_of_industry}
                  />
                </Col>
              )
            })}
              <ReactPaginate 
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
              />
          </Row>) :
          (
            <><NoResultComponent/></>
          )}
        </JobListContainerSection>
    </CarreersContainer>
  )
}

export default Index