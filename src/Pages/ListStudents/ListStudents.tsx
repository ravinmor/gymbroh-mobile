import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import EntityList from "../../Components/EntityList/EntityList";
import Footer from "../../Components/Footer/Footer";
import { useAuth } from "../../Context/Auth";

import styles from "./styles.tsx"

interface EntitySonRouteParams {
    id: string
}

export default function ListStudents() {
    const route = useRoute()
    const auth = useAuth();
    const params = route.params as EntitySonRouteParams
    
    const id = params == undefined ? auth.authData.id : params.id 

    return(
        <View style={styles.containerStudent}>
            <EntityList module="ScheduledExercises" path={`/list/${id}`} />
            <Footer settings={true} />
        </View>
    )
}