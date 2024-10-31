import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Albert Einstein</Text>
      <View>
        <Text>Ilmuan</Text>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="e=mc2"
      />
    </ScrollView>
  );
};

export default App;