import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'

const CartButton = () => {
    const totalItems = 10
  return (
    <TouchableOpacity className='flex items-center justify-center size-10 rounded-full bg-dark-100' onPress={()=>{}}>
      <Image source={images.bag} className='size-5' resizeMode='contain' />
      {totalItems > 0 && (
        <View className='absolute -top-2 -right-1 flex items-center justify-center size-5 bg-primary rounded-full'>
            <Text className='text-xs font-quicksand-bold text-white'>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default CartButton