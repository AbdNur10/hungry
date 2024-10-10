import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import FoodItems from '../components/FoodItems'
import Card from '../components/Card'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Category/>
    <FoodItems/>
    <Card/>
    </>
  )
}

export default Home