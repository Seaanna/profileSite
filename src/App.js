import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Container, Row, Col} from 'reactstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import profile from './images/profile.jpg';
import {indigo300, yellow100} from 'material-ui/styles/colors';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const styles = {
  heading: {
    paddingTop: 25,
    paddingBottom: 15,
    backgroundColor: indigo300,
    color: 'white'
  },
  paperStyle:{
    height: 300,
    width: 300,
    marginTop: 25,
    display: 'inline-block',
  },
  profilePic:{
    height: 300,
    width: 300,
    borderRadius: "50%"
  },
  cardStyle:{
    marginTop: 40,
    marginBottom: 40
  },
  cardText:{
    fontSize: 18
  },
  cardTitle:{
    fontSize: 28
  },
  bottomNavigation: {
    position: 'fixed',
    bottom: 0,
    height: 90,
    borderTop: '1px solid',
    borderColor: indigo300,
    textAlign: 'center',
    paddingTop: 10
  },
  contentBackground: {
    backgroundColor: yellow100,
    height: '100%',
    paddingTop: 35,
    overflow: 'scroll'
  }
}

class App extends Component {
  state = {
    selected: 'projects'
  }

  handleClick(selectedItem) {
    this.setState({selected: selectedItem});
  }

  render() {
    const nearbyIcon = <IconLocationOn />;

    return (
      <MuiThemeProvider>
        <Container fluid={true}>
          <Row style={styles.heading}>
            <Col sm={{ size: 10, offset: 1 }}>
              <h1>
              Sea-Anna Thompson
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <div className="text-center">
                <Paper style={styles.paperStyle} zDepth={3} circle={true}>
                  <img src={profile} style={styles.profilePic} />
                </Paper>
              </div>
              <Row>
                <Col xs={{size: 12, offset: 0}} sm={{size: 10, offset: 1}}>
                  <Paper zDepth={0} style={{marginLeft: 15}}>
                    <Card style={styles.cardStyle}>
                      <CardTitle
                        title="Sea-Anna Thompson"
                        subtitle="Ruby on Rails Developer"
                        titleStyle={styles.cardTitle}
                      />
                      <CardText style={styles.cardText}>
                        I come from a communications and kinesiology background where I took a career change to challenge myself to learn a new set of skills. I am passionate about teaching others, learning from others, and being part of communities that help involve women in tech. I enjoy challenging my current skillset and picking up new technologies quickly. I live a healthy lifestyle and prefer to be outside when I am not on my laptop. I volunteer in many organizations to help diveristy in technical fields including RailsBridge and Women Hack Events. I am always looking for new opportunities and enjoy connecting with others, so lets connect!
                      </CardText>
                      <CardActions>
                        <FlatButton label="Projects" onClick={this.handleClick.bind(this, 'projects')} />
                        <FlatButton label="Resume" onClick={this.handleClick.bind(this, 'resume')} />
                      </CardActions>
                    </Card>
                  </Paper>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} style={{padding: 0}}>
              <div className='text-center' style={styles.contentBackground}>
                {
                  this.state.selected == 'projects' &&
                  <div>
                    <h1>Projects</h1>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </div>
                }
                {
                  this.state.selected == 'resume' &&
                  <div>
                    <h1>Resume</h1>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </div>
                }
              </div>
            </Col>
          </Row>
        </Container>
        <BottomNavigation style={styles.bottomNavigation}>
          <a href='https://www.linkedin.com/in/sea-anna' target='_blank'>
            <BottomNavigationItem
              label="LinkedIn"
              icon={
                <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
              }
            />
          </a>
          <a href='https://github.com/Seaanna' target='_blank'>
          <BottomNavigationItem
            label="Github"
            icon={
              <i class="fa fa-github fa-2x" aria-hidden="true"></i>
            }
          />
          </a>
          <a href='https://twitter.com/thecoachfit' target='_blank'>
            <BottomNavigationItem
              label="Twitter"
              icon={
                <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
              }
            />
          </a>
        </BottomNavigation>
      </MuiThemeProvider>
    );
  }
}

export default App;
