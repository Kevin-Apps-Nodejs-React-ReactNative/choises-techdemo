import React from "react";
import { View, TextInput, StyleSheet } from "react-native";




function SignInForm() {
    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholderTextColor="#7b7b7b"
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#7b7b7b"
            />

        </View>
    )
}

const style = StyleSheet.create({
    input: {
        backgroundColor: "#f3f4f6",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        marginBottom: 12,
        fontSize: 15,
        color: "#111827",
    },
});

export default SignInForm