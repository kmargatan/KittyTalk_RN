import React from "react";
import { SafeAreaView, View } from "react-native";
import { Home } from "./src/Home";

export const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1
                }}
            >
                <Home />
            </View>
        </SafeAreaView>
    );
};
