import { useState } from 'react';
import { Platform, Pressable, Text } from 'react-native';
import DateTimePicker  from '@react-native-community/datetimepicker'
import moment, { now } from 'moment';

import styles from "./styles";

interface DatePickerComponentInterface {
    value?: Date,
    funcSetBirthDate: (e: React.SetStateAction<Date>) => void
}

export default function DatePickerComponent({ value, funcSetBirthDate }: DatePickerComponentInterface) {
    const timeToDateString = (time: Date) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    const [ show, setShow ] = useState(false)
    const [ dateValue, setDateValue ] = useState(value ? new Date(value) : new Date())
    const [ styleDate, setStyleDate ] = useState<object>(value ? styles.inputDate : styles.inputPlaceHolder);
    const [ textBirthdate, setTextBirthdate ] = useState(moment(value).format("DD/MM/YYYY"))

    const onChangeDate = (event: object, selectedDate?: Date): void => {
        if(selectedDate) {
            setShow(Platform.OS === 'ios')
            funcSetBirthDate(selectedDate)
            setTextBirthdate(moment(selectedDate).format("DD/MM/YYYY"))
            setStyleDate(styles.inputDate)
        }
    }

    return (
        <>
            {show && <DateTimePicker
                mode="date"
                display="calendar"
                value={new Date(value)}
                onChange={onChangeDate}
            />}
            <Text style={styles.inputText}>Data de nascimento</Text>
            <Pressable
                style={[styles.inputLogin, {                    
                    paddingVertical: 0,
                    paddingHorizontal: 0,
                    justifyContent: "center",
                    alignItems: 'center'
                }]}
                onPress={() => {setShow(true)}}
            >
                <Text style={styleDate}>{ textBirthdate }</Text>
            </Pressable>
        </>
    )
}