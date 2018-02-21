import Net from '/src/network';
import { PROFILE_GET } from './const';

export function getProfile(onSuccess) {
  return (dispatch) => {
    Net(dispatch).Profile.get().then((data) => {
      dispatch({
        type: PROFILE_GET,
        payload: {
          ...data,
          updated_at: new Date()
        }
      });
      onSuccess && onSuccess();
    });
  };
}
