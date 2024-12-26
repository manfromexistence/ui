import React from 'react'
import LottieView from 'lottie-react-native'
import animationData from './animation.json'

export const TestLottie = () => (
  <LottieView
    source={animationData}
    autoPlay
    loop
    style={{
      width: 100,
      height: 100,
    }}
  />
)
