"use strict"
import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Elements} from 'react-stripe-elements';
import MetaTags from 'react-meta-tags';
import AddUserDialog from '../../childComponents/addUserDialog';
import HomepageTriangles from '../../miscComponents/HomepageTriangles';
import {
    TextField,
    DropDownMenu,
    MenuItem,
    Divider,
    Toolbar,
    ToolbarGroup,
    Dialog,
    FlatButton,
    CircularProgress
} from 'material-ui';
import YouTube from 'react-youtube';
import {browserHistory} from 'react-router';
import ToggleDisplay from 'react-toggle-display';

// videoId 'qZyqGwke0qM'
class HelpCenter extends Component {
  _onReady(event) {
    event.target.pauseVideo()}

  openFaq(faq) {
    let newState = this.state;
    newState[faq] = true;
    this.setState(newState);
  }


  constructor(props) {
    super(props);
    this.state = {faq1:false,
                  faq2:false,
                  faq3:false,
                  faq4:false,
                  faq5:false,
                  faq6:false,
                  faq7:false
    }
  }


  render() {

      const VIDEOS = [{
    name: "How to Invite a Candidate",
    link: "mr_Z7XlgvrI",
    category: "Candidates",
    saved: true,
    tags: ["Candidates", "Invite", "Account Admin"]
},
{
    name: "How to Invite an Employee",
    link: "zloJ_yptWU0",
    category: "Employees",
    saved: false,
    tags: ["Employees", "Invite", "Account Admin"]
},
{
    name: "How to Reset Your Password",
    link: "lNn18F51bfo",
    category: "",
    saved: false,
    tags: ["Password", "Security"]
}]
      const user = {
          name: this.props.currentUser.name
        }
      const style = {
            header: {
              position: "relative",
              display: "inlineBlock"
            },
            textBox: {
              color: "white",
              font: "bold",
              position: "absolute",
              height: "100%",
              textAlign: "center",
              width: "100%",
              padding:"0px 20px"
            },
            searchBar: {
                width: "80%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "30px"
            },
            menuLabelStyle: {
                color: "rgba(255,255,255,.8)"
            }

        }
    const opts = {
     height: '175',
     width: '250',
     textAlign: 'center',
     playerVars: { // https://developers.google.com/youtube/player_parameters
       autoplay: 0,
       iv_load_policy: 3,
      showinfo: 1
     }
   };
   const bottomListItem = {
           width: '35%',
           margin: 'auto',
           display: 'inline-block',
           top: '0',
           verticalAlign: 'top',
   };
   const renderTextField = ({input, label, ...custom}) => (
       <TextField
           hintText={label}
           floatingLabelText={label}
           {...input}
           {...custom}
       />
   );


      return (
        <div className="fillScreen formContainer" style={{textAlign:"center"}}>
            <MetaTags>
                <title>Help Center | Moonshot</title>
                <meta name="description" content="let's help you out." />
            </MetaTags>

            <div className="whiteText" style={{position:"relative"}}>
                <img
                  src={"images/businessHome/moonImage" + this.props.jpg}
                  alt=""
                  style={{position:"relative"}}
                  />
                <div className="center" style={{position: "absolute", left: "50%", transform: "translateX(-50%)", top: "20%"}}>
                  <h2 className="whiteText bold">Hi {user.name}, how can we help?</h2>

                  <form className="shadowBoxSearch">
                    <input
                      type="text"
                      placeholder="Search for something..."
                      ref={input => this.search = input}
                      onChange={this.handleInputChange}
                      />
                      <p>{this.state.query}</p>
                  </form>

                  <div className="whiteText clickable font15px underline">
                    <a href="#faqs" style={{color: "white", display: "inlineBlock"}}>Go to FAQs</a>
                    <a href="mailto:Support@MoonshotInsights.io" style={{color: "white", display: "inlineBlock", marginLeft: '10px'}}>Contact our Support Team</a>
                  </div>
                </div>
            </div>

          <section id="marginBottom60px" >
            <div className="font12px center">
              <h3 style={{color: '#76defe'}}>MUST WATCH</h3>
              <div className="whiteText marginBottom20px">Your must watch videos. The ones you've seen are marked in a <span style={{color:"#76defe"}}>gradient.</span> The ones you haven't are marked in <span style={{color:"red"}}>red.</span></div>
            </div>

              <div className="shadowBoxVid responsive"style={{marginRight: '10px'}}>
                <YouTube
                  videoId="qZyqGwke0qM"
                  opts={opts}
                  onReady={this._onReady}
                  />
                <div className="boldText">Account Activation</div>
                <div className="smallText">5 minute tutorial on how to activate your account.</div>
              </div>

              <div className="shadowBoxVid responsive"style={{marginRight: '10px', marginLeft: '10px'}}>
                <YouTube
                  videoId="m4_M9onXmpY"
                  opts={opts}
                  onReady={this._onReady}
                  />
                <div className="boldText">Applicant Integration</div>
                <div className="smallText">5 minute tutorial on how to set up integration for applicants.</div>
              </div>
              <div className="shadowBoxVid responsive"style={{marginLeft: '10px'}}>
                <YouTube
                  videoId="m4_M9onXmpY"
                  opts={opts}
                  onReady={this._onReady}
                  />
                <div className="boldText">Some New Feature</div>
                <div className="smallText">5 minute tutorial on random feature</div>

              </div>


          </section>


          <div className="clickableNoUnderline" style={{marginTop: '70px', marginBottom: '50px', textAlign:'center'}} >
              <a href="#whatsNew">
              <div className="shadowBoxA " style={{bottomListItem}}>
                <img
                  src={"images/businessHome/flameIcon" + this.props.png}
                  alt=""
                  style={{margin: "auto"}}
                  />
                <div>{"What's New"}</div>
              </div>
              </a>
              <a href="#saved">
                <div className="shadowBoxA " style={{bottomListItem}}>
                  <img
                    src={"images/businessHome/saveIcon" + this.props.png}
                    alt=""
                    style={{margin: "auto"}}
                  />
                  <div>Saved</div>
                </div>
              </a>
              <a href="#candidates">
                <div className="shadowBoxA  " style={{bottomListItem}}>
                  <img
                    src={"images/businessHome/candidatesIcon" + this.props.png}
                    alt=""
                    style={{margin: "auto"}}
                  />
                  <div>Candidates</div>
                </div>
              </a>

                <br/>
              <a href="#employees">
                <div className="shadowBoxA " style={{bottomListItem}}>
                  <img
                    src={"images/businessHome/employeeIcon" + this.props.jpg}
                    alt=""
                    style={{margin: "auto"}}
              />
                  <div>Employees</div>
                </div>
              </a>
              <a href="#administration">
              <div className="shadowBoxA " style={{bottomListItem}}>
                <img
                  src={"images/businessHome/lockIcon" + this.props.jpg}
                  alt=""
                  style={{margin: "auto"}}
         />
                  <div>Administration</div>
              </div>
              </a>
              <a href="#faqs">
              <div className="shadowBoxA " style={{bottomListItem}}>
                <img
                  src={"images/businessHome/questionMarkIcon" + this.props.jpg}
                  alt=""
                  style={{margin: "auto"}}
               />
                  <div>FAQs</div>
              </div>
              </a>
          </div>




      <div className="whiteText" style={{marginBottom: '500px', marginLeft:'200px'}}>
        <div id="faqs" className="searchLine">
        <form>
          <input
            placeholder="Search FAQs..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            />
            <p>{this.state.query}</p>
        </form>
        </div>

        <div className="faqHeader" >
        <div onClick={ () => this.openFaq("faq1")}>How do I manually invite candidates?</div>
          <ToggleDisplay show={this.state.faq1}>
            <div className="faqSection" id="faq1" >
              Step 1: Go to Add user <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description <br/>
              Step 2: Enter email <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description<br/>
              Step 3: Some step<br/>
              - Some step description<br/>
              - Some step description<br/>
              - Some step description
              <div>
              <img
                src={"icons/playIcon" + this.props.jpg}
                alt=""
                style={{height: "20px", width: "20px", marginRight: '5px', float: 'left', verticalAlign: 'bottom'}}
                />
                <div className= 'clickableNoUnderline' style={{color:'#76defe', display: "inlineBlock"}}>Watch how to manually invite candidates</div>
              </div>
              <div style={{textAlign: 'center'}}> Was this answer helpful? <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>Yes</span> or <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>No</span></div>
          </div>
          </ToggleDisplay>
        </div>

        <div className="faqHeader">
        <div onClick={ () => this.openFaq("faq2")}>How do I manually invite candidates?</div>
        <ToggleDisplay show={this.state.faq2}>
          <div className="faqSection" id="faq2" >
              Step 1: Go to Add user <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description <br/>
              Step 2: Enter email <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description<br/>
              Step 3: Some step<br/>
              - Some step description<br/>
              - Some step description<br/>
              - Some step description
              <div>
              <img
                src={"icons/playIcon" + this.props.jpg}
                alt=""
                style={{height: "20px", width: "20px", marginRight: '5px', float: 'left', verticalAlign: 'bottom'}}
                />
                <div className= 'clickableNoUnderline' style={{color:'#76defe', display: "inlineBlock"}}>Watch how to add an evaluation</div>
              </div>
              <div style={{textAlign: 'center'}}> Was this answer helpful? <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>Yes</span> or <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>No</span></div>
          </div>
          </ToggleDisplay>
        </div>

        <div className="faqHeader">
        <div onClick={ () => this.openFaq("faq3")}>How do I manually invite candidates?</div>
        <ToggleDisplay show={this.state.faq3}>
          <div className="faqSection" id="faq3" >
              Step 1: Go to Add user <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description <br/>
              Step 2: Enter email <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description<br/>
              Step 3: Some step<br/>
              - Some step description<br/>
              - Some step description<br/>
              - Some step description
              <div>
              <img
                src={"icons/playIcon" + this.props.jpg}
                alt=""
                style={{height: "20px", width: "20px", marginRight: '5px', float: 'left', verticalAlign: 'bottom'}}
                />
                <div className= 'clickableNoUnderline' style={{color:'#76defe', display: "inlineBlock"}}>Watch how to mark a candidate as dismissed</div>
              </div>
              <div style={{textAlign: 'center'}}> Was this answer helpful? <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>Yes</span> or <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>No</span></div>
          </div>
          </ToggleDisplay>
        </div>
        <div className="faqHeader">
        <div onClick={ () => this.openFaq("faq4")}>How do I manually invite candidates?</div>
        <ToggleDisplay show={this.state.faq4}>
          <div className="faqSection" id="faq4" >
              Step 1: Go to Add user <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description <br/>
              Step 2: Enter email <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description<br/>
              Step 3: Some step<br/>
              - Some step description<br/>
              - Some step description<br/>
              - Some step description
              <div>
              <img
                src={"icons/playIcon" + this.props.jpg}
                alt=""
                style={{height: "20px", width: "20px", marginRight: '5px', float: 'left', verticalAlign: 'bottom'}}
                />
                <div className= 'clickableNoUnderline' style={{color:'#76defe', display: "inlineBlock"}}>Watch how Moonshot integrates with ATS</div>
              </div>
              <div style={{textAlign: 'center'}}> Was this answer helpful? <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>Yes</span> or <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>No</span></div>
          </div>
          </ToggleDisplay>
        </div>

        <div className="faqHeader">
        <div onClick={ () => this.openFaq("faq5")}>How do I manually invite candidates?</div>
        <ToggleDisplay show={this.state.faq5}>
          <div className="faqSection" id="faq5" >
              Step 1: Go to Add user <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description <br/>
              Step 2: Enter email <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description<br/>
              Step 3: Some step<br/>
              - Some step description<br/>
              - Some step description<br/>
              - Some step description
              <div>
              <img
                src={"icons/playIcon" + this.props.jpg}
                alt=""
                style={{height: "20px", width: "20px", marginRight: '5px', float: 'left', verticalAlign: 'bottom'}}
                />
                <div className= 'clickableNoUnderline' style={{color:'#76defe', display: "inlineBlock"}}>Watch how to request an ATS integration</div>
              </div>              <div style={{textAlign: 'center'}}> Was this answer helpful? <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>Yes</span> or <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>No</span></div>
          </div>
          </ToggleDisplay>
        </div>

        <div className="faqHeader">
        <div onClick={ () => this.openFaq("faq6")}>How do I manually invite candidates?</div>
        <ToggleDisplay show={this.state.faq6}>
          <div className="faqSection" id="faq6" >
              Step 1: Go to Add user <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description <br/>
              Step 2: Enter email <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description<br/>
              Step 3: Some step<br/>
              - Some step description<br/>
              - Some step description<br/>
              - Some step description
              <div>
              <img
                src={"icons/playIcon" + this.props.jpg}
                alt=""
                style={{height: "20px", width: "20px", marginRight: '5px', float: 'left', verticalAlign: 'bottom'}}
                />
                <div className= 'clickableNoUnderline' style={{color:'#76defe', display: "inlineBlock"}}>Watch how to add another evaluation</div>
              </div>              <div style={{textAlign: 'center'}}> Was this answer helpful? <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>Yes</span> or <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>No</span></div>
          </div>
          </ToggleDisplay>
        </div>
        <div className="faqHeader">
        <div onClick={ () => this.openFaq("faq7")}>How do I manually invite candidates?</div>
        <ToggleDisplay show={this.state.faq7}>
          <div className="faqSection" id="faq7" >
              Step 1: Go to Add user <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description <br/>
              Step 2: Enter email <br/>
              - Some step description <br/>
              - Some step description <br/>
              - Some step description<br/>
              Step 3: Some step<br/>
              - Some step description<br/>
              - Some step description<br/>
              - Some step description
              <div>
              <img
                src={"icons/playIcon" + this.props.jpg}
                alt=""
                style={{height: "20px", width: "20px", marginRight: '5px', float: 'left', verticalAlign: 'bottom'}}
                />
                <div className= 'clickableNoUnderline' style={{color:'#76defe', display: "inlineBlock"}}>Watch how to take an evaluation yourself</div>
              </div>              <div style={{textAlign: 'center'}}> Was this answer helpful? <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>Yes</span> or <span className= 'clickableNoUnderline' style={{color:"#76defe"}}>No</span></div>
          </div>
          </ToggleDisplay>
        </div>
</div>





      <div className="marginBottom40px whiteText">
        <div id="whatsNew">{"What's New"}</div>
      </div>
      <div className=" marginBottom40px whiteText">
        <div id="saved">Saved Videos</div>
      </div>
      <div className=" marginBottom40px whiteText">
        <div id="candidates">Candidates</div>
      </div>
      <div className=" marginBottom40px whiteText">
        <div id="employees">Employees</div>
      </div>
      <div className=" marginBottom40px whiteText">
        <div id="administration">Administration</div>
      </div>


      </div>
      );

}
}
  function mapStateToProps(state) {
    return {
      currentUser: state.users.currentUser,
      png: state.users.png,
      jpg: state.users.jpg
    };
  }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({
        }, dispatch);
    }
  export default connect(mapStateToProps, mapDispatchToProps)(HelpCenter);
