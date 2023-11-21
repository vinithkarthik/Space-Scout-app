import { useState } from 'react';
import { Searchbar, useTheme } from 'react-native-paper';

const SearchBar = ({style}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={[{ backgroundColor: theme.colors.secondary }, style]}
    />
  );
};

export default SearchBar;
