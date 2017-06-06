import {
    addAlarm,
    inactivateAlarm,
    updateRoute,
} from './reducers';

export const actions = {
	// 'UPDATE_IDX': (oldStore, options) => updateIndex(oldStore, options),
	'ADD_ALARM': (oldStore, options) => addAlarm(oldStore, options),
    'INACTIVATE_ALARM': (oldStore, options) => inactivateAlarm(oldStore, options),
    'UPDATE_ROUTE':  (oldStore, options) => updateRoute(oldStore, options),
}
