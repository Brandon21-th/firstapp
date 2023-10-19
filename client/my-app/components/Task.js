import { View, Text, TouchableOpacity } from "react-native";

export default function Task({
    id,
    title,
    shared_with_id,
    // clearTodo,
    // toggleTodo,
}) {
    return (
     <TouchableOpacity>
        <View>
            <Text > {title}</Text>
        </View>
     </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 14,
        borderRadius: 21,
        marginBottom : 10,
        backgroundColor: "white",
    },
    
 })