import Layout from '../components/Layout'
import CareersPage from '../components/Careers'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'

const Careers = ({employers, numOfEmployers}) => {
  return (
    <Layout><CareersPage employers={employers} numOfEmployers={numOfEmployers} /></Layout>
  )
}

export default Careers


export async function getServerSideProps(context) {
  try {
    const {keyword} = context.req.query;

    const getEmployersDataResponse = await axios.get(`${baseUrl}/api/employer/employer-list?keyword=${keyword || ''}`)
    const getOpenEmployersDataResponse = await axios.get(`${baseUrl}/api/employer/number-of-open-employers`)

    const [getEmployersData, getOpenEmployersData] = await Promise.all([
      getEmployersDataResponse,
      getOpenEmployersDataResponse
    ]);

    return { props: {employers: getEmployersData.data, numOfEmployers: getOpenEmployersData.data.length}}

  } catch (error) {
    console.log(error)
    return { props: {error} }
  }

}