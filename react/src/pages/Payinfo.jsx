import React, { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const paykey = "imp00168480";
const serverUrl = process.env.REACT_APP_SERVER_URL;

const Payinfo = ({payinfo }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);

    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const make_merchant_uid = () => {
    const current_time = new Date();
    const year = current_time.getFullYear().toString();
    const month = (current_time.getMonth() + 1).toString();
    const day = current_time.getDate().toString();
    const hour = current_time.getHours().toString();
    const minute = current_time.getMinutes().toString();
    const second = current_time.getSeconds().toString();
    const merchant_uid = "MIHEE" + year + month + day + hour + minute + second;
    return merchant_uid;
  };
  const merchant_uid = make_merchant_uid();

  const onClickPayment = async () => {
    console.log("1");
    const IMP = window.IMP; // 생략가능
    IMP.init(paykey); // 예: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: merchant_uid,
        name: payinfo.Name,
        amount: payinfo.Amount,
        buyer_email: payinfo.Email,
        buyer_name: payinfo.UserID,
        buyer_tel: payinfo.Cellphone,
      },
      function (rsp) {
         console.log("2");
        // callback
        if (rsp.success) {
          alert("결제완료");
          
        } else {
          console.log(rsp);
          alert("결제실패", rsp.error_msg, rsp.error_code);
        }
      }
    );
  };

  return (
    <div>
      <button
      type="button"
        onClick={()=>onClickPayment()}
      >
        카드결제
      </button>
    </div>
  );
};

export default Payinfo;