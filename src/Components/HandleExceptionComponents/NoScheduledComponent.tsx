import { Text, View } from 'react-native';

import styles from "./styles"

export default function NoScheduledComponent() {
    return (
        <View style={styles.noDataField}>
            <Text style={styles.noDataText}>Nada agendado para esse dia</Text>
        </View>
    );

}
