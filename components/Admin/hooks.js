import {useState} from 'react'
import { useRouter } from 'next/router';

const useHooks = ({cat_list}) => {

    const router = useRouter();
    

    const [details, setDetails] = useState({
        company_name: '',
        cat_of_industry: cat_list[0].title,
        occupation_title: '',
        req_no_of_employees: '',
        location: '',
        salary: '',
        duration_of_employment: '',
        qualifications_work_exp: '',
        job_desc: '',
        preffered_sex_or_gender: 'male',
        sector_of_vacancy: true,
        contact_no: '',
        job_type: '',
        job_tags: [],
        company_email: '',
        experienced_level: '',
        google_form_link: '',
        isOpen: true
    })
    const [editDetails, setEditDetails] = useState({
        edit_company_name: '',
        edit_cat_of_industry:'',
        edit_occupation_title: '',
        edit_req_no_of_employees: '',
        edit_location: '',
        edit_salary: '',
        edit_duration_of_employment: '',
        edit_qualifications_work_exp: '',
        edit_job_desc: '',
        edit_preffered_sex_or_gender: '',
        edit_sector_of_vacancy:'',
        edit_contact_no: '',
        edit_job_type: '',
        edit_job_tags:'',
        edit_company_email: '',
        edit_experienced_level: '',
        edit_google_form_link: '',
        edit_isOpen:'',
    })


    const {company_name,
        cat_of_industry,
        occupation_title,
        req_no_of_employees,
        location,
        salary,
        duration_of_employment,
        qualifications_work_exp,
        job_desc,
        preffered_sex_or_gender,
        sector_of_vacancy,
        contact_no,
        job_type,
        job_tags,
        company_email,
        experienced_level,
        google_form_link,
        isOpen} = details;


    const getEmployerList = async() => {
        try {
            const fetchResponse = await fetch(`http://localhost:3000/api/employer/employer-list`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            const data = await fetchResponse.json();

            return data;
        } catch (e) {
            return console.log('ERROR:', e);
        }
    }

    // For Add Employers

    const handleSubmit = async (e, details) => {
        e.preventDefault();
        try {
            const fetchResponse = await fetch(`http://localhost:3000/api/employer/`, {
                method: 'POST',
                body: JSON.stringify(details),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            const data = await fetchResponse.json();
            router.push('/admin')

            return data;
        } catch (e) {
            return console.log('ERROR:', e);
        }
    }
    const handleChange = (e, value) => {
        e.preventDefault();
        setDetails({...details, [value]: e.target.value})
    }
    // =====================================================
 
    // For Edit Employers
    const {edit_company_name,
        edit_cat_of_industry,
        edit_occupation_title,
        edit_req_no_of_employees,
        edit_location,
        edit_salary,
        edit_duration_of_employment,
        edit_qualifications_work_exp,
        edit_job_desc,
        edit_preffered_sex_or_gender,
        edit_sector_of_vacancy,
        edit_contact_no,
        edit_job_type,
        edit_job_tags,
        edit_company_email,
        edit_experienced_level,
        edit_google_form_link,
        edit_isOpen} = editDetails;
    

    const handleUpdate = async (e, editDetails) => {
        e.preventDefault();
        try {
            const fetchResponse = await fetch(`http://localhost:3000/api/employer/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify(editDetails),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            const data = await fetchResponse.json();
            router.push('/admin')

            return data;
        } catch (e) {
            return console.log('ERROR:', e);
        }
    }
    const handleChangeUpdate = (e, value) => {
        e.preventDefault();
        setEditDetails({...editDetails, [value]: e.target.value})
    }
    // =====================================================
 

    // For Deleting Jobs
        // For DeleteModals
        const [showModalDelete, setShowModalDelete] = useState(false);
        const handleCloseModalDelete = () => setShowModalDelete(false);
        const handleShowModalDelete = () => setShowModalDelete(true);

        const handleDelete = async(id) => {
            try {
                const fetchResponse = await fetch(`http://localhost:3000/api/employer/delete/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                });
                const data = await fetchResponse.json();
                handleCloseModalDelete()
                router.push('/admin')

                return data;
            } catch (e) {
                return console.log('ERROR:', e);
            }
        }
    // =====================================================


  return {
  
    handleSubmit,
    handleChange,
    details,
    company_name,
    cat_of_industry,
    occupation_title,
    req_no_of_employees,
    location,
    salary,
    duration_of_employment,
    qualifications_work_exp,
    job_desc,
    preffered_sex_or_gender,
    sector_of_vacancy,
    contact_no,
    job_type,
    job_tags,
    company_email,
    experienced_level,
    google_form_link,
    isOpen,

    // Edit Details
    handleUpdate,
    handleChangeUpdate,
    editDetails,

    // Deleting Employees
    showModalDelete,
    handleCloseModalDelete,
    handleShowModalDelete,
    handleDelete
  }

 


}

export default useHooks