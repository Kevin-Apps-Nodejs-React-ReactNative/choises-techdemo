import React, { useState } from "react";
import { TextInput, View } from "react-native";

function SignUpForm({ data }) {
    return (
        <View>
            <TextInput
                placeholder="Nome de usuario"
                value={username}
                onChangeText={data.username}
            >
            </TextInput>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={data.email}>

            </TextInput>
        </View>
    );
}

export default SignUpForm