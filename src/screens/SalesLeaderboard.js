import React from "react";
import trophy from "../images/icons/trophy.png";
import ClosedBusiness from "../components/charts/ClosedBusiness";
import { separator, remainingDays } from "../functions/helpers";
import ProfilePic from "../components/reusables/ProfilePic";
import ContentLoader from "react-content-loader";
// import { BouncingBalls } from "react-cssfx-loading";
// import BarWave from "react-cssfx-loading/lib/BarWave";

const SalesLeaderboard = ({
  salesMembers,
  targetTotal,
  targetAchieved,
  paidBusiness,
  monthValues,
  topPerson,
  loading,
  chartLoading,
  salesMemberLoading,
  generalSalesInfo,
}) => {
  const memberLoadList = [{}, {}, {}, {}, {}, {}];

  const getMonthName = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });

    return month;
  };

  const getYear = () => {
    const year = new Date().getFullYear();

    return year;
  };

  const getPreviousMonth = () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    const previousMonth = date.toLocaleString("default", { month: "long" });

    return previousMonth;
  };

  // const getPreviousYear = () => {
  //   const currentYear = new Date().getFullYear(); // 2020

  //   const previousYear = currentYear - 1;

  //   return previousYear;
  // };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          {/* <div className="boxed">
            <div className="row">
              <div className="col-md-12">
                <h4>Closed business chart for {getYear()}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ClosedBusiness monthValues={monthValues} height={300} />
              </div>
            </div>
          </div> */}
          <div className="boxed">
            <div className="row">
              <div className="col-md-12">
                <h4>Closed business chart for {getYear()}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ClosedBusiness monthValues={monthValues} height={300} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="boxed">
            <div className="row">
              <div className="col-md-12">
                <h4>
                  2<sup>nd</sup> Quarter {getYear()} April - June Sales Target
                </h4>
                <h3 className="successed">
                  $&nbsp;{separator(targetTotal * 3)}
                </h3>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <h4>Achieved Amount</h4>
                <h3 className="successed">$&nbsp;{separator(paidBusiness)}</h3>
              </div>
              <div className="col-md-6">
                <h4>Pending Amount</h4>
                <h3 className="unsuccesful">
                  $&nbsp;{separator(paidBusiness)}
                </h3>
              </div>
            </div>
          </div>
          <div className="boxed">
            <div className="row">
              <div className="col-md-12">
                <h4>
                  Broker/Direct Overall Set Target for {getMonthName()}&nbsp;
                  {getYear()}
                </h4>
                <h3 className="successed">$&nbsp;{separator(targetTotal)}</h3>
              </div>
            </div>
          </div>
          <div className="boxed">
            <div className="row">
              <div className="col-md-6">
                <h4>Booked business</h4>
                <h3 className="successed">
                  $&nbsp;{separator(targetAchieved)}
                </h3>
              </div>
              <div className="col-md-6">
                <h4>Paid business</h4>
                <h3
                  // className={`${
                  //   targetTotal - targetAchieved > 1
                  //     ? "unsuccesful"
                  //     : "successed"
                  // }`}
                  className="successed"
                >
                  $&nbsp;{separator(paidBusiness)}
                </h3>
              </div>
            </div>
          </div>
          <div className="boxed">
            <div className="row">
              <div className="col-md-12">
                <h4>
                  {targetAchieved > targetTotal
                    ? "Target exceeded by"
                    : "Pending amount"}
                </h4>
                <h3
                  className={`${
                    targetAchieved > targetTotal ? "successed" : "unsuccesful"
                  }`}
                >
                  $&nbsp;
                  {separator(
                    targetAchieved > targetTotal
                      ? targetAchieved - targetTotal
                      : targetTotal - targetAchieved
                  )}
                  {/* $&nbsp;{ targetAchieved > targetTotal ? <>{}</> : "unsuccesful"} */}
                </h3>
              </div>
            </div>
          </div>
          <div className="boxed">
            <div className="row">
              <div className="col-md-12">
                <h4>
                  {remainingDays() < 1 ? (
                    <>Target Expiry</>
                  ) : (
                    <>Days to target expiry</>
                  )}
                </h4>
                <h3>
                  {remainingDays() > 0 && (
                    <h1 className="successed">
                      <b>
                        {remainingDays()}&nbsp;Day{remainingDays() > 1 && "s"}
                      </b>
                    </h1>
                  )}
                  {remainingDays() <= 0 && (
                    <h1 className="unsuccesful">
                      <b>Last day</b>
                    </h1>
                  )}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="boxed">
            <div className="row">
              <div className="col-md-12">
                <h4>
                  Top Sales Member for {getPreviousMonth()}&nbsp;
                  {getYear()}
                </h4>
              </div>
            </div>
            <div className="row py-4">
              {topPerson.amount > 0 && topPerson.paid ? (
                <>
                  <div className="col-md-4">
                    <div className="top-sales-box">
                      <ProfilePic picture={topPerson.empID} />
                      <div className="trophy">
                        <img src={trophy} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 top-sales-box-member">
                    <h5>
                      <u>{topPerson.name}</u>
                    </h5>
                    <div className="amounts">
                      <div>
                        <h6>Booked</h6>
                        <p>
                          $&nbsp;
                          {topPerson.amount > 0
                            ? separator(topPerson.amount)
                            : topPerson.amount}
                        </p>
                      </div>
                      <div>
                        <h6>Amount paid</h6>
                        <p>
                          $&nbsp;
                          {topPerson.paid > 0
                            ? separator(topPerson.paid)
                            : topPerson.paid}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-12 mx-7">
                    <ContentLoader
                      height={140}
                      speed={1}
                      backgroundColor={"#282c34"}
                      foregroundColor={"#4e5665"}
                      viewBox="0 0 300 60"
                    >
                      {/* Only SVG shapes */}
                      <rect x="0" y="0" rx="5" ry="5" width="50" height="50" />
                      <rect x="60" y="0" rx="5" ry="5" width="130" height="8" />
                      <rect
                        x="60"
                        y="20"
                        rx="5"
                        ry="5"
                        width="100"
                        height="8"
                      />
                      <rect x="60" y="40" rx="5" ry="5" width="70" height="8" />
                    </ContentLoader>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="boxed">
            <div className="row">
              <div className="col-md-12">
                <h4>
                  Business Development Individual Target for {getMonthName()}{" "}
                  {getYear()}
                </h4>
              </div>
            </div>
            {!salesMemberLoading ? (
              <>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3" style={{ textAlign: "left" }}>
                    <b>
                      <u>Booked</u>
                    </b>
                  </div>
                  <div className="col-md-3" style={{ textAlign: "center" }}>
                    <b>
                      <u>Paid</u>
                    </b>
                  </div>
                </div>
                {salesMembers
                  .sort((a, b) => b.amount - a.amount)
                  .sort((a, b) => b.paid - a.paid)
                  .sort((a, b) => a.name - b.name)
                  .map((s, i) => (
                    <div className="row member-box" key={i}>
                      <div className="col-md-3">
                        <ProfilePic picture={s.empID} />
                      </div>
                      <div className="col-md-3">
                        <div className="the_name">
                          <p>{s.name}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="amounts"
                          style={{ textAlign: "center" }}
                        >
                          <p
                            className={
                              s.amount < 1 ? `unsuccesful` : `successed`
                            }
                          >
                            ${separator(s.amount)}
                          </p>
                          <p
                            className={s.paid < 1 ? `unsuccesful` : `successed`}
                          >
                            ${separator(s.paid)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <div className="row">
                {memberLoadList.map((m, i) => (
                  <div className="col-12">
                    <ContentLoader
                      height={140}
                      speed={1}
                      backgroundColor={"#282c34"}
                      foregroundColor={"#4e5665"}
                      viewBox="0 0 300 60"
                    >
                      {/* Only SVG shapes */}
                      <rect x="0" y="0" rx="5" ry="5" width="35" height="35" />
                      <rect x="45" y="0" rx="5" ry="5" width="140" height="7" />
                      <rect
                        x="45"
                        y="13"
                        rx="5"
                        ry="5"
                        width="100"
                        height="7"
                      />
                      <rect x="45" y="26" rx="5" ry="5" width="70" height="7" />
                    </ContentLoader>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesLeaderboard;
