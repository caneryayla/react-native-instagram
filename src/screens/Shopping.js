import React, { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Shopping = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <SafeAreaView style={{ alignItems: 'center', backgroundColor: 'whitesmoke', borderBottomWidth: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Shopping</Text>
            </SafeAreaView>
            <View style={{ backgroundColor: 'white' }}>
                <View>

                </View>
            </View>
        </View>
    )
}
export default Shopping;