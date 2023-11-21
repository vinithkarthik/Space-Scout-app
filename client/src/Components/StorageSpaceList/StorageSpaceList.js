import { View, StyleSheet } from "react-native";
import SearchBar from "../Common/SearchBar";
import SpaceCard from "../Common/SpaceCard";
import { useQuery } from "@apollo/client";
import { GET_STORAGE_SPACE_LIST } from "../../Queries/SpaceQuery";

const StorageSpaceList = () => {
    const { loading, error, data } = useQuery(GET_STORAGE_SPACE_LIST);
    console.log('==data', data);

  return ( 
    <View style={styles.storageSpaceeContainer}>
      <SearchBar />
      {
        data?.spaces && data.spaces.map((spaceCardObject) => {
          return <SpaceCard {...spaceCardObject} />
        })
      }
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
    padding: '20px',
  }
});
 
export default StorageSpaceList;