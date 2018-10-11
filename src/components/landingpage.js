import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src="https://openclipart.org/image/2400px/svg_to_png/277081/Male-Avatar.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />

              <p>HTML/CSS | JavaScript | Angular | React | Vue | NodeJS | PHP | Laravel | Python | Django</p>
              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/max-drlji%C4%87-003378140/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a href="https://github.com/MaxDrljic" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* FreeCodeCamp */}
                <a href="https://www.freecodecamp.org/maxdrljic" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* YouTube */}
                <a href="https://www.youtube.com/channel/UCJWAp5NNcBAsAiRuNkJqWwg?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;