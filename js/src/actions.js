import { getNumberData } from './reducers';

export const actions = {
	'UPDATE_VAL': (oldStore, options) => getNumberData(oldStore, options),
};