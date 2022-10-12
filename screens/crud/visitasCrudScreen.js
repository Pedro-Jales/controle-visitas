import { Button , View } from 'react-native';

export function VisitasCrudScreen({ navigation: { goBack } }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => goBack()} title="Cancel" />
    </View>
  );
}