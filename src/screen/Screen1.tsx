import React from 'react';
import { View, Button, Text } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Buienvenido</Text>
      <Button title="Acceder" onPress={() => navigation.dispatch( CommonActions.navigate({name:'Screen2'}))} />

    </View>
  );
}