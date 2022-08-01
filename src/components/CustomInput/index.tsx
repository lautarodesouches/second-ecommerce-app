import { ColorValue, KeyboardTypeOptions, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react';

const CustomInput = (
    { label, helpMessage, keyboardType, placeholder = label, placeholderTextColor, value, onChangeText, onEndEditing = () => { } }: { label: string, helpMessage: string, keyboardType: KeyboardTypeOptions, placeholder?: string, placeholderTextColor?: ColorValue, value: string, onChangeText: any, onEndEditing?: any }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='sentences'
                keyboardType={keyboardType}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={e => onChangeText(e)}
                onEndEditing={onEndEditing}
            />
            {
                !!helpMessage && <Text style={styles.help}>{helpMessage}</Text>
            }
        </View>
    )
}

export default CustomInput