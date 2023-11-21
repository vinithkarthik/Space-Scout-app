import * as React from 'react';
import { Text, useTheme } from 'react-native-paper';

const Label = ({ variant, label, style }) => {
  const theme = useTheme();
  return (
    <>
      <Text 
        variant={variant}
        style={[{ color: theme.colors.primary }, style]}
        theme={'primary'}
      >
        {label}
      </Text>
   </>
  );
}

export default Label;