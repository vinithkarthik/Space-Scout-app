import { View, StyleSheet } from "react-native";
import SearchBar from "../Common/SearchBar";
import SpaceCard from "../Common/SpaceCard";

const StorageSpaceList = () => {
  return ( 
    <View style={styles.storageSpaceeContainer}>
      <SearchBar />
      <SpaceCard />
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