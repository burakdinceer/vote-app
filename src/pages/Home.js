import React from 'react'
import Header from '../components/Header/Header'
import List from '../components/List/List'
import Sort from '../components/Sort/Sort'
import SubmitButton from '../components/Submit/SubmitButton'

const Home = () => {
  return (
    <div>
        <div><Header/></div>
        <div><SubmitButton/></div>
        <div><Sort/></div>
        <div><List/></div>
    </div>
  )
}

export default Home