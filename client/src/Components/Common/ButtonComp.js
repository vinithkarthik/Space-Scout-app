import * as React from 'react';
import { Button } from 'react-native-paper';

const ButtonComp = ({ icon, label }) => (
  <Button 
    icon={icon} 
    mode="contained" 
    onPress={() => console.log('Pressed')}
  >
    {label}
  </Button>
);

export default ButtonComp;