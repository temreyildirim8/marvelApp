import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

export default function CharacterPage(props) {

  useEffect(() => {
    // TODO(YildirimE): will be handled
    window.console.log('page', props);
  }, [props]);

  return (
    <View style={styles.container}>
      <Text>Character page of "{props?.navigation?.state?.params?.name}"</Text>
    </View>
  );
}
