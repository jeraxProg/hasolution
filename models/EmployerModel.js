const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployerModel = new Schema({
    company_name: {
        type: String,
    },
    cat_of_industry: {
        type: String,
        required: false,
        trim: true, 
    },
    occupation_title: {
        type: String,
        required: true,
        trim: true,
    },
    req_no_of_employees: {
        type: Number,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trime: true,
    },
    salary: {
        type: String,
        required: true,
        trim: true,
    },
    duration_of_employment: {
        type: String,
        required: true,
        trim: true,
    },
    qualifications_work_exp: {
        type: String,
        required: true,
        trim: true,
    },
    job_desc: {
        type: String,
        required: true,
        trim: true,
    },
    preffered_sex_or_gender: {
        type: String,
        required: true,
        trim: true,
    },
    sector_of_vacancy: {
        type: Boolean,
        required: true,
        default: true,
        trim: true,
    },
    contact_no: {
        type: Number,
        required: true,
        trim: true,
    },
    job_type: {
        type: String,
        required: true,
        trim: true,
    },
    job_tags: [{
        type: String,
        required: true,
        trim: true,
    }],
    company_email: {
        type: String,
        trim: true
    },
    experienced_level: {
        type: String,
        trim: true
    },
    google_form_link: {
        type: String,
        required: true,
        trim: true
    },
    isOpen: {
        type: Boolean,
        required: true,
        default: true,
        required: true,
    }
}, { timestamps: true })



module.exports = mongoose.model('Employer', EmployerModel);