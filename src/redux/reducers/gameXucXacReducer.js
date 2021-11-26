const stateDefault = {
  banChon: true, //true: tài - false: xỉu
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
  ],
};

export const gameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state };
    }
    case "PLAY_GAME": {
      //random 3 số ngẫu nhiên
      let mangXXNN = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //Từ soNgauNhien tạo ra object xúc xắc ngẫu nhiên
        let xucXacNN ={hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`, diem: soNgauNhien};
        mangXXNN.push(xucXacNN);

      }
      state.mangXucXac = mangXXNN;
      //Cập nhất số bàn chơi
      state.tongSoBanChoi += 1;
      //Cập nhật số bàn thắng
      let tongDiem = state.mangXucXac.reduce((diem,xucXac,index) => {
          return diem += xucXac.diem
      },0);
      
      if ((state.banChon === true && tongDiem > 11) || (state.banChon === false && tongDiem <= 11) ) {
          state.soBanThang +=1;
      }



      return {...state}
    }
    default:
      return { ...state };
  }

  return { ...state };
};
