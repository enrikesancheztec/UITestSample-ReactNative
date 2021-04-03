const emojiDict = {"👽":"Alien", "👻":"Ghost", "🤖":"Robot"};

function translate(emoji) {
    var result = "World"

    var translation = emojiDict[emoji];

    if (translation !== undefined) {
        result = translation;
    }

    return result;
}

module.exports = translate;