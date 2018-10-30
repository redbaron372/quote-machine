import React from 'react';
import Button from '@material-ui/core/Button';

class QuoteGenerator extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        myApiData: [],
        apiURL: "https://talaikis.com/api/quotes/random/"
      };
  
      this.buttonClicked = this.buttonClicked.bind(this);
    }
  
    buttonClicked() {
      fetch(this.state.apiURL)
        .then(response => response.json())
        .then(data => this.setState({ myApiData: data }));
    }
  
    componentDidMount() {
      fetch(this.state.apiURL)
        .then(response => response.json())
        .then(data => this.setState({ myApiData: data }));
    }
  
    render() {
      return (
        <section>
          <blockquote id='text'>{this.state.myApiData.quote}
          </blockquote>
          <div id='author-area'>
            <cite id='author'>- {this.state.myApiData.author}
            </cite>
          </div>
          <div></div>
          <div id='button-area'>
          <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=` + `"` + encodeURIComponent(this.state.myApiData.quote) + `" -` + this.state.myApiData.author}target='_blank'>Tweet Quote</a>
          <Button variant="contained" color="primary" label="New Quote" id='new-quote' onClick={this.buttonClicked.bind(this)}>New Quote</Button>
          </div>
        </section>
      );
    }
  }

  export default QuoteGenerator;