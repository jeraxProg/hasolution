import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import Layout from '../../components/Layout'
import JobDetailsPage from '../../components/JobDetailsPage'

const JobDetail = (props) => {

  const { employer, openJobs } = props;

  
  return (
    <Layout>
      <JobDetailsPage employer={employer} />
    </Layout>
  )
}

export default JobDetail


export async function getServerSideProps(context) {
  try {
    const id = context.params['job-detail'];

    const getEmployerDataPromise = axios.get(`${baseUrl}/api/employer/${id}`)
    const getEmployerJobPromise = axios.get(`${baseUrl}/api/employer/employer-list/jobs/${id}`)

    const [getEmployerDataResponse, getEmployerJobsResponse] = await Promise.all([
      getEmployerDataPromise,
      getEmployerJobPromise,
    ]);

    getEmployerDataResponse.data.openJobs = getEmployerJobsResponse.data.length;

    return { props: {employer: getEmployerDataResponse.data}}

  } catch (error) {
    console.log(error)
    return { props: {error} }
  }

}