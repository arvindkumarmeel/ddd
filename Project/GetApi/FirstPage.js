import React from "react"
import {Text,View,TouchableOpacity} from "react-native"

const FirstPage=({navigation})=>{

    const submit=()=>{
    navigation.navigate("SecondPage")
    
    }

return(
    <View>
    <TouchableOpacity onPress={submit}>
        <View style={{height:50,width:200,borderWidth:1,marginLeft:70,marginTop:150}}>
        <Text style={{textAlign:"center", marginTop:0,fontSize:30,alignItems:"center"}}>Click Here</Text>
        </View>
    </TouchableOpacity>
    </View>
)

}
export default FirstPage;