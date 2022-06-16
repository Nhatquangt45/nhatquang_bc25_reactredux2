import React, { Component } from "react";
import UserPlay from "./userPlay";
import Thongtintrochoi from "./thongtintrochoi";
import ComputerPlay from "./computerPlay";
import { connect } from "react-redux";
class Index extends Component {
  render() {
    return (
      <>
        <div className="bg_gametuxi">
          <div className="row text-center mt-4">
            <div className="col-4">
              <UserPlay />
            </div>
            <div className="col-4">
              <Thongtintrochoi />
              <button
                className="btn btn-success button__game"
                onClick={() => {
                  this.props.playGame();
                }}
              >
                Play Game
              </button>
            </div>
            <div className="col-4">
              <ComputerPlay />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      //khai báo hàm lặp đi lặp lại
      let count = 0;
      let randomComputerItem = setInterval(() => {
        let soNgauNhien = Math.floor(Math.random() * 3);
        dispatch({
          type: "PLAY_GAME",
          soNgauNhien,
        });
        count++;
        if (count >= 10) {
          //dừng hàm setInterval
          clearInterval(randomComputerItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(Index);
