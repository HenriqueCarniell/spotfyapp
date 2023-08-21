import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import {AntDesign} from 'react-native-vector-icons'
import{Fontisto} from 'react-native-vector-icons'

function Logo() {
    return (
        <View style={style.logoView}>
          <Image
            style={style.logo}
            source={require("../../../img/spotfy.png")}
          />
    
          <Text style={style.frase}>Milhões de músicas à sua escolha.</Text>
          <Text style={style.frase2}>Grátis no Spotfy</Text>
    
          <TouchableOpacity style={style.signup}>
            <Text style={style.signuptext}>Inscreva-se grátis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.content1}>
            <Text style={style.text}>Continuar com um número</Text>
            <Text style={style.text}>de telefone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.content}>
            <Text style={style.text}><AntDesign size={25} name="google" />Continuar com o Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.content}>
            <Text style={style.text}><Fontisto name="facebook"/> com o Facebook</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={style.entrar}>
            <Text style={style.entrarText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      );
    }

const style = StyleSheet.create({
  signuptext: {
    fontSize: 20,
    fontWeight: '500',
  },
  logoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 200,
  },
  logo: {
    width: 80,
    height: 80,

  },
  frase: {
    color: 'white',
    fontSize: 22,
    fontWeight: "700",
    marginTop: 100,
  },
  frase2: {
    color: 'white',
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 110,
  },
  signup: {
    alignItems: 'center',
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#1ed760',
    width: 350,
    marginBottom:10,
    fontSize: 20,
  },
  content: {
    alignItems: 'center',
    borderRadius: 25,
    padding: 10,
    width: 350,
    borderWidth: 0.35,
    borderColor: '#fff',
    marginBottom:10,
  },
  content1: {
    alignItems: 'center',
    borderRadius: 25,
    width: 350,
    borderWidth: 0.35,
    borderColor: '#fff',
    marginBottom:10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    borderRadius: 25,
  },
  entrarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  }
});

export default Logo;
