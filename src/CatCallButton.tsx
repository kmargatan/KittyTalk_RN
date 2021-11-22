import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { pallete } from "./utils/colors";
import Sound from "react-native-sound";

interface ButtonProps {
    sound: string;
}

Sound.setCategory("Playback");

const meow = new Sound("meow.mp3", Sound.MAIN_BUNDLE, error => {
    if (error) {
        console.log("failed to load the sound", error);
        return;
    }
    // loaded successfully
    console.log("duration in seconds: " + meow.getDuration() + "number of channels: " + meow.getNumberOfChannels());
});

export const CatCallButton = (props: ButtonProps) => {
    const { sound } = props;

    const [pressed, setPressed] = useState<boolean>(false);
    useEffect(() => {
        meow.setVolume(1);
        return () => {
            meow.release();
        };
    }, []);

    useEffect(() => {
        pressed ? playSound() : stopSound();
    }, [pressed]);

    const playSound = () => {
        meow.play(success => {
            try {
                console.log("successfully finished playing", success);
            } catch (e) {
                console.log("can't play sound", e);
            }
        });
    };

    const stopSound = () => {
        meow.stop();
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
                }}
                onPressOut={() => {
                    setPressed(false);
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
