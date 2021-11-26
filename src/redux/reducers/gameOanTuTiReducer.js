const stateDefault = {
  mangItem: [
    { item: "keo", hinhAnh: "./img/gameOanTuTi/keo.png", chon: true },
    { item: "bua", hinhAnh: "./img/gameOanTuTi/bua.png", chon: false },
    { item: "bao", hinhAnh: "./img/gameOanTuTi/bao.png", chon: false },
  ],
  computer: { item: 1, hinhAnh: "./img/gameOanTuTi/keo.png" },
  chon: true,
  ketQua: "I'm iron man, i love you 3000 !!!",
  soBanThang: 0,
  tongSoBanChoi: 0,
};

export const gameOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_ITEM": {
      let mangItemUpdate = [...state.mangItem];
      mangItemUpdate = mangItemUpdate.map((item, index) => {
        if (item.item == action.item) {
          return { ...item, chon: true };
        }
        return { ...item, chon: false };
      });
      state.mangItem = mangItemUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let soRanDom = Math.floor(Math.random() * 3);
      let computerRandom = state.mangItem[soRanDom];
      state.computer = { ...computerRandom };
      return { ...state };
    }
    case "END_GAME": {
      let player = state.mangItem.find((item) => item.chon === true);
      let computer = state.computer;
      let kqThang = "I'm iron man, i love you 3000 !!!";
      let kqHoa = "hòa nhau !!!";
      let kqThua = "thua sml !!!";

      switch (player.item) {
        case "keo":
          {
            if (computer.item === "keo") {
              state.ketQua = kqHoa;
            } else if (computer.item === "bua") {
              state.ketQua = kqThua;
            } else {
              state.ketQua = kqThang;
              state.soBanThang += 1;
            }
          }
          break;
        case "bua":
          {
            if (computer.item === "keo") {
              state.soBanThang += 1;
              state.ketQua = kqThang;
            } else if (computer.item === "bua") {
              state.ketQua = kqHoa;
            } else {
              state.ketQua = kqThua;
            }
          }
          break;
        case "bao":
          {
            if (computer.item === "keo") {
              state.ketQua = kqThua;
            } else if (computer.item === "bua") {
              state.soBanThang += 1;
              state.ketQua = kqThang;
            } else {
              state.ketQua = kqHoa;
            }
          }
          break;
      }
      state.tongSoBanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
