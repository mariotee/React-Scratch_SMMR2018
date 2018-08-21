import React from 'react';
import AppLayout from 'layout';
import QuoteContainer from 'containers/quote.js';

class QuoteOfTheDay extends React.Component {
  render() {
    return <AppLayout title="Quote of the Day">
      <QuoteContainer/>
    </AppLayout>;
  }
}

export default QuoteOfTheDay;