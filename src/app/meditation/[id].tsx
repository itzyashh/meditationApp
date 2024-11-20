import { View, Text, Pressable, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'
import { meditations } from '@/data'
import { AntDesign, Entypo, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Slider from '@react-native-community/slider'
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio'
import Animated, { cancelAnimation, Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated';

const Page = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const meditation = meditations.find((m) => m.id === Number(id)) 
   if (!meditation) {
    router.back()
    return null
  }

  const player = useAudioPlayer(meditation.audioUrl);
  const status = useAudioPlayerStatus(player);
  const [sliderMoving, setSliderMoving] = useState(false);
  
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const translate1 = useSharedValue(0);
  const translate2 = useSharedValue(0);
  const translate3 = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translate1.value }],
    };
  })

  const rStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translate2.value }],
    };
  })

  const rStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translate3.value }],
    };
  })

  const animationConfig = {
    duration: 4500,
  }

  const handleAnimation = () => {
    translate1.value = withRepeat(withTiming(-100, animationConfig), -1, true);
    translate2.value = withDelay(500,withRepeat(withTiming(-100, animationConfig), -1, true));
    translate3.value = withDelay(1000,withRepeat(withTiming(-100, animationConfig), -1, true))
  }

  const onPlayPress = () => {
    handleAnimation();
    player.play();
  }

  const onPausePress = () => {
    cancelAnimation(translate1);
    cancelAnimation(translate2);
    cancelAnimation(translate3);
    player.pause();
  }


const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.44,
  shadowRadius: 10.32,

  elevation: 16,
};

  return (
    <SafeAreaView className='flex-1 bg-orange-400'>

      <View className=' absolute top-48 bottom-0 left-0 right-0 items-center'>
        <Animated.View className='absolute w-[250%] aspect-square bg-yellow-300 rounded-full top-[25%]' style={[rStyle,shadowStyle]} />
        <Animated.View className='absolute w-[250%] aspect-square bg-yellow-200 rounded-full top-[40%]' style={[rStyle2,shadowStyle]} />
        <Animated.View className='absolute w-[250%] aspect-square bg-[#ffaefe92] rounded-full top-[55%]' style={[rStyle3,shadowStyle]} />
      </View>



      <View className='flex-1'>
      <View className='flex-row justify-between items-center p-4 px-5' >
        <Link href={{pathname:'/meditation/modal', params:{desc:meditation.description}}}>
        <Entypo name="info" size={24} color="black" 
        />
        </Link>

        <View className='bg-zinc-950 p-2'>
          <Text
            className='text-white text-sm font-extrabold'
          >Today's Meditation</Text>
        </View>

        <AntDesign
          onPress={() => router.back()}
          name="close" size={24} color="black" />
      </View>
      <Text
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,

            elevation: 16,
          }}
      className='text-center text-3xl font-bold mt-20 p-2 text-zinc-800'>
        {meditation.title}
      </Text>
      </View>


      <Pressable className='justify-center items-center' onPress={() => player.playing ? onPausePress() : onPlayPress()}>
        <FontAwesome5 name={status.playing ? 'pause' : 'play'} size={34} color="black" />
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
      <Slider
  style={{width: '90%',alignSelf:'center'}}
  minimumValue={0}
  maximumValue={1}
  value={status.currentTime/status.duration}
  minimumTrackTintColor="#454545"
  maximumTrackTintColor="#7a7a7a"
  thumbTintColor='#242424'
  onSlidingStart={() => player.pause()}
  onSlidingComplete={() => player.play()}
  onValueChange={(value) => player.seekTo(value * status.duration)}
/>
      <View className='flex-row justify-between items-center p-4 px-4'>
        <Text>{formatTime(status.currentTime/1000)}</Text>
        <Text>{formatTime(status.duration/1000)}</Text>
      </View>
      </View>
      </View>


    </SafeAreaView>
  )
}

export default Page