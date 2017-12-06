import { NavigationActions } from 'react-navigation';

export function navigateTo(navigation, route, clearStack=false) {
  if (clearStack) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: route })],
      key: null
    });
    navigation.dispatch(resetAction);
  } else {
    navigation.navigate(route);
  }
}
