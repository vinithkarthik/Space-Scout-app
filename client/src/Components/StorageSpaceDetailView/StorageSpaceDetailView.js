import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, Icon, Divider } from "react-native-paper";
import ListItem from '../Common/ListItem';
import ButtonComp from "../Common/ButtonComp";
import ModalWindow from "../Common/ModalWindow";
import { useState } from "react";
const StorageSpaceDetailView = () => {
  const [isVisible, toggleVisible] = useState(false)
  const listItems = [
    {
      title: 'Air Conditioned',
      icon: 'ac-unit'
    },
    {
      title: 'Security Camera',
      icon: 'videocam'
    },
    {
      title: 'Rain Proof',
      icon: 'umbrella'
    },
    {
      title: 'Sun Proof',
      icon: 'wb-sunny'
    },
    {
      title: 'Smoke Alarm',
      icon: 'alarm'
    },
  ]
  return ( 
    <View style={styles.container}>
      {isVisible && <ModalWindow isVisible={isVisible} onHide={()=>toggleVisible(false)} />}
      <Image source ={require('../../../assets/garage1.jpg')} style={styles.spaceImg}/>
      <ScrollView>
      <View style={styles.detailViewContent}>
        <Text variant="headlineMedium" style={compStyles.heading} >Space available in OMR</Text>
        <Text variant="titleMedium" >Ample amount of space available with Air conditioned facility</Text>
        <Text variant="bodyMedium" >Area: 300 sqft</Text>
        <Text variant="bodyMedium" >
          <Icon
            source="star"
            size={20}
          />
          {'4.87'}
        </Text>
        <Divider style={compStyles.divider} />
        <Text variant="headlineSmall" >Facilities</Text>
        {
          listItems.map((list) => <ListItem {...list} key={list.title} />)
        }
         <Divider style={compStyles.divider} />
        <Text variant="headlineSmall" >Availability</Text>
        <Text variant="bodyMedium" >From Dec 30th</Text>
        <Divider style={compStyles.divider} />
        <View>
          <View style={styles.footer}>
            <Text variant="titleMedium" >3,000 Rs per month</Text>
            <ButtonComp label={'Pay'} style={compStyles.payButton} onPress={() => toggleVisible(true)} />
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  detailViewContent: {
    paddingRight: '3%',
    paddingLeft: '3%',
    // paddingBottom: '5%'
  },
  spaceImg: {
    height: '30%'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '3%'
  }
});

const compStyles = {
  heading: {
    marginTop: "10%",
    marginBottom: "6%",
  },
  divider: {
    marginTop: '3%',
    marginBottom: '3%',
  },
  payButton: {
    // width: '50%'
  }
}
 
export default StorageSpaceDetailView;