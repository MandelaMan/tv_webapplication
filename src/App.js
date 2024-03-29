import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { useKeepAwake } from "@sayem314/react-native-keep-awake";
// import BusinessDevelopment from "./components/BusinessDevelopment";
// import Brokers from "./components/Brokers";
// import Birthdays from "./components/Birthdays";
// import PreviousMonthBD from "./components/PreviousMonthBD";
// import LoadScreen from "./components/reusables/LoadScreen";
// import Adverts from "./components/Adverts";
// import Birthday from "./screens/Birthday";

import SalesLeaderboard from "./screens/SalesLeaderboard";
// import Announcments from "./screens/Announcments";

const App = () => {
  const [loading, setloading] = useState(true);

  const [chartLoading, setChartLoading] = useState(true);

  const [salesMemberLoading, setSalesMemberLoading] = useState(true);

  const [generalSalesInfo, setGeneralSalesInfo] = useState(true);

  const [salesMembers, setsalesMembers] = useState([]);

  const [targetTotal, settargetTotal] = useState(0);

  const [targetAchieved, settargetAchieved] = useState(0);

  const [paidBusiness, setpaidBusiness] = useState(0);

  const [monthValues, setmonthValues] = useState([]);

  const [topPerson, settopPerson] = useState(null);

  const [quarterTotals, setQuarterTotals] = useState(null);

  const fetchBarChartData = () => {
    !loading && setloading(true);

    fetch("https://portal.micglobalrisks.com:8082/leaderboard/api/sales")
      .then((response) => response.json())
      .then((data) => {
        const amounts = data.map((item) => Math.round(item.amount));
        setmonthValues(amounts);

        let january = data.filter((item) => item.MonthName === "January")[0];
        let february = data.filter((item) => item.MonthName === "February")[0];
        let march = data.filter((item) => item.MonthName === "March")[0];

        let quarter_totals = january.amount + february.amount + march.amount;

        setQuarterTotals(quarter_totals);

        setChartLoading(false);

        setloading(false);
      });
  };

  const fetchIndividualTargets = () => {
    !loading && setloading(true);

    fetch(
      "https://portal.micglobalrisks.com:8082/leaderboard/api/individual-targets"
    )
      .then((response) => response.json())
      .then((data) => {
        setsalesMembers(data);

        setSalesMemberLoading(false);

        setloading(false);
      });
  };

  const getBestPersonLastMonth = () => {
    !loading && setloading(true);

    fetch(
      "https://portal.micglobalrisks.com:8082/leaderboard/api/prev-month-individual-targets"
    )
      .then((response) => response.json())
      .then((data) => {
        // let top = data.sort((a, b) => b.paid - a.paid);

        // top = top[0];

        settopPerson(data[0]);

        setloading(false);
      });
  };

  const fetchTargets = () => {
    !loading && setloading(true);

    fetch(
      "https://portal.micglobalrisks.com:8082/leaderboard/api/targets"
      // "https://portal.micglobalrisks.com:8082/leaderboard/api/prev-month-targets"
    )
      .then((response) => response.json())
      .then((data) => {
        settargetTotal(data.targetAmount);
        settargetAchieved(data.amountAchied);
        setpaidBusiness(data.amountPaid);

        setGeneralSalesInfo(false);

        setloading(false);
      });
  };

  const slideOneData = async () => {
    setloading(true);

    fetchIndividualTargets();
    fetchTargets();
    getBestPersonLastMonth();
    fetchBarChartData();

    setInterval(() => {
      slideOneData();
    }, 1800000);
  };

  useKeepAwake();

  useEffect(() => {
    slideOneData();

    return () => {
      // console.log("leaving after launching swiper");
    };

    // eslint-disable-next-line
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 900000,
    fade: true,
  };

  return (
    <div className="main_section">
      <Slider {...settings}>
        <div className="slide-screen">
          <div className="swiper-slide">
            <SalesLeaderboard
              chartLoading={chartLoading}
              salesMemberLoading={salesMemberLoading}
              generalSalesInfo={generalSalesInfo}
              salesMembers={salesMembers}
              quarterTotals={quarterTotals}
              targetTotal={targetTotal}
              targetAchieved={targetAchieved}
              paidBusiness={paidBusiness}
              monthValues={monthValues}
              topPerson={topPerson}
              loading={loading}
              setloading={setloading}
            />
          </div>
        </div>
        {/* <div className="slide-screen">
          <Announcments />
        </div> */}
      </Slider>
    </div>
  );
};

export default withRouter(App);
