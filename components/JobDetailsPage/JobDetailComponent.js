import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import {    
    TextDesc,
    WorkDesc
} from './components.js'


const JobDetailComponent = ({img, textDesc, workDesc}) => {
  return (
    <Col className="d-flex col-12 col-md-6 mt-md-6 mt-5">
        <Image
            // loader={myLoader}
            src={`/images/jobs-detail-page/${img}.svg`}
            alt=""
            width={16}
            height={16}
            quality={100}
            style={{
                width: '10%', 
                marginBottom: 'auto', 
                marginTop: '3px',
                minWidth: '6%',
                maxWidth: '10%'
            }}
        />
        <TextDesc>{textDesc}</TextDesc> 
        <WorkDesc>{workDesc}</WorkDesc>
    </Col>
  )
}

export default JobDetailComponent