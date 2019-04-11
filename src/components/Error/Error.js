import React, { Component } from "react";
import "./Error.scss";
import posed from "react-pose";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../hoc/Aux/Aux";


const ErrorBox = posed.div({
  visible: {
    applyAtStart: { display: "block" },
    opacity: 1,
    zIndex: 1000
  },
  hidden: {
    applyAtEnd: { display: "none !important" },
    opacity: 0,
    zIndex: -1
  }
});

export class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applyAtStart: { display: "block" },
    };
  }



  componentDidUpdate(){
    if(this.state.show === false){
      console.log(this.state)
    }
    else{

    }

 
  }
  render() {
    

    return (
    <Aux>
      <ErrorBox pose={this.props.error ? "visible" : "hidden"}>
          <Backdrop>
            <div className="Error">
              <h1>{this.props.heading}</h1>
              <p>{this.props.message}</p>
              <span onClick={this.props.close} className="option">
                {this.props.buttonText}
              </span>
            </div>
          </Backdrop>
        </ErrorBox>
    </Aux>
    );
  }
}
