import React, { useState, useEffect } from "react";
import { fetchReports } from "../api/api";
const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    Promise.all([fetchReports()]).then(([reports]) => {
      try {
        console.log(reports);
        setReports(reports);
      } catch (error) {
        console.error("Uh oh! Problems with Promises");
      }
    });
  }, []);

  return (
    <div>
      <div className="reportsContainer">
        <div className="nav">
          <h1>PHENOMENA</h1>
        </div>
        <div className="reportsContent">
          <div className="reportList">
            {console.log(reports)}
            {reports.map((report) => {
              return (
                <div className="report" key={report.id}>
                    <h3>{report.title.toUpperCase()}</h3>
                  <ul>
                    <li>Location:  {report.location}</li>
                    <li>Description:  {report.description}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="photoCred">
        Photo by
        <a href="https://unsplash.com/@mischievous_penguins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Casey Horner
        </a>
      </div>
    </div>
  );
};

export default Reports;
