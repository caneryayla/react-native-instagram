import React, { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const PostCard = ({ names, img, like, descr }) => {

    return (
        <View style={{ width: '100%', marginBottom: 10 }}>

            <View style={{ width: '100%', height: 50, borderTopColor: '#efefef', borderTopWidth: 0.1, flexDirection: 'row', alignItems: 'center' }}>

                <Image style={{ width: 40, height: 40, borderRadius: '50%', marginLeft: 5, marginRight: 7 }}
                    source={{ uri: img }}></Image>

                <View style={{ width: '100%', height: '100%', justifyContent: 'center', paddingLeft: 7 }}>
                    <Text>{names}</Text>
                </View>
            </View>

            <View style={{ width: '100%' }}>
                <Image resizeMode="contain" style={{ width: '100%', minHeight: 400 }} source={{ uri: img }} />
            </View>

            <View style={{ width: '100%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Icon
                    color='black'
                    size={27}
                    name="heart"
                    style={{ marginRight: 10 }}

                />
                <Icon
                    color='black'
                    size={27}
                    name="message-circle"
                    style={{ marginRight: 10 }}

                />
                <Icon
                    color='black'
                    size={27}
                    name="send"
                    style={{ marginRight: 10 }}

                />
                <Icon
                    color='black'
                    size={27}
                    name="bookmark"
                    style={{ marginLeft: '60%' }}

                />
            </View>

            <View style={{ width: '100%', height: 65, paddingLeft: 10, justifyContent: 'center' }}>
                <Text style={{ fontWeight: '700', paddingBottom: 10 }}>{like} beğenme</Text>
                <Text style={{ fontWeight: '700' }}>{names} <Text style={{ fontWeight: '300' }}> {descr} </Text> </Text>
            </View>

        </View>
    )
}
export default PostCard;