import * as React from 'react';
import { Icon, Card, Text } from 'react-native-paper';
import { View } from 'react-native';


const SpaceCard = () => (
  <Card>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content style={compStyles.content} >
      <View>
        <Text variant="titleMedium">{'Space available in OMR'}</Text>
        <Text variant="bodyMedium">{'3000rs per month'}</Text>
      </View>
      <View>
        <Icon
          source="star"
          size={20}
        />
        <Text variant="bodyMedium">{'4.87'}</Text>
      </View>
    </Card.Content>
  </Card>
);

export default SpaceCard;

const compStyles = {
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5px'
  }
}