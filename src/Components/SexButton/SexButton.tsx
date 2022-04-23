import { Picker } from '@react-native-picker/picker'

import styles from "./styles";

interface SelectedValueInterface {
    value: string,
    func: (e: React.SetStateAction<string>) => void
}

export default function SexButton({ value, func }: SelectedValueInterface) {
    return (
        <Picker
            style={[styles.inputLogin, {
                backgroundColor: '#00000000',
                width: 340
            }]}
            selectedValue={value}
            onValueChange={(itemValue) => {
                func(itemValue)
            }}
            >
            <Picker.Item  label="Masculino" value='1'/>
            <Picker.Item  label="Feminino" value='0'/>
        </Picker>
    )
}