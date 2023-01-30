import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import {
  CustomLink,
  PNFContainer
} from './components'



const PageNotFound = () => {
  return (
    <PNFContainer className="d-flex justify-content-center">
      <Row>
        <Image
            // loader={myLoader}
            src={"/images/404ErrorPagenotFound.svg" }
            alt=""
            width={500}
            height={500}
            quality={100}
        />
        <CustomLink className="d-flex justify-content-center " href="/">Oops! Go back Home...</CustomLink>
      </Row>
    </PNFContainer>
  )
}

export default PageNotFound