const express = require('express');
const router = express.Router();
const EmployerModel = require('../models/EmployerModel');

// Get all employer list
router.get('/employer-list', async (req, res) => {
    try {
        const page = req.query.page || 0;
        const employersPerPage = Number(req.query.limit) || 18;
        const isOpen = true;

        let match = {}
        // const employers = await EmployerModel.find();
        // if (req.query.company_name) {
        //     match.$or = [
        //         {company_name: new RegExp(req.query.company_name, "i")},
        //     ],
        //     match.$and = [{isOpen}]
        // }
        // if (req.query.cat_of_industry) {
        //     match.$or = [
        //         {cat_of_industry: new RegExp(req.query.cat_of_industry, "i")},
        //     ],
        //     match.$and = [{isOpen}]
        // }
        // if (req.query.occupation_title) {
        //     match.$or = [
        //         {occupation_title: new RegExp(req.query.occupation_title, "i")},
        //     ],
        //     match.$and = [{isOpen}]
        // }
        // if (req.query.location) {
        //     match.$or = [
        //         {location: new RegExp(req.query.location, "i")},
        //     ],
        //     match.$and = [{isOpen}]
        // }
        // if (req.query.employment_duration) {
        //     match.$or = [
        //         {duration_of_employment: new RegExp(req.query.employment_duration, "i")},
        //     ],
        //     match.$and = [{isOpen}]
        // }
        // if (req.query.work_exp) {
        //     match.$or = [
        //         {qualifications_work_exp: new RegExp(req.query.work_exp, "i")},
        //     ],
        //     match.$and = [{isOpen}]
        // }
        // if (req.query.pref_gender) {
        //     match.$or = [
        //         {preffered_sex_or_gender: new RegExp(req.query.pref_gender, "i")},
        //     ],
        //     match.$and = [{isOpen}]
        // }
        // if (req.query.vacancy) {
        //     match.$or = [
        //         {sector_of_vacancy: new RegExp(req.query.vacancy, "i")},
        //     ],
        //     match.$and = [{isOpen}]
        // }
        // if (req.query.job_type) {
        //     match.$or = [
        //         {job_type: new RegExp(req.query.job_type, "i")},
        //     ],
        //     match.$and = [{isOpen}]
        // }
        // if (req.query.company_name === '' && 
        // req.query.occupation_title === '' && 
        // req.query.cat_of_industry === '' && 
        // req.query.location === '') {
        //     match.$or = [
        //         {isOpen},
        //     ]
        // }

        let response = await EmployerModel.find(
            {
                "$or": [
                    {company_name: {$regex: new RegExp(req.query.keyword, "i")}},
                    {occupation_title: {$regex: new RegExp(req.query.keyword, "i")}},
                    {location: {$regex: new RegExp(req.query.keyword, "i")}},
                    {cat_of_industry: {$regex: new RegExp(req.query.keyword, "i")}}
                ],
                "$and": [
                    {isOpen: true}
                ]
            }
        ).skip(page * employersPerPage).limit(employersPerPage)


        // const response = await EmployerModel.aggregate([{ $match: match}]).skip(page * employersPerPage).limit(employersPerPage)

        return res.status(202).json(response)

    } catch (error) {
        return res.status(500).json({
            message: '/employer/get',
            error,
        });
    }
})

router.get('/number-of-open-employers', async (req, res) => {
    try {
        const response = await EmployerModel.find()
        const filteredOpenEmployers = response.filter((item) => item.isOpen === true)

        return res.status(202).json(filteredOpenEmployers)

    } catch (error) {
        return res.status(500).json({
            message: '/employer/get',
            error,
        });
    }
})


