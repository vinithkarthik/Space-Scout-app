import { View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Common/SearchBar";
import SpaceCard from "../Common/SpaceCard";
import { useQuery } from "@apollo/client";
import { GET_STORAGE_SPACE_LIST } from "../../Queries/SpaceQuery";

const StorageSpaceList = ({navigation}) => {
    const { loading, error, data } = useQuery(GET_STORAGE_SPACE_LIST);
    console.log('==data', data);

  return ( 
    <View style={styles.storageSpaceeContainer}>
      <SearchBar />
      <ScrollView>
      {
        data?.spaces && data.spaces.map((spaceCardObject) => {
          return <SpaceCard {...spaceCardObject} key={spaceCardObject.spaceName} onPress={() => navigation.navigate('StorageSpaceDetailView')} />
        })
      }
      {
        data?.spaces && data.spaces.map((spaceCardObject) => {
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