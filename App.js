import React from "react";
import { SafeAreaView, View } from "react-native";
import { Home } from "./src/Home";

export const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    borderLeftWidth: 3,
                    borderRightWidth: 3,
                    borderLeftColor: `#C498F4`,
                    borderRightColor: "#C498F4"
                }}
            >
                <Home />
            </View>
        </SafeAreaView>
    );
};
