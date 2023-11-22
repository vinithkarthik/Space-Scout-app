import * as React from 'react';
import { Icon, Card, Text, useTheme } from 'react-native-paper';
import { View } from 'react-native';


const SpaceCard = ({spaceName, rate, src, onPress}) => {
  const theme = useTheme();
  return (
  <Card style={[{ backgroundColor: theme.colors.secondary }, compStyles.cardContainer]} onPress={onPress}>
    <Card.Cover style={compStyles.cardCover} source={src} />
    <Card.Content style={compStyles.content} >
      <View>
        <Text variant="titleMedium">{spaceName}</Text>
        <Text variant="bodyMedium">{`${rate} Rs per month`}</Text>
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
)};

export default SpaceCard;

const compStyles = {
  cardContainer: {
    marginTop: '5%'
  },
  cardCover: {  
    margin: '3%'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingLeft: '15px',
    // paddingRight: '15px',
    paddingBottom: '3%'
  }
}