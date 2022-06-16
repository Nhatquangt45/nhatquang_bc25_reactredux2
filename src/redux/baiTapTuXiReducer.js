const stateDefault = {
  mangDatCuoc: [
    { id: "keo", hinhAnh: "./img/keo.png", datCuoc: true },
    { id: "bua", hinhAnh: "./img/bua.png", datCuoc: true },
    { id: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, i love you 3000 !!! ",
  soBanThang: 0,
  tongSoBanChoi: 0,
  computer: { id: "keo", hinhAnh: "./img/Keo.png" },
};

const baiTapTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      //bước reset tất cả index === false
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.id === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      //cách 1
      // // let index = mangCuocUpdate.findIndex((qc) => qc.id === action.maCuoc);
      // // if (index !== -1) {
      // //   mangCuocUpdate[index].datCuoc = true;
      // // }
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "PLAY_GAME": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }

    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let comPuter = state.computer;

      switch (player.id) {
        case "keo": {
          if (comPuter.id === "keo") {
            state.ketQua = " Hên nha !!! ";
          } else if (comPuter.id === "bua") {
            state.ketQua = " Mày Hả Bười :))) ";
          } else if (comPuter.id === "bao ") {
            state.ketQua = " Mày Biết Bố Mày Là Ai Không :)) ";
            state.soBanThang += 1;
          }
          break;
        }
      }

      switch (player.id) {
        case "bua": {
          if (comPuter.id === "keo") {
            state.ketQua = " Mày Biết Bố Mày Là Ai Không :)) ";
            state.soBanThang += 1;
          } else if (comPuter.id === "bua") {
            state.ketQua = " Hên nha !!! ";
          } else if (comPuter.id === "bao ") {
            state.ketQua = " Mày Hả Bười :))) ";
          }

          break;
        }
      }

      switch (player.id) {
        case "bao":
          {
            if (comPuter.id === "keo") {
              state.ketQua = " Mày Hả Bười :))) ";
            } else if (comPuter.id === "bua") {
              state.ketQua = " Mày Biết Bố Mày Là Ai Không :)) ";
              state.soBanThang += 1;
            } else if (comPuter.id === "bao ") {
              state.ketQua = " Hên nha !!! ";
            }
          }
          break;
        default:
          return { ...state };
      }

      state.tongSoBanChoi += 1;

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default baiTapTuXiReducer;
