import React, { useEffect } from 'react'
import Title from './components/Title'
import Footer from './components/Footer'
import Companies from './components/Companies'
import './index.css'
import { initCompanies } from './reducers/companiesReducer'
import{ useDispatch } from 'react-redux' 


const App = () => {
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(initCompanies())
    }, [dispatch])
    
    return (
      <div>
        <Title/>
        <Companies/>
        <Footer/>
      </div>
    )
  }
  
  export default App