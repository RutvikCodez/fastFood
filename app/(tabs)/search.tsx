import {  Button, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import seed from '@/lib/seed'

const Search = () => {
  return (
    <SafeAreaView>
      <Text>Search</Text>
      <Button title='Seed' onPress={() => seed().catch((err) => console.error("Failed to seed the database!",err))} />
    </SafeAreaView>
  )
}

export default Search