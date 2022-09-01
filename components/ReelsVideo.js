import { TouchableNativeFeedback, Dimensions, View } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
import React, { useState } from 'react';


const ReelsVideo = ({ link }) => {

    const [playButton, setPlayButton] = useState(false)

    return (

        <TouchableNativeFeedback
            onPressIn={() => setPlayButton(false)}
            onPressOut={() => setPlayButton(true)}
        >
            <Video
                style={{ left: -500, width: Dimensions.get("window").width * 3.85, height: Dimensions.get("window").height }}
                source={{
                    uri: link,
                }}
                resizeMode="contain"
                isLooping
                shouldPlay={playButton}
            />

        </TouchableNativeFeedback>


    )
}

export default ReelsVideo
