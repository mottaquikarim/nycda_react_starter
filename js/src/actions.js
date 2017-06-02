import { getNumberData, updateType } from './reducers';

export const actions = {
	'UPDATE_VAL': (oldStore, options) => getNumberData(oldStore, options),
	'UPDATE_TYPE': (oldStore, options) => updateType(oldStore, options),
};