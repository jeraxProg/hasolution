import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useHooks from './hooks';

const EmployersComponent = ({cat_list}) => {
    const {handleSubmit,
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
        isOpen} = useHooks({cat_list});

    
  return (
    <>
        <Form onSubmit={(e) => handleSubmit(e, details)}>
            <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Company Name" value={company_name} onChange={(e) => handleChange(e, 'company_name')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Category Industry</Form.Label>   
                <Form.Select  required value={cat_of_industry} onChange={(e) => handleChange(e, 'cat_of_industry')}>
                    {cat_list.map((list, i) => {
                        return (
                            <option key={i} value={list.title}>{list.title}</option>
                        )
                    })}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Job Title" value={occupation_title} onChange={(e) => handleChange(e, 'occupation_title')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Required No. of Employees</Form.Label>
                <Form.Control type="number" placeholder="Enter Num of Employees" value={req_no_of_employees} onChange={(e) => handleChange(e, 'req_no_of_employees')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Location" value={location} onChange={(e) => handleChange(e, 'location')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="text" placeholder="Enter Salary" value={salary} onChange={(e) => handleChange(e, 'salary')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Duration of Employment</Form.Label>
                <Form.Control type="text" placeholder="Enter Duration of Employment" value={duration_of_employment} onChange={(e) => handleChange(e, 'duration_of_employment')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Qualifications of Work Experience</Form.Label>
                <Form.Control type="text" placeholder="Enter Qualifications of Work Experience" value={qualifications_work_exp} onChange={(e) => handleChange(e, 'qualifications_work_exp')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                    as="textarea"
                    style={{ height: '100px' }}
                    required
                    value={job_desc} onChange={(e) => handleChange(e, 'job_desc')}
                />
                
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select required value={preffered_sex_or_gender} onChange={(e) => handleChange(e, 'preffered_sex_or_gender')} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="both">Male or Female</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Sector of Vacancy</Form.Label>
                <Form.Select required value={sector_of_vacancy} onChange={(e) => handleChange(e, 'sector_of_vacancy')}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contact No.</Form.Label>
                <Form.Control type="number" placeholder="Enter Contact No." value={contact_no} onChange={(e) => handleChange(e, 'contact_no')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Job Type</Form.Label>
                <Form.Select value={job_type} onChange={(e) => handleChange(e, 'job_type')} required>
                        <option value="Fulltime">Full Time</option>
                        <option value="Parttime">Part Time</option>   
                        <option value="Fulltime/Parttime">Full time / Part Time</option>   
                </Form.Select>
                {/* <Form.Control type="text" placeholder="Enter Full Time" value={job_type} onChange={(e) => handleChange(e, 'job_type')} /> */}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Company email</Form.Label>
                <Form.Control type="email" placeholder="Enter email of the company" value={company_email} onChange={(e) => handleChange(e, 'company_email')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Japanese Language Level</Form.Label>
                <Form.Control type="text" placeholder="Enter Language Level" value={experienced_level} onChange={(e) => handleChange(e, 'experienced_level')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Google Form Link</Form.Label>
                <Form.Control type="text" placeholder="Enter Link" value={google_form_link} onChange={(e) => handleChange(e, 'google_form_link')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Is The Job Open?</Form.Label>
                <Form.Select required value={isOpen} onChange={(e) => handleChange(e, 'isOpen')} >
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