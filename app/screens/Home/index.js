import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import * as charactersActions from 'app/actions/charactersActions';
import * as navigationActions from 'app/actions/navigationActions';
import { ScrollView } from 'react-native-gesture-handler';

export default function Login() {
  const dispatch = useDispatch();
  const chars = useSelector(state => state.charsReducer.chars);
  const getCharacters = () => dispatch(charactersActions.getCharacters());
  const goToCharacter = repo => () => navigationActions.navigateToCharacter(repo);

  useEffect(() => {
    // TODO(YildirimE): will be handled
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {chars ? (
          chars.map((char, index) => (
            <TouchableOpacity
              onPress={goToCharacter(char)}
              style={styles.charContainer}
              key={index}>
              <Text>{char.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <TouchableOpacity onPress={getCharacters}>
            <Text>Get Marvel Characters</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
