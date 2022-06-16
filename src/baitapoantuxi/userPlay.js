import React, { Component } from "react";
import { connect } from "react-redux";
class UserPlay extends Component {
  render() {
    return (
      <>
        <div className="bubbles ">
          <div className="theThink ">
            <img
              className="mt-4"
              style={{ transform: "rotate(180deg)" }}
              width={100}
              height={100}
              src={
                this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                  .hinhAnh
              }
              alt=""
            ></img>
          </div>
          <div className="speech-bubble"></div>
          <img className="bg_player" src="./img/player.png" alt=""></img>
        </div>

        <div className="row ml-5 ">
          {this.props.mangDatCuoc.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <button
                  className="btn_item"
                  onClick={() => {
                    this.props.datCuoc(item.id);
                  }}
                >
                  <img src={item.hinhAnh} alt=""></img>
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.baiTapTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "DAT_CUOC",
        maCuoc,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPlay);
