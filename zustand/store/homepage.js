import create from 'zustand';
import router from 'next/router';



export const useHomePageStore = create((set, get) => ({
    /* State */
    details: {
        industry: '',
        location: '',
        keyword: '',
    },
    isLoading: false,


    /* Computed */


    /* Functions */
    handleChange: (e, value) => {
        e.preventDefault();
        set(state => ({
            ...state,
            details: {
                ...state.details,
                [value]: e.target.value,
            },
        }))
    },
    handleSubmit: async (e, details) => {
        const {industry, location, keyword} = details;
        e.preventDefault();
        // await searchEmployers(details)
        if(keyword) {
            router.push(`/careers?keyword=${keyword}`)
        } else {
            router.push(`/careers`)
        }
        set((state) => ({
            ...state,
            details: {
                ...state.details,
                keyword: '',
            },
        }))
    }

}))