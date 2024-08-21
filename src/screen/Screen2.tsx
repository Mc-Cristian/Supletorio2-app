import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Screen2() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [comments, setComents] = useState<string>('');

  
  const handleSubmit = () => {
   
    if (!name || !email) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }
    
    
    Alert.alert('Formulario enviado', `Nombre: ${name} Correo: ${email} Comentarios: ${comments}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Formulario</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

<TextInput
        style={styles.input}
        placeholder="Comentarios"
        value={comments}
        onChangeText={setComents}
   
      />

      
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
