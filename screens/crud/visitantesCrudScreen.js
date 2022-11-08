import { useState } from "react";
import { Text, View, StyleSheet, Pressable, Modal } from 'react-native';
import Constants from 'expo-constants';

export function VisitantesCrudScreen({ navigation: { goBack } }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View class="container" style={styles.container}>

      <View class="title" style={styles.title}>
        <Text>Cadastro de Visitante</Text>

        <View class="feed" style={styles.bar}>

          <Pressable style={styles.cadastro} onPress={() => setModalVisible(true)} >
            <Text>Pietra Silva Oliveira</Text>
            <Text>725.786.427-87</Text>
          </Pressable>

          <Pressable style={styles.cadastro} onPress={() => setModalVisible(true)} >
            <Text>Alice Mendez Queiroz Teixeira</Text>
            <Text>68.284.876-24</Text>
          </Pressable>

          <Pressable style={styles.cadastro} onPress={() => setModalVisible(true)} >
            <Text>Esther Cabral Costa</Text>
            <Text>786.134.535-68</Text>
          </Pressable>

          <Pressable style={styles.cadastro} onPress={() => setModalVisible(true)} >
            <Text>Caio Dias Britto das Neves</Text>
            <Text>352.448.404-10</Text>
          </Pressable>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Nome:Pietra Silva Oliveira </Text>
                <Text style={styles.modalText}>CPF:725.786.427-87 </Text>
                <Text style={styles.modalText}>Telefone: (61) 9 8374-2314 </Text>
                <Text style={styles.modalText}>Email: Poliveira@hotmail.com </Text>

                <Pressable
                  style={[styles.button, styles.buttonClose]}>
                  <Text>Editar cadastro</Text>
                </Pressable>

                <Text></Text>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Fechar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ecf0f1',
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    paddingLeft: 10,
    paddingRight: 10,
    //fontStyle: 'italic',
    fontWeight: 'bold'
  },
  bar: {
    paddingTop: Constants.statusBarHeight + 10,
  },
  cadastro: {
    padding: 10,
    backgroundColor: "#a0deda",
    marginBottom: 10,
  },
  back: {
    //backgroundColor: "#555555"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});