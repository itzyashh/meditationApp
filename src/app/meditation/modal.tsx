import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router'

const Modal = () => {
  const {desc} = useLocalSearchParams()

  return (
    <View className='flex-1 p-4 bg-orange-400 rounded-lg'>
      <Text className='text-black text-2xl'
      >{desc}</Text>
    </View>
  )
}

export default Modal