import TextBox from "../Common/TextBox";
import ButtonComp from "../Common/ButtonComp";
import { Divider } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Label from "../Common/Label";
const Login = () => {
  return (
    <>
    <Label 
      variant={'displaySmall'} 
      label={'Space Scout'} 
      style={compStyles.appName}
    />
    <View style={styles.container}>
      <TextBox 
        label={'Email'}
        style={compStyles.containerChildren}
      />
      <TextBox 
        label={'Password'}
        style={compStyles.containerChildren}
      />
      <ButtonComp 
        label={'Login'}
        style={compStyles.containerChildren}
      />
      <Divider 
        style={compStyles.containerChildren}
      />
      <ButtonComp 
        icon={'google'}
        label={'Google'}
        style={compStyles.containerChildren}
      />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: '20px',
    justifyContent: 'center'
  }
});

const compStyles = {
  containerChildren: {
    marginBottom: '30px'
  },
  appName: {
    marginTop: '30px'
  }
}

export default Login;