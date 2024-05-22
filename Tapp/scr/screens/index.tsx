import React, { useState } from 'react';
import { styles } from './styles';
import { View, Text, TextInput } from 'react-native';
export function SingnIn() {
  const [text, setText] = useState ("Você não digitou nada ainda");
  return(
    <View style={styles.container}>
      <Text>Tapp está em desenvolvimento, volte mais tarde :/</Text>
      <TextInput style={styles.input} 
      onChangeText={setText}
      />
      <Text>
        Você digitou: {text}
      </Text>
    </View>
  )
}