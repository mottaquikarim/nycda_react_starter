import { GET } from './utils/ajax';

const __makeGetReq = (oldStore, currentSelectedItem, currentType) => {
	return GET('http://numbersapi.com/' + currentSelectedItem, {
		type: currentType,
	}).then(data => {
		return Promise.resolve().then(() => {
			return Object.assign({}, oldStore, {
				currentType,
				currentSelectedItem,
				labelToShow: data,
			});
		})		
	});	
}

export function updateType(oldStore, options) {
	const {currentType} = options;
	const {currentSelectedItem} = oldStore;

	return __makeGetReq(oldStore, currentSelectedItem, currentType);
}


export function getNumberData(oldStore, options) {
	const {currentSelectedItem} = options;
	const {currentType} = oldStore;

	return __makeGetReq(oldStore, currentSelectedItem, currentType);

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