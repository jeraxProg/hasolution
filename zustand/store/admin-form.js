import create from 'zustand'


export const useAdminFormStore = create(set => ({
    /* State */
    employer_details: {
        company_name: '',
        cat_of_industry: '',
        job_type: '',
        occupation_title: '',
        req_no_of_employees: '',
        salary: '',
        duration_of_employment: '',
        qualifications_work_exp: '',
        job_desc: '',
        preffered_sex_or_gender: '',
        sector_of_vacancy: '',
        contact_no: ''
    },

    /* Computed */


    /* Functions */
    handleChange: (e, value) => {
        e.preventDefault();
        set(state => ({
            ...state,
            employer_details: {
                ...state.employer_details,
                [value]: e.target.value,
            },
        }))
    },
    handleSubmit: async (e, employer_details) => {
        e.preventDefault();
        console.log('Employer Details ==>> ', employer_details);
        // await loginUser(user, setErrorMsg, setFormLoading,);
        // set((state) => ({
        //     ...state,
        //     submitDisabled: true,
        //     user: {
        //         ...state.user,
        //         email: '',
        //         password: '',
        //     },
        // }))
    },


}))