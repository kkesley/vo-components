import React  from 'react'
import { Lottie } from '../src'
import banana from './lottiefiles/banana.json'

export default {
  title: 'Lottie',
  component: Lottie,
}

export const Default = () => (
  <Lottie animationData={banana} height={250} />
)
