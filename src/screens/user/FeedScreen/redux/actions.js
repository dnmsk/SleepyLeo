import Net from '../../../../network';
import { SLEEPS_GET_FEED, SLEEPS_GET_APPEND_FEED } from './const';

export function getSleeps(onlyMySleeps, page, onSuccess) {
  return (dispatch) => {
    Net(dispatch).Sleeps.get({onlyMySleeps, page}).then((data) => {
      dispatch({
        type: !page ? SLEEPS_GET_FEED : SLEEPS_GET_APPEND_FEED,
        payload: data.page
      });
      onSuccess && onSuccess();
    });
  };
};
