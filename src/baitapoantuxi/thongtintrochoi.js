import React, { Component } from "react";
import { connect } from "react-redux";
class Thongtintrochoi extends Component {
  render() {
    const { ketQua, soBanThang, tongSoBanChoi } = this.props;
    return (
      <>
        <div className="text__game">
          <div className="thang__thua text-warning">{ketQua}</div>
          <div className="sobanthang text-success">
            số bàn thắng : {soBanThang}
          </div>
          <div className="sobanchoi text-info">
            Tổng Số bàn chơi : {tongSoBanChoi}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.baiTapTuXiReducer.ketQua,
    soBanThang: state.baiTapTuXiReducer.soBanThang,
    tongSoBanChoi: state.baiTapTuXiReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps)(Thongtintrochoi);
