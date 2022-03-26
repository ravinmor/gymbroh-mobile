import { useEffect, useState } from "react";
import { View } from "react-native";


import EntityField from "../../Components/EntityField/EntityField";
import api from "../../Services/api";
import styles from "./styles"

interface EntityProps {
    id: string,
    username: string,
    user_lastname: string,  
    street: string,
    address_number: string,
    neighborhood: string,
    city: string,
    state_initials: string
}

interface EntityData {
    path: string,
    module: string
}

export default function EntityList({ path, module }: EntityData) {
    const [ entities, setEntities ] = useState<EntityProps[]>([])
    
    useEffect(() => {
        api.get(path).then(response => {
            setEntities(response.data)
        })
    }, [path])

    return(
        <View style={styles.container}>
            <View style={styles.mainContent}>
                {
                    entities.map((entity) => {
                        return(
                            <EntityField module={module} key={entity.id} data={entity} />
                        )
                    })
                }
            </View>
        </View>
    )
}