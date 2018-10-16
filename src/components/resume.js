import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Max Drljić</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <p>Lorem ipsum dolor sit amet, ea nobis admodum epicuri vel, latine efficiantur et vim. Ne vim magna nostrud eligendi, ei vis eius fuisset deleniti, vis cu suas urbanitas democritum. Modus postea argumentum usu cu, mel dolor partem ex. Nam assum tempor torquatos an, at exerci appareat eam, cu usu persius omittantur. Diceret delicatissimi necessitatibus ex pri, ne erant tation voluptua cum.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2012}
            />


          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;