import Layout from "../../components/Layout"
import AdminComponent from "../../components/Admin"
import { useAdminFormStore } from "../../zustand/store/admin-form"
import axios from "axios"
import baseUrl from "../../utils/baseUrl"
import AdminPortal from "../../components/Admin/AdminPortal"

import { useState } from "react"

const Admin = ({ employers, cat_list }) => {
  const { employer_details, handleSubmit, handleChange } = useAdminFormStore(
    state => state
  )
  const {
    company_name,
    cat_of_industry,
    occupation_title,
    req_no_of_employees,
    salary,
    duration_of_employment,
    qualifications_work_exp,
    job_desc,
    preffered_sex_or_gender,
    sector_of_vacancy,
    contact_no,
    job_type
  } = employer_details

  //HA
  const [loggedIn, setLoggedIn] = useState(false)

  //HA
  const adminState = {
    loggedIn,
    setLoggedIn
  }

  //HA
  if (!loggedIn)
    return <AdminPortal loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

  //HA
  return (
    <AdminComponent
      employers={employers}
      cat_list={cat_list}
      //HA
      adminState={adminState}
    />
  )
}

export default Admin

export async function getServerSideProps(context) {
  try {
    const getEmployersDataResponse = await axios.get(
      `${baseUrl}/api/employer/employer-list`
    )
    const getCategoryListResponse = await axios.get(
      `${baseUrl}/api/category/category-list`
    )

    const [getEmployersData, getCategoryList] = await Promise.all([
      getEmployersDataResponse,
      getCategoryListResponse
    ])

    return {
      props: {
        employers: getEmployersData.data,
        cat_list: getCategoryList.data
      }
    }
  } catch (error) {
    console.log(error)
    return { props: { error } }
  }
}
