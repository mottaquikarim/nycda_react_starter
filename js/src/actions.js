import { getNumberData, updateType, updateDrop } from './reducers';

export const actions = {
	'UPDATE_VAL': (oldStore, options) => getNumberData(oldStore, options),
	'UPDATE_TYPE': (oldStore, options) => updateType(oldStore, options),
	'UPDATE_DROP': (oldStore, options) => updateDrop(oldStore, options),
};