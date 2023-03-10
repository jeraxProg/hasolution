import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import moment from 'moment';
import useHooks from './hooks'
import JobCardComponent from '../Common/JobCardComponent'
import { useTranslation } from 'react-i18next';
import {
  JODContainer, 
  TitleContainer, 
  Title, 
  Subtitle, 
  JOBBodyContainer,
  CustomJobCatButton,
  CustomH1
} from './components'

const JobsofDay = ({employers, cat_list}) => {
  const { t:translate } = useTranslation();

  const {isSelected,
    setIsSelected} = useHooks();

  let filterEmployers = (employers || []).filter((employer) => employer.cat_of_industry === isSelected)


  return (
    <JODContainer className="mt-5">
         <TitleContainer>
            <Title className="mb-10">{translate('jobsoftheday')}</Title>
        </TitleContainer>
        <JOBBodyContainer>
          <Row className="d-flex justify-content-center">
              {!cat_list ? (
                <CustomH1>No Category List Found!</CustomH1>
              ):
              (cat_list.map((category, i) => {
                return (
                  <CustomJobCatButton key={i} isSelected={category.title === isSelected} onClick={() => setIsSelected(category.title)}>
                    <Image
                        // loader={myLoader}
                        src="/images/home-page/management.svg"
                        alt=""
                        width={18}
                        height={18}
                        quality={100}
                    />
                    {category.title}
                  </CustomJobCatButton>
                )
              }))}
    
          </Row>
          <Row className="mt-5">
            {!employers ? 
              (<CustomH1>EEMMPPTTYY</CustomH1>) :
              (isSelected === '' ? (
                employers.reverse().map((employer, i) => {
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
                })
              ) :
              (filterEmployers.reverse().map((employer, i) => {
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
              }))
              )
          }
          </Row>
        </JOBBodyContainer>
    </JODContainer>
  )
}

export default JobsofDay