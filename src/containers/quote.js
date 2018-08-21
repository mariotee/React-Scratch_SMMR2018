import React from 'react';

class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
    };
  }
  
  async componentDidMount() {
    let response = await fetch('https://quotes.rest/qod');
    let json = await response.json();
    this.setState({
      quote: json.contents.quotes[0].quote,
      author: json.contents.quotes[0].author,
      date: json.contents.quotes[0].date,
    });
  }

  render(){

    return <div style={{
      width: '80%',
      maxWidth: '800px',
      margin: 'auto',
    }}>
      <h3>{this.state.date ? (new Date(this.state.date)).toDateString() : ''}</h3>
      <p>{this.state.quote}</p>
      <i>- {this.state.author}</i>
    </div>;
  }
}

export default QuoteContainer;