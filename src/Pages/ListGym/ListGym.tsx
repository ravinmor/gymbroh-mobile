import { View } from "react-native";
import EntityList from "../../Components/EntityList/EntityList";
import Footer from "../../Components/Footer/Footer";

import styles from "./styles.tsx"

export default function ListGym() {
    return(
        <View style={styles.container}>
            <EntityList module="ListPersonals" path="/users/getByRole/personal" />
            <Footer settings={true} />
        </View>
    )
}