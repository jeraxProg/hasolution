import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useHooks from './hooks';

const EmployersComponent = ({ employer, cat_list }) => {


        const { handleUpdate,
            handleChangeUpdate,
            editDetails,
            edit_company_name,
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
            edit_isOpen} = useHooks({cat_list});

      

  return (
    <>
        <Form onSubmit={(e) => handleUpdate(e, editDetails)}>
            <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" value={employer.edit_company_name}  onChange={(e) => handleChangeUpdate(e, 'edit_company_name')} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Category Industry</Form.Label>
                <Form.Select value={employer.edit_cat_of_industry}  onChange={(e) => handleChangeUpdate(e, 'edit_cat_of_industry')} required>
                    {cat_list.map((list, i) => {
                        return (
                            <option key={i} value={list.title}>{list.title}</option>
                        )
                    })}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" value={employer.edit_occupation_title}  onChange={(e) => handleChangeUpdate(e, 'edit_occupation_title')}required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Required No. of Employees</Form.Label>
                <Form.Control type="number" value={employer.edit_req_no_of_employees} required onChange={(e) => handleChangeUpdate(e, 'edit_req_no_of_employees')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" value={employer.edit_location} required onChange={(e) => handleChangeUpdate(e, 'edit_location')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="text" value={employer.edit_salary} required onChange={(e) => handleChangeUpdate(e, 'edit_salary')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Duration of Employment</Form.Label>
                <Form.Control type="text" value={employer.edit_duration_of_employment} required onChange={(e) => handleChangeUpdate(e, 'edit_duration_of_employment')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Qualifications of Work Experience</Form.Label>
                <Form.Control type="text" value={employer.edit_qualifications_work_exp} required  onChange={(e) => handleChangeUpdate(e, 'edit_qualifications_work_exp')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                    value={employer.edit_job_desc}
                    as="textarea"
                    style={{ height: '100px' }}
                    required
                    onChange={(e) => handleChangeUpdate(e, 'edit_job_desc')}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Prefered Gender</Form.Label>
                <Form.Select value={employer.edit_preffered_sex_or_gender} required onChange={(e) => handleChangeUpdate(e, 'edit_preffered_sex_or_gender')} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Sector of Vacancy</Form.Label>
                <Form.Select value={employer.edit_sector_of_vacancy} required onChange={(e) => handleChangeUpdate(e, 'edit_sector_of_vacancy')} >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contact No.</Form.Label>
                <Form.Control type="number" value={employer.edit_contact_no} required onChange={(e) => handleChangeUpdate(e, 'edit_contact_no')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Job Type</Form.Label>
                <Form.Control type="text" value={employer.edit_job_type} required onChange={(e) => handleChangeUpdate(e, 'edit_job_type')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={employer.edit_company_email} required  onChange={(e) => handleChangeUpdate(e, 'company_email')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Experienced Level</Form.Label>
                <Form.Control type="text" value={employer.edit_experienced_level} required   onChange={(e) => handleChangeUpdate(e, 'edit_experienced_level')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Google Form Link</Form.Label>
                <Form.Control type="text" value={employer.edit_google_form_link} required onChange={(e) => handleChangeUpdate(e, 'edit_google_form_link')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Is The Job Open?</Form.Label>
                <Form.Select value={employer.edit_isOpen} required onChange={(e) => handleChangeUpdate(e, 'edit_isOpen')} >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
  )
}

export default EmployersComponent