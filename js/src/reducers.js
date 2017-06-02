import { GET } from './utils/ajax';

export function getNumberData(oldStore, options) {
	const {currentSelectedItem} = options;
	return GET('http://numbersapi.com/' + currentSelectedItem, {})
		.then((data) => {
			return Object.assign({}, oldStore, {
				currentSelectedItem: data,
			});
		})

	// return Promise.resolve()
	// 	.then(() => {
	// 		return Object.assign({}, oldStore, options);
	// 	})
	// 	.catch(e => oldStore);

	// old way...

	// return new Promise((resolve, reject) => {
	// 	resolve(Object.assign({}, oldStore, options));
	// })
}