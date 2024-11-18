import { Slot, Stack } from "expo-router"
import "../../global.css";

const RootLayout = () => {
    return <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }}/>
    </Stack>
}

export default RootLayout