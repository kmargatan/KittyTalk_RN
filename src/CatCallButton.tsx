import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { pallete } from "./utils/colors";
interface ButtonProps {
    sound: string;
}

export const CatCallButton = (props: ButtonProps) => {
    const { sound } = props;

    const [soundOn, setSound] = useState<boolean>(false);
    const [pressed, setPressed] = useState<boolean>(false);

    useEffect(() => {
        soundOn ? playSound() : null;
    }, [soundOn]);

    const playSound = () => {
        console.log("playingSound", sound);
    };

    return (
        <>
            <TouchableOpacity
                style={{
                    width: 250,
                    height: 250,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    borderRadius: 200,
                    borderColor: pallete.blue,
                    backgroundColor: pressed ? pallete.blue : "white",
                    borderWidth: 5
                }}
                onPressIn={() => {
                    setPressed(true);
                    setSound(true);
                }}
                onPressOut={() => {
                    setPressed(false);
                    setSound(false);
                }}
                activeOpacity={0.7}
            >
                <Icon name="paw" size={100} color={pressed ? "white" : pallete.blue} style={{ alignSelf: "center" }} />
            </TouchableOpacity>
            <View style={{ paddingTop: 10 }}>
                <Text style={{ color: pallete.blue, fontSize: 20 }}>{"Press Here"}</Text>
            </View>
        </>
    );
};
