import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toTimeString } from '/src/functions/date';
import Recommendation from '/src/components/notifications/Recommendation';

export default class SleepRecommendation extends Component {
  render() {
    const recommendations = this.props.recommendations;
    let recommendationText = '';
    if (this.props.todaySleeps.length == 0) {
      recommendationText = 'Начните вести дневник снов и мы сможем давать вам рекомендации!';
    }
    if (!recommendationText && recommendations) {
      if (recommendations.justContinueSleep) {
        recommendationText = 'Постарайтесь продлить последний сон';
      } else {
        recommendationText = 'Рекомендуем уложить ребенка в ' + toTimeString(new Date(recommendations.time), 'minutes') + ' на ' +
          (recommendations.sleepType == 1 ? 'ночной' : 'дневной') + ' сон';

      }
    }
    return <Recommendation text={recommendationText} />;
  }
};
