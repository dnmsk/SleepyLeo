import Config from './config';
import user from '../utils/user';

let responses = {};
responses[Config.Login] = {
  POST: {
    '{"Email":"test17@test.test","Password":"qwerty"}': {
      data: {
        token: 'ABCD'
      }
    }
  }
};
responses[Config.Register] = {
  POST: {
    '{"Email":"test@test.test","Password":"test","ChildBirthday":"2018-01-01"}': {
      data: {
        token: 'ABCD'
      }
    }
  }
};
responses[Config.SleepNorm] = {
  GET: {
    undefined: {
      data: {
        ageDays: 9.421293391572917,
        ageInMonth: 10,
        awakeTimeMax: 3.157021556526215,
        awakeTimeMin: 2.828510778263108,
        daySleepCountMax: 2,
        daySleepCountMin: 2,
        daySleepTimeMax: 3,
        daySleepTimeMin: 2,
        nightSleepTimeMax: 12,
        nightSleepTimeMin: 10,
        wholeSleepTimeMax: 15,
        wholeSleepTimeMin: 12,
      }
    }
  }
};
responses[Config.Profile] = {};
responses[Config.Recommendations] = {};
responses[Config.Sleeps] = {};
responses[Config.Sleep] = {
  GET: {
    undefined: {
      data: {
        lastDaySleepInfo: null,
        recomendation: null,
        userName: null
      }
      /*
         data: {
          lastDaySleepInfo: {
            awakeFromNightTime: null,
            currentWakeTime: 0,
            daySleepTime: 0,
            daySleeps: [],
            forDate: "2018-03-20T13:02:39.1675368Z",
            isAwake: false,
            lastDayAwakeTime: null,
            lastEvent: {
              dayNight: 0,
              dayNightString: "Day",
              fromTime: "2018-03-20T12:16:31.926Z",
              id: "0ca1478b-af91-44e3-bb13-1090d7c6c18a",
              nowGoingSleep: true,
              sleepDuration: null,
              success: true,
              toTime: null,
              userId: "d10d7d7f-663c-4d7c-b4f2-ef7b68c25409",
            },
            nightSleepTime: 0,
            nightSleeps: [],
            userId: "d10d7d7f-663c-4d7c-b4f2-ef7b68c25409",
            wholeSleepTime: 0,
          },
          recomendation: null,
        }
      */ 
    }
  },
  POST: {
    //'{"IsDaySleep":true,"SleepEventType":"GoToSleep","WhenGoToSleepDay":"Today","WhenGoToSleepTimeUtc":"2018-03-20T12:16:31.926Z"}':
    undefined: {
      data: {
        dayNight: 0,
        dayNightString: "Day",
        fromTime: "2018-03-20T12:16:31.926Z",
        id: "0ca1478b-af91-44e3-bb13-1090d7c6c18a",
        nowGoingSleep: true,
        sleepDuration: null,
        success: true,
        toTime: null,
        userId: "d10d7d7f-663c-4d7c-b4f2-ef7b68c25409",
      }
    }
  },
  PUT: {
    undefined: {
      
    }
  }
};

const match_by_payload = function(datas, payload) {
  const key = JSON.stringify(payload) + '';
  console.log(key);
  return datas[key] || datas['undefined'];
};

const api = async function(target, payload=undefined, verb='POST') {
  return user.token
    .then((user_token) => {
      const authorized = !!user_token;
      const response =  match_by_payload(responses[target][verb], payload);
      if (response === undefined) {
        throw 404;
      }
      console.log(response);
      return response;
    });
};

export default api;
