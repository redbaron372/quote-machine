import React from 'react';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Typography from '@material-ui/core/Typography';
import Footer from './footer';

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
            <section className="contentArea" id="content">
                <div id="quote-box">
                    <div>
                        <Typography variant="h4" id='text'>{this.state.myApiData.quote}
                        </Typography>
                        <Typography variant="h6" id='author-area'>
                            <cite id='author'>- {this.state.myApiData.author}
                            </cite>
                        </Typography>
                    </div>
                    <div id="button-area">
                        <Button variant="contained"
                            color="primary"
                            href={`https://twitter.com/intent/tweet?text="` + encodeURIComponent(this.state.myApiData.quote) + `" -` + this.state.myApiData.author}
                            target="_blank">
                            Tweet
                        <ShareIcon />
                        </Button>
                        <Button variant="contained" color="primary" label="New Quote" id='new-quote' onClick={this.buttonClicked.bind(this)}>
                            New Quote
                    <AutorenewIcon />
                        </Button>
                    </div>
                </div>
                <div></div>
                <div id="footer">
                    <Footer />
                </div>
            </section>
        );
    }
}

  export default QuoteGenerator;