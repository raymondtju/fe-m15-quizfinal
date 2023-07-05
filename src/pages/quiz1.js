import React, { useEffect, useState } from "react";

function Quiz1() {
  const [nilai, setNilai] = useState({
    tugas: 0,
    uts: 0,
    uas: 0,
  });
  const [akhir, setAkhir] = useState(0);
  const [grad, setGrad] = useState("E");

  function handleChange(e) {
    setNilai({
      ...nilai,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    setAkhir(
      Math.round((0.4 * nilai.tugas + 0.3 * nilai.uts + 0.3 * nilai.uas) * 10) /
        10
    );
    if (akhir >= 85) {
      setGrad("A");
    } else if (akhir >= 60) setGrad("B");
    else if (akhir >= 40) setGrad("C");
    else setGrad("E");
  }, [nilai, akhir]);

  return (
    <main className="p-5" style={{ width: "50%", margin: "0px auto" }}>
      <div className="card">
        <div className="card-header">Quiz 1</div>
        <div className="card-body">
          <h5 className="card-title pb-3">Perhitungan Nilai Akhir </h5>
          <div className="row">
            <div className="col">
              <p className="card-text">
                Nilai Tugas : {nilai.tugas}
                <br />
                {" 0 "}
                <input
                  type="range"
                  min="0"
                  max="100"
                  name="tugas"
                  value={nilai.tugas}
                  onChange={(e) => handleChange(e)}
                />
                {" 100 "}
              </p>
              <p className="card-text">
                Nilai UTS : {nilai.uts}
                <br />
                {" 0 "}
                <input
                  type="range"
                  min="0"
                  max="100"
                  name="uts"
                  value={nilai.uts}
                  onChange={(e) => handleChange(e)}
                />
                {" 100 "}
              </p>
              <p className="card-text">
                Nilai UAS : {nilai.uas}
                <br />
                {" 0 "}
                <input
                  type="range"
                  min="0"
                  max="100"
                  name="uas"
                  value={nilai.uas}
                  onChange={(e) => handleChange(e)}
                />
                {" 100 "}
              </p>
            </div>

            <div className="col">
              <p className="card-text">Nilai Akhir : {akhir}</p>
              <p
                style={{
                  fontSize: "150px",
                }}
              >
                {grad}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Quiz1;
