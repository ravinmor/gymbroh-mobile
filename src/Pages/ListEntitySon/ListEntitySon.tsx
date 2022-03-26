import { useRoute } from "@react-navigation/native";
import EntityList from "../../Components/EntityList/EntityList";

interface EntitySonRouteParams {
    id: string
}

export default function ListEntitySon() {
    const route = useRoute()

    const params = route.params as EntitySonRouteParams

    return(
        <EntityList path={`/list/${params.id}`} />
    )
}