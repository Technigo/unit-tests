export const hashtags = (text) => {
  const regex = /#\S+/g
  return text.match(regex)
}
//regex that first found only the #
//searched and found match() method - retrieves the result of matching a string against a regular expression
//tried to understand g = globally in the entire string, i = ignore case, had to look up Regular expression cheatsheet https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
//continuation of regular expression S = Matches a single character other than white space. 
//contintuation of regular expression + = matches minimum 1 character \S in this case, but took the entire word. Found solution on Stack overflow.
//continuation of regular expression * = is "greedy" / is a bit more generous --> in this case it would be minimum 0 characters. 