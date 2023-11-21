import * as React from 'react';
import { Icon, Card, Text } from 'react-native-paper';
import { View } from 'react-native';


const SpaceCard = ({spaceName, rate}) => (
  <Card style={compStyles.cardContainer}>
    <Card.Cover style={compStyles.cardCover} source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content style={compStyles.content} >
      <View>
        <Text variant="titleMedium">{spaceName}</Text>
        <Text variant="bodyMedium">{`${rate}Rs per month`}</Text>
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
  cardContainer: {
    marginTop: '15px'
  },
  cardCover: {  
    margin: '10px'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '10px'
  }
}