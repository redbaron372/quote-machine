import React from 'react';
import { Typography } from '@material-ui/core';

class Footer extends React.Component {
    render() {
        return (
            <section>
                <Typography varient="body2">
                Copyright 2018 Paul Steimel. All rights reserved. Quotes retrieved from
                <a href="https://talaikis.com/random_quotes_api/">Talaikis Random quotes API</a>. Built on inspiration from the 
                freeCodeCamp Front End Libraries Project <a href="https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine">
                Build a Random Quote Machine</a>

                </Typography>
            </section>
        );
    }
}

export default Footer;