import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ backgroundColor: "red", padding: 20 }}> Daniel Samassumba</Text>
      </ScrollView>
    </SafeAreaView>
  )
}