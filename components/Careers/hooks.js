import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import { searchEmployers } from '../../utils/client/employers';
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'

const useHooks = (employers, numOfEmployers) => {

  const router = useRouter();
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState({
    search: false,
    all: false
  })
  const [details, setDetails] = useState({
    keyword: '',
  })
  const {keyword} = details;
  const [pageCount, setpageCount] = useState(0)

  // Changed this value if you change your limit value in the backend as well, vice versa 
  let limit = 6;

  useEffect(() => {
    setpageCount(Math.ceil(numOfEmployers/limit))
    setItems(employers)
  }, [])

  const fetchEmployers = async (currentPage) => {
    const res = await axios.get(`${baseUrl}/api/employer/employer-list?page=${currentPage}&limit=${limit}`)
    return res.data;
  }

  const handlePageClick = async(data) => {
    let currentPage = data.selected;
    const employersFromServer = await fetchEmployers(currentPage)
    setItems(employersFromServer);
  }

  const handleSubmit = async (e, details) => {
    const {keyword} = details;
    e.preventDefault();
    setLoading({search: true})
    if(keyword) {
        router.push(`/careers?keyword=${keyword}`)
        const results = await searchEmployers(details)
        setItems(results)
    } else {
        router.push(`/careers`)
    }
    setDetails({keyword: ''})
    setLoading({search: false})
  }

  const handleChange = (e, value) => {
    e.preventDefault();
    setDetails({[value]: e.target.value});
  }

  const handleGetAll = async() => {
    setLoading({all: true})
    const res = await axios.get(`${baseUrl}/api/employer/employer-list`)
    setItems(res.data)
    router.push(`/careers`)
    setLoading({all: false})
  }

  return {
    items,
    setItems,
    loading, 
    setLoading,
    details, 
    setDetails,
    keyword,
    pageCount, 
    setpageCount,
    fetchEmployers,
    handlePageClick,
    handleSubmit,
    handleChange,
    handleGetAll
  }
}

export default useHooks;