export function addAlarm(oldStore, options) {
    const {name, time} = options;
    const {active_alarms} = oldStore;

    return Promise.resolve().then(_ => {
    	active_alarms.push({
    		name, time
    	});
    	
    	return Object.assign({}, oldStore, {
    		active_alarms,
    	});
    })
}
