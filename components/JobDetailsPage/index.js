import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useRouter} from 'next/router'
import Image from 'next/image';
import {BsPatchCheck, BsBriefcase} from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import JobDetailComponent from './JobDetailComponent.js';
import parse from 'html-react-parser';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import {
    JobDetailsContainer, 
    JobDetailColumn, 
    JobTitle, ApplyNowButton, 
    JobsCardBodySubTitleContainer, 
    JobsCardBodySubTitle,
    JobOverview,
    JobDesc,
    ApplyButton,
    JobDetailSecondColumn,
    CompanyTitle,
    CompanyLocation,
    CompanyDetailContainer,
    UnorderListContainer,
    ListsItem,
    CompanyOpenJobs,
    JobDetailColumnContainer,
    JobsCardTagsContainer,
    JobsCardTags
} from './components.js'


const JobDetailsPage = ({employer}) => {
    const router = useRouter();
    const { t:translate } = useTranslation();

  return (
    <JobDetailsContainer>
        <Row>
            <JobDetailColumn className="col-lg-8 col-md-12 col-sm-12 col-12">
                <Row className="gap-4 gap-lg-0">
                    <Col className="col-12 col-lg-8">
                        <JobTitle>{employer.occupation_title}</JobTitle>
                        <JobsCardBodySubTitleContainer className="d-flex gap-2 mt-2">
                            <JobsCardBodySubTitle className="d-flex align-items-center gap-1"><BsBriefcase />{employer.job_type}</JobsCardBodySubTitle>
                            <JobsCardBodySubTitle className="d-flex align-items-center gap-1"><BiTimeFive />{moment(employer.createdAt).fromNow()}</JobsCardBodySubTitle>
                        </JobsCardBodySubTitleContainer>
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <ApplyNowButton href={employer.google_form_link} target="_blank"><BsPatchCheck />{translate('applynow')}!</ApplyNowButton>
                    </Col>
                </Row>
                <hr className="mt-5" />
                <div style={{padding: '20px 0'}}>
                    <Image
                        // loader={myLoader}
                        src="/images/jobs-detail-page/img.png"
                        alt=""
                        width={574}
                        height={231}
                        quality={100}
                        style={{width: '100%', borderRadius: '1rem'}}
                        className="mt-3 mb-4 rounded-full"
                    />
                </div>
                <JobOverview>
                    <Row>
                        <JobDetailComponent 
                            img={`industry`} 
                            textDesc={`Industry`} 
                            workDesc={employer.cat_of_industry}
                        />
                        <JobDetailComponent 
                            img={`language-3`} 
                            textDesc={`Japanese Languge Level`} 
                            workDesc={employer.experienced_level}
                        />
                        <JobDetailComponent 
                            img={`salary`} 
                            textDesc={`Salary`} 
                            workDesc={employer.salary}
                        />
                        <JobDetailComponent 
                            img={`experience`} 
                            textDesc={`Experience`} 
                            workDesc={employer.qualifications_work_exp}
                        />
                        <JobDetailComponent 
                            img={`job-type`} 
                            textDesc={`Job type`} 
                            workDesc={employer.job_type}
                        />
                        {/* <JobDetailComponent 
                            img={`deadline`} 
                            textDesc={`Deadline`} 
                            workDesc={`10/08/2022`}
                        /> */}
                        <JobDetailComponent 
                            img={`updated`} 
                            textDesc={`Updated`} 
                            workDesc={moment(employer.updatedAt).format('l')}
                        />
                        <JobDetailComponent 
                            img={`location`} 
                            textDesc={`Location`} 
                            workDesc={employer.location}
                        />
                    </Row>
                </JobOverview>
                <JobDesc>
                    <p>{employer.salary}</p>
                    {parse(`${employer.job_desc}`)}
                </JobDesc>
                <hr className="mt-5" />
                <Row className="pt-4 pb-4">
                    <Col>
                        <ApplyButton href={employer.google_form_link} target="_blank">{translate('applynow')}</ApplyButton>
                    </Col>
                </Row>
            </JobDetailColumn>
            <JobDetailColumnContainer className="col-lg-4 col-md-12 col-sm-12 col-12 pl-5 pl-lg-3 mt-5 mt-lg-0 pd-0">
                <JobDetailSecondColumn>
                    <Row>
                        <Col className="d-flex gap-4">
                            <Image
                                // loader={myLoader}
                                src="/images/jobs-detail-page/avatar.png"
                                alt=""
                                width={85}
                                height={85}
                                quality={100}
                            />
                            <CompanyDetailContainer>
                                <CompanyTitle>{employer.company_name}</CompanyTitle>
                                <CompanyLocation className="gap-1"><HiOutlineLocationMarker />{employer.location}</CompanyLocation>
                                <CompanyOpenJobs>{employer.openJobs}{" "}Open {employer.openJobs > 1 ? "Jobs" : "Job"}</CompanyOpenJobs>
                            </CompanyDetailContainer>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <UnorderListContainer>
                            <ListsItem>{employer.location}</ListsItem>
                            <ListsItem>Phone: {employer.contact_no}</ListsItem>
                            <ListsItem>Email: {employer.company_email}</ListsItem>
                        </UnorderListContainer>
                    </Row>
                </JobDetailSecondColumn>
                <JobDetailSecondColumn>
                    <Row><CompanyTitle>Tags</CompanyTitle></Row>
                    <hr className="mt-4"/>
                    <JobsCardTagsContainer className="d-flex gap-2 mt-4 mb-4 flex-wrap">
                        {employer.job_tags.map((tag, i) => {
                            return (<JobsCardTags key={i}>{tag}</JobsCardTags>)
                        })}
                    </JobsCardTagsContainer>
                </JobDetailSecondColumn>
            </JobDetailColumnContainer>
        </Row>
    </JobDetailsContainer>
  )
}

export default JobDetailsPage