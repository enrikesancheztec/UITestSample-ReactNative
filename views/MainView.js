import React from "react";
import { View, Button, Alert } from 'react-native';

const emojiTranslator = require('../translator/EmojiTranslator');

const MainView = () => {
  return (
    <View>
        <Button onPress={(event) => onPressGreetings(event, '👽')} title="👽" color="#ff0000" />
        <Button onPress={(event) => onPressGreetings(event, '🤖')} title="🤖" color="#00ff00" />
        <Button onPress={(event) => onPressGreetings(event, '👻')} title="👻" color="#0000ff" />
    </View>
  );
};

const onPressGreetings = (event, buttonText) => {
    Alert.alert('Meaning', 'Hello ' + emojiTranslator(buttonText));
};

export default MainView;