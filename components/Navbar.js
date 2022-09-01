import React, { View, Text, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';


const Navbar = () => {

    const [data, setData] = useState([])
    const [loading, setIsloading] = useState(false)

    const getData = async () => {
        await axios.get('https://randomuser.me/api/?results=30')
            .then((response) => {
                setData(response.data.results)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={{ width: '100%' }}>
            <FlatList
                contentContainerStyle={{ paddingLeft: 20 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => (
                    <View style={{ width: 78, alignItems: 'center', marginRight: 9 }}>
                        <LinearGradient
                            colors={['#CA1D7E', '#E35157', '#F2703F']}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={{
                                marginRight: 8, height: 78, width: 78, alignItems: 'center', justifyContent: 'center', borderRadius: 82 / 2,
                            }}>
                            <Image source={{ uri: item.picture.large }} style={{ width: 75, height: 75, borderRadius: 75 / 2, alignSelf: 'center', borderColor: '#fff', borderWidth: 3 }}>
                            </Image>

                        </LinearGradient>
                        <Text numberOfLines={1} style={{ marginTop: 4, fontWeight: '300', color: 'black', marginRight: 12, textAlign: 'center', width: 60, }}> {item.name.first} </Text>
                    </View>
                )}
            />

        </View>
    )
}
export default Navbar;