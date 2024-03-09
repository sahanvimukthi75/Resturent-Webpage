import React from 'react'
import { ReviewCard } from '../layouts/ReviewCard'
import img8 from "../assets/img8.jpg"
import img9 from "../assets/img9.jpg"
import img10 from "../assets/img10.jpg"

const Review =() => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer's Review</h1>
        <div className='flex flex-col md:flex-row gap-5 mt-5'>
            <ReviewCard img={img8} name="sophia laura"/>
            <ReviewCard img={img9} name="praddep rathnayake"/>
            <ReviewCard img={img10} name="nisha laura"/>

        </div>
    </div>
  )
}

export default Review