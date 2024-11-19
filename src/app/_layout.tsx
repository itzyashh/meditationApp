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
        <Stack.Screen name="meditation/modal" options={{
            presentation: "modal",
            title: "Meditation Info",
            headerShown: false,
            contentStyle: { 
                minHeight: 500,
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: 120,
             },

         }} />
    </Stack>
}

export default RootLayout