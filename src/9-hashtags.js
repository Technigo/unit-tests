export const hashtags = (text) => {
    return text.match(/("[^"]+"|[^"\s]+)/g);
}
