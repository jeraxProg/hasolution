import Layout from '../components/Layout'
import HomePage from '../components/HomePage'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import Error from 'next/error'


const Index = (props) => {

  const { employers, cat_list, cat_length, errorCode} = props;

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <Layout>
        <HomePage employers={employers} cat_list={cat_list} cat_length={cat_length} />
    </Layout>
  )
}

export default Index;

export async function getServerSideProps(context) {

  try {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const errorCode = res.ok ? false : res.status
    const json = await res.json()

    const getEmployersDataResponse = await axios.get(`${baseUrl}/api/employer/number-of-open-employers`)
    const getCategoryListResponse = await axios.get(`${baseUrl}/api/category/category-list`)

    const [getEmployersData, getCategoryList] = await Promise.all([
      getEmployersDataResponse,
      getCategoryListResponse,
    ]);

    const countBy = (arr, prop) => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});
    const cat_length = countBy(getEmployersData.data, 'cat_of_industry');
    const shownList = getCategoryList.data.filter((item) => item.isShown === true)
    // const employers = getEmployersData.data.filter((employer) => employer.cat_of_industry === isSelected)

    return { props: {employers: getEmployersData.data, cat_list: shownList, cat_length, errorCode}}

  } catch (error) {
    console.log(error)
    return { props: {error} }
  }

}