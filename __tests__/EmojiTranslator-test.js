const emojiTranslator = require('../translator/EmojiTranslator');

test('Given an Emoji Translator When Not Existing Emoji Then Default', () => {
  // Given
  var expectedRestult = "World"

  // When 
  var actualResult = emojiTranslator("☠");

  // Then
  expect(actualResult).toBe(expectedRestult);
});

test('Given an Emoji Translator When Existing Emoji Then Translaction', () => {
  // Given
  var expectedRestult = "Alien"

  // When 
  var actualResult = emojiTranslator("👽");

  // Then
  expect(actualResult).toBe(expectedRestult);
});