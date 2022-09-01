import { useEffect, useState } from "react";
import React, { View, Text, TextInput, Image, FlatList, Dimensions, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import axios from "axios";
import SearchList from "../../components/SearchList";

const Search = () => {


    const [data, setData] = useState([])
    const [input, setInput] = useState("")

    const [users, setUsers] = useState([])

    useEffect(() => {

        const key = '563492ad6f91700001000001384e30d424284ca28c0d75d656518aed'

        fetch("https://api.pexels.com/videos/search?query=people&per_page=18", {
            headers: {
                Authorization: key
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                console.log(data);
                setData(data.videos)
            })

        axios.get('https://randomuser.me/api/?results=15')
            .then((response) => {
                setUsers(response.data.results)
            })

    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ width: '100%', flexDirection: 'row', height: 90 }}>

                <View style={{ width: '100%', height: 90, marginLeft: 10, justifyContent: 'center' }}>

                    <TextInput style={{ color: 'black', backgroundColor: '#EEEEEE', paddingLeft: 30, width: '95%', height: 32, borderRadius: 7, marginTop: 30 }}
                        placeholder="Ara"
                        placeholderTextColor={'gray'}
                        onChangeText={setInput}
                        autoCapitalize="none"
                    />
                    <Icon
                        color='gray'
                        size={17}
                        name="search"
                        style={{ paddingLeft: 7, paddingTop: 30, position: "absolute" }}

                    />
                </View>

            </View>



            <View style={{ display: input.length > 0 ? 'none' : '', width: '100%', height: '100%', backgroundColor: 'white' }}>

                <FlatList
                    contentContainerStyle={{ paddingBottom: 90, flexWrap: 1, flexDirection: 'row', width: '100%' }}
                    data={data}
                    renderItem={({ item }) => (

                        <Image
                            resizeMode="cover"
                            style={{ width: Dimensions.get('window').width / 3.05, margin: 1, height: 130 }}
                            source={{ uri: item.image }} />


                    )}
                />

            </View>


            <View style={{ display: input.length > 0 ? '' : 'none', width: '100%', height: '100%', backgroundColor: 'white' }}>

                <FlatList
                    data={users}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => (
                        (item.name.first.toLowerCase() + item.name.last.toLowerCase()).match(input) ?
                            <SearchList data={item} /> : null
                    )}
                />

            </View>

        </View>
    )
}
export default Search;