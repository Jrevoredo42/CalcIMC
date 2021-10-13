import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';


export default function calcImc(){

const [peso,setPeso]= useState(0)
const [altura,setAltura]= useState(0)
const [resultado,setResultado]=useState(0)

const calcImc = () => {
  if(peso==0 || !peso){
    alert('Informe o Peso');
    return 
  }
  if(altura==0 || !altura){
    alert('Informe a altura');
    return
  }
  const r=peso/(Math.pow(altura,2));
    setResultado(r.toFixed(1))
}


  return (
    <SafeAreaView style={estilos.body}>
      <View style={estilos.block}>
      <Text style={estilos.menu}>Calculadora de IMC</Text>
      </View>
      <View style={estilos.block}>
        <Text>Informe seu Peso:</Text>
        <TextInput
        style={estilos.txt}
        autoFocus={true}
        keyboardType={'numeric'}
        onChangeText={text=>setPeso(text)}
        ></TextInput>
      </View>

      <View style={estilos.block}>
        <Text>Informe sua Altura:</Text>
        <TextInput
        style={estilos.txt}
        autoFocus={false}
        keyboardType={'numeric'}
        onChangeText={text=>setAltura(text)}
        ></TextInput>
      </View>
      <View style={estilos.block}>
        <TouchableHighlight
          style={estilos.btnCalc}
          onPress={()=>calcImc()}
        >
          <Text style={estilos.txtBtn}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>

      <View style={estilos.block}>
          <Text>Resultado: {resultado}</Text>
      </View>


    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({

block:{
  marginBottom: 20,

},

  body: {
    padding: 10,
    backgroundColor: '#FF5964',
    alignItems: 'center',
    },

txt: {
  width: '100%',
  borderWidth: 1,
  borderColor:'#000',
  padding: 10,
  borderRadius: 10,
},

btnCalc: {
  backgroundColor: '#048',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  borderRadius: 20,
},
txtBtn: {

  fontSize: 15,
  textTransform: 'uppercase',
  color: '#fff',
},

menu:{
  backgroundColor: '#FFE74C',
},


});