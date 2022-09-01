import React, { View, Text, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../../components/Navbar";
import Icon from "react-native-vector-icons/Feather";
import PostCard from "../../components/PostCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

const Home = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        await axios.get('https://randomuser.me/api/?results=10')
            .then((response) => {
                setData(response.data.results)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar style="dark" />
            <View style={{ width: '100%', flexDirection: 'row', height: 90 }}>

                <View style={{ width: '45%', height: '100%', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 35, paddingLeft: 15 }}>
                    <Image style={{ width: '70%', height: '70%' }} source={{ uri: 'https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png' }}></Image>
                </View>

                <View style={{ width: '55%', height: '100%', paddingTop: 35, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Icon
                        color='black'
                        size={27}
                        name="plus-square"
                        style={{ marginRight: 25 }}
                    />
                    <Icon
                        color='black'
                        size={27}
                        name="heart"
                        style={{ marginRight: 22 }}

                    />
                    <Icon
                        color='black'
                        size={27}
                        name="message-circle"
                        style={{ marginRight: 10 }}

                    />
                </View>

            </View>

            <View style={{ marginTop: 3, paddingBottom: 15, borderBottomColor: '#efefef', borderBottomWidth: 2 }}>
                <Navbar />
            </View>

            <View style={{}}>
                <FlatList
                    style={{ marginBottom: 190 }}
                    data={data}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({ item }) => (
                        <PostCard
                            names={item.name.first}
                            img={item.picture.large}
                            like={item.location.street.number}
                            descr={item.location.street.name}
                        />
                    )}

                />
            </View>


        </View>
    )
}

export default Home;