import React from "react";
import "../css/appinfo.css";
import AppStore from "../imgs/appstore.svg";
import PlayMarket from "../imgs/gpservice.svg";
import iph12 from "../imgs/../imgs/iph12.png";
import iph12oc from "../imgs/../imgs/iph12oc.png";

const AppInfo = () => {
  return (
    <div className="appinfo" id="download">
      <div className="info_blue">
        <div className="info-text">
          <h1>Хватит тратить свое время в очередях</h1>
          <p>
            Приложение скоро будет доступно для бета тестирования в AppStore и
            Google Play
          </p>
          <div className="info-apps">
            <img src={AppStore} alt="app"></img>
            <img src={PlayMarket} alt="app"></img>
          </div>
          <div className="photos-iph">
            <img src={iph12oc} alt="ip" />
          </div>
        </div>
        <div className="info-photos">
          <img src={iph12} alt="ip" className="iphoneimg" />
          <img src={iph12oc} alt="ip" className="iphoneimg" />
        </div>
      </div>
    </div>
  );
};
export default AppInfo;
