import { View, Text } from 'react-native'
import React from 'react'
import { useForm } from "react-hook-form"
export interface DataUserSignUser {
    name: string,
    email: string,
    phone_number: string,
    password: string,
    confPassword: string
}
export default function UseSignUp() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone_number: "",
            password: "",
            confPassword: ""
        }
    })
    const onSubmit = (data: DataUserSignUser) => {
        alert(" o meu Nome é " + data.name)
    }
    return {
        control,
        errors,
        handleSubmit,
        onSubmit
    }
}