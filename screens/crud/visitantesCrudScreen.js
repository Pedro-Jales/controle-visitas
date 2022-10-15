import { Button , View, Text, TextInput } from 'react-native';

export function VisitantesCrudScreen({ navigation: { goBack } }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TextInput placeholder='Nome'></TextInput>
      
    <View >
    
      <Button onPress={() => goBack()} title="Voltar" />
      <Button onPress={() => goBack()} title="Salvar" />
   
    </View>
      <TextInput placeholder='CPF'></TextInput>
      <TextInput placeholder='Telefone'></TextInput>
      <TextInput placeholder='Sexo'></TextInput>
      <TextInput placeholder='E-mail'></TextInput>
      
    
     </View>

  );
  <html lang="en">
    <head>
      <div>
        <TextInput placeholder='CPF'></TextInput>
      </div>
    </head>

  </html>
}
