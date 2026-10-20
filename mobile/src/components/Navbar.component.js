import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import SignInModal from "./SignInModal.component";
import GetMenuComponents from "../data/MenuComponents.js";
import useSignIn from "../features/HomePage/hook/useSignIn.js";

function Navbar({ navigation }) {
    const menu = GetMenuComponents("naologado", {
        home: () => navigation.navigate("Home"),
        signUp: () => navigation.navigate("SignUp"),
        signIn: () => setModalSignInV(true),
        profile: () => navigation.navigate("Profile"),
    });
    const [signinmodalV, setModalSignInV] = useState(false);
    const { handleSignIn, loading } = useSignIn();
    const handleLogin = async (email, password) => {
        try {
            const result = await handleSignIn(email, password)
            setModalSignInV(false)
        } catch (issue) {
            console.log("erro ao logar")
        }
    }
    return (
        <View style={styles.container}>
            <Image
                source={menu.logoImg}
                style={styles.logo}
                resizeMode="contain"></Image>
            {
                menu.itens.map((item, index) => (
                    <Pressable
                        key={index}
                        onPress={item.onPress}
                        style={styles.linkbox}>
                        {
                            item.type === "text" ? (
                                <Text style={styles.linktext}>{item.label}</Text>
                            ) : (
                                <Image
                                    source={item.icon}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            )
                        }
                    </Pressable>
                ))
            }
            <SignInModal
                visible={signinmodalV}
                onClose={() => setModalSignInV(false)}
                mode="signin"
                onSubmit={handleLogin}>
            </SignInModal>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: "#327dbb",
        borderRadius: 8,
        marginTop: 40,
    },
    logo: {
        width: 100,
        height: 50,
        padding: 4,
    },
    icon: {
        width: 50,
        height: 25,
        padding: 3,
    },
    linkbox: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    linktext: {
        color: "#FFFFFF",
        fontSize: 14,
    },
});

export default Navbar