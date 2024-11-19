import { View, Text, Pressable, Platform } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { meditations } from '@/data'
import { AntDesign, Entypo, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const Page = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const meditation = meditations.find((m) => m.id === Number(id))

  if (!meditation) {
    router.back()
    return null
  }

  const { top } = useSafeAreaInsets()

  return (
    <SafeAreaView className='flex-1 bg-orange-400'>
      <View className='flex-1'>
      <View className='flex-row justify-between items-center p-4 px-5' >
        <Entypo name="info" size={24} color="black" />

        <View className='bg-zinc-950 p-2'>
          <Text
            className='text-white text-sm font-extrabold'
          >Today's Meditation</Text>
        </View>

        <AntDesign
          onPress={() => router.back()}
          name="close" size={24} color="black" />
      </View>
      <Text className='text-center text-2xl font-bold mt-20 p-2 text-zinc-800'>
        {meditation.title}
      </Text>
      </View>


      <Pressable className='justify-center items-center'>
        <FontAwesome5 name="play" size={24} color="black" />
      </Pressable>
<View className='flex-1'>
  <View className='mt-auto p-4'>
      <View className='flex-row justify-between items-center p-4 px-5'>
        {
          Platform.OS === 'ios' ? (
            <MaterialIcons name="airplay" size={24} color="black" />
          ) : (
            <FontAwesome5 name="chromecast" size={24} color="black" />
          )
        }

        <Ionicons name="cog-sharp" size={24} color="black" />
      </View>
      </View>
      </View>


    </SafeAreaView>
  )
}

export default Page