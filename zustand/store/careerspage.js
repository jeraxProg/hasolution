import create from 'zustand';
import router from 'next/router';
import { searchEmployers } from '../../utils/client/employers';
import baseUrl from '../../utils/baseUrl'
import axios from 'axios'


export const useCareersPageStore = create((set, get) => ({
    /* State */
    details: {
        industry: '',
        location: '',
        keyword: '',
    },
    searchedEmployers: [],

    /* Computed */


    /* Functions */
    // handleChange: (e, value) => {
    //     e.preventDefault();
    //     set(state => ({
    //         ...state,
    //         details: {
    //             ...state.details,
    //             [value]: e.target.value,
    //         },
    //     }))
    // },
    // handleSubmit: async (e, details) => {
    //     const {industry, location, keyword} = details;
    //     e.preventDefault();
    //     if(keyword) {
    //         router.push(`/careers?keyword=${keyword}`)
    //         const results = await searchEmployers(details)

    //         set((state) => ({
    //             ...state,
    //             searchedEmployers: results
    //         }))
    //     } else {
    //         router.push(`/careers`)
    //     }
    //     set((state) => ({
    //         ...state,
    //         details: {
    //             ...state.details,
    //             keyword: '',
    //         },
    //     }))
    // }

}))