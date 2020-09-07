import icon from "../assets/notify/commit.png";
import icon1 from "../assets/notify/commit1.png";
import icon2 from "../assets/notify/commit2.png";
import icon3 from "../assets/notify/commit3.png";
import icon4 from "../assets/notify/commit4.png";
import icon5 from "../assets/notify/commit5.png";
import icon6 from "../assets/notify/commit6.png";

const notification = () => {
  const random = Math.random();

  const randomizeIcon = () => {
    switch (Math.floor(random * 7)) {
      case 0:
        return icon;
      case 1:
        return icon1;
      case 2:
        return icon2;
      case 3:
        return icon3;
      case 4:
        return icon4;
      case 5:
        return icon5;
      case 6:
        return icon6;
    }
  };

  const randomizeMessage = () => {
    switch (Math.floor(random * 7)) {
      case 0:
        return "커밋 해";
      case 1:
        return "이봐 친구, 커밋은 밥 말아 처먹은거야?";
      case 2:
        return "친구, 이걸 봐. 0 커밋이야.";
      case 3:
        return "커밋 해!!!!!!!!!!!!!!!";
      case 4:
        return "커밋하라고오ㅓㅇㄱ롱곩ㅇ로옹옥ㅇ";
      case 5:
        return "지금 당장 커밋을 하지 않으면 없애버리겠어.";
      case 6:
        return "하.. 커밋 안했잖아..";
    }
  };

  const myNotification = new Notification("커밋 요정", {
    icon: randomizeIcon(),
    body: randomizeMessage(),
  });
};

export default notification;