router.get('/all/employer-list', async (req, res) => {
    try {
        let match = {}
        // const employers = await EmployerModel.find();
        if (req.query.company_name) {
            match.$or = [
                {company_name: new RegExp(req.query.company_name, "i")},
            ]
        }
        if (req.query.cat_of_industry) {
            match.$or = [
                {cat_of_industry: new RegExp(req.query.cat_of_industry, "i")},
            ]
        }
        if (req.query.occupation_title) {
            match.$or = [
                {occupation_title: new RegExp(req.query.occupation_title, "i")},
            ]
        }
        if (req.query.location) {
            match.$or = [
                {location: new RegExp(req.query.location, "i")},
            ]
        }
        if (req.query.employment_duration) {
            match.$or = [
                {duration_of_employment: new RegExp(req.query.employment_duration, "i")},
            ]
        }
        if (req.query.work_exp) {
            match.$or = [
                {qualifications_work_exp: new RegExp(req.query.work_exp, "i")},
            ]
        }
        if (req.query.pref_gender) {
            match.$or = [
                {preffered_sex_or_gender: new RegExp(req.query.pref_gender, "i")},
            ]
        }
        if (req.query.vacancy) {
            match.$or = [
                {sector_of_vacancy: new RegExp(req.query.vacancy, "i")},
            ]
        }
        if (req.query.job_type) {
            match.$or = [
                {job_type: new RegExp(req.query.job_type, "i")},
            ]
        }

        const response = await EmployerModel.aggregate([{ $match: match}])

        return res.status(202).json(response)
        
    } catch (error) {
        return res.status(500).json({
            message: '/employer/get',
            error,
        });
    }
})

router.get('/employer-list/jobs/:id', async (req, res) => {
    try {
        const employers = await EmployerModel.find();
        const employer = await EmployerModel.findById(req.params.id);
        
        const employer_jobs = employers.filter((emp) => emp.company_name === employer.company_name)
        const open_jobs = employer_jobs.filter((job) => job.isOpen === true)

        return res.status(202).json(open_jobs)
        
    } catch (error) {
        return res.status(500).json({
            message: '/employer/get',
            error,
        });
    }
})


// Get Employer
router.get('/:id', async(req, res) => {
    try {
        const employer = await EmployerModel.findOne({
            _id: req.params.id,
          });

        return res.status(202).json(employer)
        
    } catch (error) {
        return res.status(500).json({
            message: '/:id/get',
            error,
        });
    }
})


// Add employer
router.post('/', async (req, res) => {
    try {
        const { 
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
            isOpen
         } = req.body;
        
        employer_details = new EmployerModel({ 
            company_name: company_name,
            cat_of_industry: cat_of_industry.toLowerCase(),
            occupation_title: occupation_title,
            req_no_of_employees: req_no_of_employees,
            location: location,
            salary: salary,
            duration_of_employment: duration_of_employment,
            qualifications_work_exp: qualifications_work_exp,
            job_desc: job_desc,
            preffered_sex_or_gender: preffered_sex_or_gender,
            sector_of_vacancy: sector_of_vacancy,
            contact_no: contact_no,
            job_type: job_type,
            job_tags: job_tags,
            company_email: company_email,
            experienced_level: experienced_level,
            google_form_link: google_form_link,
            isOpen: isOpen
        })

        employer_details.save()

        return res.status(202).json({message: 'Successfully Added!'})
    } catch (error) {
        return res.status(500).json({
            message: '/employer/post',
            error,
        });
    }
})


// Delete Employer - passing a parameter to delete
router.delete('/delete/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const category = await EmployerModel.findOneAndDelete({ _id: id })

        if(category) {
            return res.status(202).json({message: 'Succesfully Deleted!'})
        } else {
            return res.status(401).json({message: 'No employer found!'})
        }
    } catch (error) {
        return res.status(500).json({
            message: '/employer/delete',
            error,
        });
    }
})


// Passing a parameter to update
router.put('/update/:id', async(req, res) => {
    try {
        const { id } = req.params;
        
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
            isOpen
        } = req.body;
        const isEmployer = await EmployerModel.findOne({ _id: id })

        if(isEmployer) {
            await EmployerModel.updateOne({ _id: id }, {
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
                isOpen
            })
            return res.status(202).json({message: 'Employer Details Successfully updated!'});
        } else {
            return res.status(401).json({message: 'No Employer found! Please try again!'})
        }

    } catch (error) {
        return res.status(500).json({
            message: '/category/update',
            error,
        });
    }
})


module.exports = router;