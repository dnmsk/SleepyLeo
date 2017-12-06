import { DATA_SLEEP_NORMS } from '/src/const/actions'
import Net from '/src/network';

export async function sleepNorms(credentials) {
  return await Net.sleepNorms().then((data) => {
    return result = {
      type: DATA_SLEEP_NORMS,
      payload: data
    };
  });
};
