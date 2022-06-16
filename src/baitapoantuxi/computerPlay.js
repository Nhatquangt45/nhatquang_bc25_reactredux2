import React, { Component } from "react";
import { connect } from "react-redux";
class ComputerPlay extends Component {
  render() {
    return (
      <>
        <div className="bubbles">
          <div className="theThink2">
            <img
              className="mt-4"
              width={100}
              height={100}
              src={this.props.computer.hinhAnh}
            ></img>
          </div>
          <div className="speech-bubble"></div>
          <img
            className="bg_player"
            src="./img/playerComputer.png"
            alt=""
          ></img>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.baiTapTuXiReducer.computer,
  };
};

export default connect(mapStateToProps, null)(ComputerPlay);
