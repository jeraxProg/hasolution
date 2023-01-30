import Image from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsBriefcase } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router'
import { BiCategoryAlt } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import {
    JobsCard,
    JobsCardHeader,
    JobsCardTitleContainer,
    JobsCardTitle,
    JobsCardSubTitle,
    JobsCardBody,
    JobsCardBodyTitle,
    JobsCardBodySubTitleContainer,
    JobsCardBodySubTitle,
    JobsCardDescription,
    JobsCardTagsContainer,
    JobsCardTags,
    JobsCardPrice,
    JobsCardHour,
    JobsCardButton
} from './components'



const JobCardComponent = (props) => {
    const { t:translate } = useTranslation();
    const {imgSrc,
        cardTitle,
        location,
        jobTitle,
        typeOfJob,
        timePosted,
        jobDesc,
        jobTags,
        jobSalary,
        keyId,
        category} = props;

    const router = useRouter()
        
  return (
    <JobsCard>
        <JobsCardHeader>
        <Image
            // loader={myLoader}
            src={imgSrc}
            alt=""
            width={52}
            height={52}
            quality={100}
        />
        <JobsCardTitleContainer>
            <JobsCardTitle>{cardTitle}</JobsCardTitle>
            <JobsCardSubTitle className="gap-1"><HiOutlineLocationMarker />{location}</JobsCardSubTitle>
            <JobsCardSubTitle className="gap-1"><BiCategoryAlt />{category}</JobsCardSubTitle>
        </JobsCardTitleContainer>
        </JobsCardHeader>
        <JobsCardBody>
        <JobsCardBodyTitle>{jobTitle}</JobsCardBodyTitle>
        <JobsCardBodySubTitleContainer className="d-flex gap-2 mt-3">
            <JobsCardBodySubTitle className="d-flex align-items-center gap-1"><BsBriefcase />{typeOfJob}</JobsCardBodySubTitle>
            <JobsCardBodySubTitle className="d-flex align-items-center gap-1"><BiTimeFive />{timePosted}</JobsCardBodySubTitle>
        </JobsCardBodySubTitleContainer>
        <JobsCardDescription className="mt-4">{jobDesc.length > 170 ? (jobDesc.substring(0, 170) + '...') : jobDesc}</JobsCardDescription>
        <JobsCardTagsContainer className="d-flex gap-1 mt-4 mb-4 flex-wrap">
            {jobTags.map((tag, i) => {
                return (<JobsCardTags key={i}>{tag}</JobsCardTags>)
            })}
        </JobsCardTagsContainer>
        <Row className="price-per-hour">
            <Col>
                <JobsCardPrice>{jobSalary}</JobsCardPrice>
                <JobsCardHour className="text-muted">/{translate('hour')}</JobsCardHour>
            </Col>
            <Col className="d-flex justify-content-end apply-btn-container">
                <JobsCardButton className="apply-btn" onClick={() =>  router.push(`/job-details/${keyId}`)}>{translate('applynow')}</JobsCardButton>
            </Col>
        </Row>
        </JobsCardBody>
    </JobsCard>
  )
}

export default JobCardComponent