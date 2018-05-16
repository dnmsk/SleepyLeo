import { DATA_SLEEP_NORMS } from '/src/const/actions';
import Net from '/src/network';

export function sleepNorms(onSuccess) {
  return (dispatch) => {
    Net(dispatch).SleepNorm.get().then((data) => {
      dispatch({
        type: DATA_SLEEP_NORMS,
        payload: data
      });
      onSuccess && onSuccess();
    });
  };
}
