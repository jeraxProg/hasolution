import {
    CustomImage,
    CustomDesc
} from './components'

const NoResults = () => {
  return (
    <>
        <CustomImage
            // loader={myLoader}
            src={"/images/common/feeling-sorry-rafiki.svg"}
            alt=""
            width={500}
            height={500}
            quality={100}
            className="mx-auto"
        />
        <CustomDesc className="d-flex justify-content-center">No Results Found!</CustomDesc>
    </>
  )
}

export default NoResults