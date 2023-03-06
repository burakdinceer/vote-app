import React from 'react'
import Header from '../components/Header/Header'
import List from '../components/List/List'
import Sort from '../components/Sort/Sort'
import Submit from '../components/Submit/Submit'

const Home = () => {
  return (
    <div>
        <div><Header/></div>
        <div><Submit/></div>
        <div><Sort/></div>
        <div><List/></div>
    </div>
  )
}

export default Home