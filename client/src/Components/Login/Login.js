import TextBox from "../Common/TextBox";
import ButtonComp from "../Common/ButtonComp";
import { Divider } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import Label from "../Common/Label";

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Label 
        variant={'displaySmall'} 
        label={'Space Scout'} 
        style={compStyles.appName}
      />
      <View style={styles.loginContainer}>
        <TextBox 
          label={'Email'}
          style={compStyles.loginContainerChildren}
        />
        <TextBox 
          label={'Password'}
          style={compStyles.loginContainerChildren}
        />
        <ButtonComp 
          label={'Login'}
          style={compStyles.loginContainerChildren}
          onPress={() => navigation.navigate('StorageSpaceList')}
        />
        <Divider 
          style={compStyles.loginContainerChildren}
        />
        <ButtonComp 
          icon={'google'}
          label={'Google'}
          style={compStyles.loginContainerChildren}
          onPress={() => navigation.navigate('StorageSpaceList')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    flex: 1,
    width: '100%',
    padding: '5%',
    justifyContent: 'center'
  }
});

const compStyles = {
  loginContainerChildren: {
    marginBottom: '10%'
  },
  appName: {
    marginTop: '30%'
  }
}

export default Login;