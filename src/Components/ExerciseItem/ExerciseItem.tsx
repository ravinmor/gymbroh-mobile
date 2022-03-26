import { Alert, Image, Modal, Pressable, Text, View } from "react-native";
import { BorderlessButton, TouchableOpacity } from "react-native-gesture-handler";
import {Card, Avatar} from 'react-native-paper';

import styles from "./styles"
import groupImage from "../../../assets/Images/fakeGym.jpg"
import { useState } from "react";

interface ExerciseItemProps {
    item: {
        id: string,
        name: string,
        repetitions: string,
        series: string,
        type: string
    }
}

export default function ExerciseItem({ item }: ExerciseItemProps) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image style={styles.imgEntity} source={groupImage} ></Image>
                            <View style={styles.infoExercise}>
                                <Text style={styles.exerciseNameModal}>{item.name}</Text>
                                <Text style={styles.repsModal}>{item.repetitions} repetições</Text>
                                <Text style={styles.seriesModal}>{item.series} séries</Text>
                            </View>
                            <Pressable
                                style={styles.button}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Fechar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>

            <TouchableOpacity style={styles.item}>
                <Card style={styles.card}>
                    <Card.Content>
                        <BorderlessButton style={styles.cardContent} onPress={() => setModalVisible(true)}>
                            <View style={styles.itemView}>
                                <Text style={styles.exerciseName}>{item.name}</Text>
                                <Text style={styles.reps}>{item.repetitions} repetições</Text>
                                <Text style={styles.series}>{item.series} séries</Text>
                            </View>
                            <View>
                                <View style={styles.muscularGroup}>
                                    <Text style={styles.muscularGroupText}>{item.type}</Text>
                                </View>
                            </View>
                            <Avatar.Image source={groupImage} />
                        </BorderlessButton>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        </View>
    )
}