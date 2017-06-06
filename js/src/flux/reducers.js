export function addAlarm(oldStore, options) {
    const {name, time} = options;
    const {active_alarms} = oldStore;

    return Promise.resolve().then(_ => {
    	active_alarms.push({
    		name, time
    	});
    	
    	return Object.assign({}, oldStore, {
    		active_alarms,
            currentRoute: '/list',
    	});
    })
}

export function inactivateAlarm(oldStore, options) {
    const {time} = options;
    const {active_alarms, inactive_alarms} = oldStore;

    return Promise.resolve().then(_ => {
        const [newA, newIn] = active_alarms.reduce((_arr, a) => {
            if (a.time !== time) {
                _arr[0].push(a);
            }
            else {
                _arr[1].push(a);
            }
            return _arr;
        }, [[], inactive_alarms]);
    	
    	return Object.assign({}, oldStore, {
    		active_alarms: newA,
            inactive_alarms: newIn,
    	});
    })
}

export function updateRoute(oldStore, options) {
    const {currentRoute} = oldStore;
    const {route, time} = options;

    const newRoute = (typeof route === "undefined") ? currentRoute + '/' + time : route;
    return Promise.resolve().then(_ => {
        if (newRoute === currentRoute) {
            return oldStore;
        }
        return Object.assign({}, oldStore, {
            currentRoute: newRoute,
        });
    });
}
