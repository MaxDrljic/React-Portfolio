import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Max Drljić</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet, vim diam unum te, sed reformidans conclusionemque id. Nostrum omnesque his et, ad ocurreret salutatus his, ornatus efficiendi ea qui. His esse diceret no. Sit cu doctus intellegam. Assum nihil adolescens ei his, ea esse ponderum definiebas mei.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Oswald'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (123) 356-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Oswald'}}>
                    <i className="fa fa-fax" aria-hidden="true" />
                      (123) 356-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Oswald'}}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                      someone@example.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Oswald'}}>
                    <i className="fa fa-skype" aria-hidden="true" />
                      MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>      
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;