import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Meditation } from '../types';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router';
type MeditationMenuItemProps = {
    meditation: Meditation;
};

const MeditationMenuItem: React.FC<MeditationMenuItemProps> = ({ meditation }) => {
    return (
        <View className='flex-row items-center gap-5'>
            <View className='items-center '>
            <View className='flex-1 w-1 bg-gray-300 border-dashed border-r-2 border-gray-300'></View>
            <Feather name="check-circle" size={24} color="#63e24a" />
            <View className='flex-1 w-1 bg-gray-300 border-dashed border-r-2 border-gray-300'></View>
            </View>
        
        <Link href={`/meditation/${meditation.id}`} asChild>
        <Pressable className='flex-1 p-5 py-8 border-2 border-gray-300 rounded-2xl'>
            <Text className='text-2xl font-semibold color-gray-200 mb-2'>
                {meditation.title}
            </Text>
            <View className='flex-row items-center gap-2'>
                <Text className='text-lg color-gray-200'>{meditation.duration} min</Text>
                <AntDesign name="clockcircleo" size={15} color="#ffffff" />
            </View></Pressable></Link>
        </View>
    )
}

export default MeditationMenuItem