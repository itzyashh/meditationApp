import { Slot, Stack } from "expo-router"
import "../../global.css";

const RootLayout = () => {
    return <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }}/>
        <Stack.Screen name="meditation/[id]" options={{ 
            title: "Meditation",
            headerShown: false,
            animation: "slide_from_bottom",

             }}/>
    </Stack>
}

export default RootLayout