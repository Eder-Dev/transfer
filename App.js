import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';
import Back from './assets/background.png'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather style={styles.buttonNav} name="menu" size={26} color="black" />
        <Text style={styles.title}>TRANSFER</Text>
        <Feather style={styles.buttonNav} name="compass" size={26} color="black" />
      </View>
      <View style={{...styles.options, ...styles.image}}>
        <Feather name="image" size={26} color="#63e3ff" />
        <Text style={{...styles.optionsText,...styles.image}}>Imagem</Text>
      </View>
      <View style={{...styles.options, ...styles.video}}>
        <Feather name="video" size={26} color="#ff76c8" />
        <Text style={{...styles.optionsText,...styles.video}}>Video</Text>
      </View>
      <View style={{...styles.options, ...styles.audio}}>
        <Feather name="music" size={26} color="#c57cff" />
        <Text style={{...styles.optionsText,...styles.audio}}>Audio</Text>
      </View>
      <View style={{...styles.options, ...styles.document}}>
        <Feather name="file-text" size={26} color="#ffce70" />
        <Text style={{...styles.optionsText,...styles.document}}>Documento</Text>
      </View>
      <View style={{...styles.options, ...styles.text}}>
        <Feather name="paperclip" size={24} color="#98ffd4" />
        <Text style={{...styles.optionsText,...styles.text}}>Texto</Text>
      </View>
       <Image
        style={styles.image1}
        source={Back}
        contentFit="cover"
      />
      <StatusBar style="auto" />
    </View>
  );
}
let color = {

}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 25,
    backgroundColor: '#fcfcff',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 0
  },
  image1: {
    flex: 1,
    width: '100%',
  },
  header:{
    marginBottom: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonNav:{
    backgroundColor: '#fcfcff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#009',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 24,
  },
  title:{
    fontSize: 26,
    fontWeight: 'bold'
  },
  options:{
    width: '100%',
    backgroundColor: '#fcfcff',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 16,
    marginTop: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.36,
    shadowRadius: 11.14,

    elevation: 24,
  },
  optionsText:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
    
  },
  image:{
    shadowColor: '#63e3ff',
    color: '#63e3ff',
  },
  video:{
    shadowColor: '#ff76c8',
    color: '#ff76c8',
  },
  audio:{
    shadowColor: '#c57cff',
    color: '#c57cff',
  },
  document:{
    shadowColor: '#ffce70',
    color: '#ffce70',
  },
  text:{
    shadowColor: '#98ffd4',
    color: '#98ffd4',
  },
});
//#98ffd4