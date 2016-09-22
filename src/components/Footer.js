import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                <hr/>

                <footer>
                    <p>&copy; 2016 by Mun. Created for learning React ecosystem.
                        <a href='https://github.com/quangnd/Voting-FakeAPI-ReactApp'>View source on GitHub</a>
                    </p>
                </footer>
            </div>
        )
    }
}

export default Footer;