import * as React from 'react';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyComponent = ({title, icon}) => (
  <List.Item
    title={title}
    left={props => <Icon name={icon} size={30} color="black" />}
  />
);

export default MyComponent;