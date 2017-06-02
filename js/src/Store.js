const NUM_OPTIONS = 5;
const array = Array.from(Array(NUM_OPTIONS).keys());

const searchTypes = ['trivia', 'math', 'date', 'year'];
export const Store = {
	array,
	currentSelectedItem: 1,

	searchTypes,
	currentType: searchTypes[0],
};