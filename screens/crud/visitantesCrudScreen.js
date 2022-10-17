import { Button , View, Text, TextInput } from 'react-native';

export function VisitantesCrudScreen({ navigation: { goBack } }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TextInput placeholder='Nome'></TextInput>
      <TextInput placeholder='CPF'></TextInput>
      <TextInput placeholder='Telefone'></TextInput>
      <TextInput placeholder='Sexo'></TextInput>
      <TextInput placeholder='E-mail'></TextInput>
    <View >
    
      <Button onPress={() => goBack()} title="Voltar" />
      <Button onPress={() => goBack()} title="Salvar" />
   
    
     </View>
    </View>
  );
}
