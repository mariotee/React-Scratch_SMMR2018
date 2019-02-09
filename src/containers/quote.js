import React from 'react'

/*
 * Categories:
 * inspire
 * management
 * sports
 * life
 * funny
 * love
 * art
 * students
 */

import Header from 'components/Header.js'

class QuoteContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
    }
  }

  async componentDidMount() {
    let inspire = await this.getData("inspire")
    let management = await this.getData("management")
    let sports = await this.getData("sports")
    let life = await this.getData("life")
    let funny = await this.getData("funny")
    let love = await this.getData("love")
    let art = await this.getData("art")
    let students = await this.getData("students")
    this.setState({
      loaded: true,
      data: [
        //inspire,
        //management,
        //sports,
        life,
        funny,
        //love,
        art,
        //students,
      ]
    })
  }

  async getData(key) {
    let response = await fetch(`https://quotes.rest/qod/?category=${key}`);
    let json = await response.json();
    let data = {
      quote: json.contents.quotes[0].quote,
      author: json.contents.quotes[0].author,
      date: json.contents.quotes[0].date,
    }

    return data
  }

  render() {
    return <div style={{
      width: '80%',
      maxWidth: '800px',
      margin: 'auto',
    }}>
      <Header/>
      {
        !(this.state.loaded)
          ? 'Loading...'
          : this.state.data.map((element,index) => {
            return <div key={index}>
              <h3>{element.date}</h3>
              <p>{element.quote}</p>
              <i> - {element.author}</i>
            </div>
          })
      }
    </div>;
  }
}

export default QuoteContainer