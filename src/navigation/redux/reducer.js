import AppNavigator from '/src/navigation/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Loading'));

function mapRouteToScreenName(routeName) {
  switch(routeName) {
    case 'User':
      return 'DefaultSleep';
    case 'UserRoot':
      return 'DefaultSleep';
    case 'Default':
      return 'DefaultRoot';
    default:
      return routeName;
  }
}

const routesHandler = (() => {
  let routeNames = [];
  let routeKeys = {};
  let routeInitial = undefined;
  let lastNavigateActionIsBack = false;
  const findKeyForName = (routeName, route) => {
    if (route.routeName == routeName) {
      return route.key;
    }
    if (route.routes) {
      for (var i=0; i < route.routes.length; i++) {
        let key = findKeyForName(routeName, route.routes[i]);
        if (key) {
          return key;
        }
      } 
    }
    return null;
  };

  return {
    reset: (routeName, route) => {
      routeName = mapRouteToScreenName(routeName);
      routeInitial = routeName;
      routeNames = [routeName];
      routeKeys = {};
      routeKeys[routeName] = findKeyForName(routeName, route);
    },
    set: (routeName, route) => {
      lastNavigateActionIsBack = false;
      routeName = mapRouteToScreenName(routeName);
      const index = routeNames.indexOf(routeName);
      if (index > -1) {
        routeNames.splice(index, 1);
      }
      routeNames.push(routeName);
      routeKeys[routeName] = findKeyForName(routeName, route);
    },
    get: (routeName) => {
      return { routeName, key: routeKeys[routeName] };
    },
    getPrevious: () => {
      if (!lastNavigateActionIsBack) {
        routeNames.pop();
        lastNavigateActionIsBack = true;
      }
      routeName = routeNames.length > 0 ? routeNames.pop() : routeInitial;
      return { routeName, key: routeKeys[routeName] };
    }
  }
})();

export default (state = initialState, action) => {
  let route;
  switch(action.type) {
    case 'Navigation/BACK':
      route = routesHandler.getPrevious();
      return AppNavigator.router.getStateForAction({
        ...route,
        ...action
      }, state);
    case 'Navigation/NAVIGATE':
      route = AppNavigator.router.getStateForAction({
        ...action,
        ...routesHandler.get(action.routeName)
      }, state);
      routesHandler.set(action.routeName, route);
      return route;
    case 'Navigation/RESET':
      route = AppNavigator.router.getStateForAction(action, state);
      routesHandler.reset(action.actions[0].routeName, route);
      return route;
    default:
      return state;
  }
};
