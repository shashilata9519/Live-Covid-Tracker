import React, { useEffect ,useState} from "react";

const Covid = () => {

  const [data,setData]=useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      //   console.log(res);
      const actualData = await res.json();
      // console.log(actualData.statewise[0]);
      setData(actualData.statewise[0])
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1 className="text-center my-3"><marquee><span className="txt">&#128308; Live</span> </marquee></h1>
      <h2 className="text-center text-white f-4">COVID-19 CORONAVIRUS TRACKER</h2>

      <section className="container ">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body bg-primary">
            <h5 className="card-title"><span>Our</span> Country</h5>
            <h6 className="card-subtitle mb-2 ">INDIA</h6>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body bg-info">
            <h5 className="card-title"><span>Total</span> recovered</h5>
            <h6 className="card-subtitle mb-2 ">{data.recovered}</h6>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body bg-warning">
            <h5 className="card-title"><span>total</span>  confirmed</h5>
            <h6 className="card-subtitle mb-2 ">{data.confirmed}</h6>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body bg-danger">
            <h5 className="card-title"><span>total</span> death</h5>
            <h6 className="card-subtitle mb-2 ">{data.deaths}</h6>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body bg-secondary">
            <h5 className="card-title"><span>total</span> active</h5>
            <h6 className="card-subtitle mb-2 ">{data.active}</h6>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body bg-success">
            <h5 className="card-title"><span>last</span> updated</h5>
            <h6 className="card-subtitle mb-2 ">{data.lastupdatedtime}</h6>
          </div>
        </div>

      </section>
    </>
  );
};
export default Covid;
