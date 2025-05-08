import {
  View,
  Text,
  SafeAreaView,
  Image
} from 'react-native'
import { style } from "@/styles/style"
import React, { useEffect } from 'react'
import { router } from 'expo-router'
import imageInitialLoad from "../assets/images/Logo (1).png"

export default function index() {
  useEffect(() => {
    const loaddingTime = setTimeout(() => {
      router.navigate("/auth/login")
    }, 2000)
    return () => clearTimeout(loaddingTime)
  }, [])
  return (
    <SafeAreaView style={style.initial_page_loader}>
      <Image
        alt='image-initial-loadig'
        source={imageInitialLoad}
        style={style.image_loading}
      />
    </SafeAreaView>
  )
}