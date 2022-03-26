import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import imgEntity from "../../../assets/Images/fakeGym.jpg"
import api from "../../Services/api";
import styles from "./styles"

interface EntityProps {
    data: {
        id: string,
        username: string,
        user_lastname: string,  
        street: string,
        address_number: string,
        neighborhood: string,
        city: string,
        state_initials: string
    },
    module: string
}

export default function EntityField({ data, module }: EntityProps) {
    
    const navigation = useNavigation()

    const [ role, setRole ] = useState("gym")

    useEffect(() => {
        api.get(`/returnUserRole/${data.id}`).then(response => {
            setRole(response.data.name)
        })
    }, [data.id])

    function handleNavigateToPersonalList(module: string, id: string) {
        if(module == "ListPersonals") {
            navigation.navigate("ListPersonals", { id });
        } else if (module == "ListStudents") {
            navigation.navigate("ListStudents", { id });
        } else if (module == "ScheduledExercises") {
            navigation.navigate("ScheduledExercises", { id });
        }
    }

    return(
        <View style={styles.entityContent}>
            <Image style={styles.imgEntity} source={imgEntity} />
            <TouchableOpacity style={styles.textSpace} onPress={() => handleNavigateToPersonalList(module, data.id)}>
                <Text style={styles.titleEntity}>{data.username}</Text>
                <Text style={styles.paragraphEntity}>{`${data.street}, ${data.address_number}, ${data.city}, ${data.neighborhood} - ${data.state_initials}`}</Text>
            </TouchableOpacity>
        </View>
    )
}