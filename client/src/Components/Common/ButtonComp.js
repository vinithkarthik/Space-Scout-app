import * as React from 'react';
import { Button } from 'react-native-paper';

const ButtonComp = ({ icon, label, style, onPress }) => (
  <Button 
    icon={icon} 
    mode="contained" 
    onPress={() => onPress()}
    style={style}
  >
    {label}
  </Button>
);

export default ButtonComp;