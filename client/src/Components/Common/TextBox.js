import { useState } from 'react';
import { TextInput } from 'react-native-paper';

const TextBox = ({label, value, style}) => {
  const [text, setText] = useState(value);

  return (
    <TextInput
      mode={'outlined'}
      label={label}
      value={text}
      onChangeText={text => setText(text)}
      style={style}
    />
  );
};

export default TextBox;