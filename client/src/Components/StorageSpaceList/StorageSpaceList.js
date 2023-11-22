import { View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Common/SearchBar";
import SpaceCard from "../Common/SpaceCard";
import { useQuery } from "@apollo/client";
import { GET_STORAGE_SPACE_LIST } from "../../Queries/SpaceQuery";

const StorageSpaceList = ({navigation}) => {
  const { loading, error, data = [] } = useQuery(GET_STORAGE_SPACE_LIST);
  console.log('==data', data);
  let dataWithImgSrc = JSON.parse(JSON.stringify(data));
  const imgSrc = [{src: require('../../../assets/garage1.jpg')}, {src: require('../../../assets/garage2.jpg')}, {src: require('../../../assets/garage3.jpg')}]
  dataWithImgSrc = dataWithImgSrc?.spaces?.map((space, index) => {
    space.src = imgSrc[index].src
    return space;
  });
  console.log('==dataWithImgSrc', dataWithImgSrc);
  return ( 
    <View style={styles.storageSpaceeContainer}>
      <SearchBar />
      <ScrollView>
      {
        dataWithImgSrc && dataWithImgSrc.map((spaceCardObject) => {
          return <SpaceCard {...spaceCardObject} key={spaceCardObject.spaceName} onPress={() => navigation.navigate('StorageSpaceDetailView')} />
        })
      }
      {
        dataWithImgSrc && dataWithImgSrc.map((spaceCardObject) => {
          return <SpaceCard {...spaceCardObject} key={spaceCardObject.spaceName} onPress={() => navigation.navigate('StorageSpaceDetailView')} />
        })
      }
      </ScrollView>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storageSpaceeContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    padding: '7%',
  }
});
 
export default StorageSpaceList;