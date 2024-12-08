// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Validasi form (contoh sederhana)
    if (!name || !email || !password) {
      Alert.alert('Error', 'Semua field harus diisi!');
      return;
    }

    // Proses registrasi (simulasi)
    Alert.alert('Sukses', `Registrasi berhasil!\nNama: ${name}\nEmail: ${email}`);
    // Reset form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrasi</Text>

      <CustomInput
        label="Nama"
        value={name}
        onChangeText={setName}
      />
      <CustomInput
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Daftar" onPress={handleRegister} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default RegisterScreen;
