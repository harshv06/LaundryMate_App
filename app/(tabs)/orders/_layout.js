import {Stack} from "expo-router"

export default function Layout(){
    <>
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"/>
    </Stack>
    </>
}
