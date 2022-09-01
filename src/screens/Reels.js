import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TouchableNativeFeedback, FlatList } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from 'react-native-vector-icons/Feather'
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import ReelsVideo from '../../components/ReelsVideo'

const Reels = () => {

    const [data, setData] = useState([])


    useEffect(() => {

        const key = '563492ad6f91700001000001384e30d424284ca28c0d75d656518aed'

        fetch("https://api.pexels.com/videos/search?query=people&per_page=2", {
            headers: {
                Authorization: key
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                console.log(data.total_results);
                setData(data.videos)
            })

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <ExpoStatusBar style="light" />
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ReelsVideo link={item.video_files[0].link} />
                )}
            />
        </View>
    )
}
export default Reels;