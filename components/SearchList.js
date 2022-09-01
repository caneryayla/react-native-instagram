import { View, Text, Image } from "react-native";

const SearchList = ({ data }) => {

    const textConvertUsername = () => {
        var first = data.name.first
        var last = data.name.first

        return (first + last).toLowerCase()

    }

    return (
        <View style={{ width: '100%', flexDirection: 'row', marginLeft: 15, justifyContent: 'flex-start', height: 65, marginBottom: 10 }}>
            <View style={{ width: 50, height: '100%' }}>
                <Image resizeMode="cover" style={{ width: 55, borderRadius: '50%', height: 55 }} source={{ uri: data.picture.thumbnail }} />
            </View>
            <View style={{ marginLeft: 13, height: '100%', alignItems: 'flex-start', justifyContent: 'center', }}>
                <Text style={{ fontSize: 14 }}> {textConvertUsername()} </Text>
                <Text style={{ color: 'gray', fontSize: 14 }}> {data.name.first} {data.name.last}  </Text>
            </View>
        </View>
    )
}

export default SearchList