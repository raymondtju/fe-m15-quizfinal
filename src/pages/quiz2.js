import React, { useState } from "react";

const galPic = [
  "https://lara000.000webhostapp.com/static/media/img1.86261745194a78b73a99.jpg",
  "https://lara000.000webhostapp.com/static/media/img2.c4d9aaf797ebf7004572.jpg",
  "https://lara000.000webhostapp.com/static/media/img3.83c85ee77c01642d4758.jpg",
  "https://lara000.000webhostapp.com/static/media/img4.b0b68f3777ff45096e9a.jpg",
  "https://lara000.000webhostapp.com/static/media/img5.04fd61bb2a978a8a06e3.jpg",
];

function Quiz2() {
  const [pos, setPos] = useState(0);

  function next() {
    if (pos >= 4) return;
    else {
      setPos(pos + 1);
    }
  }

  function back() {
    if (pos <= 0) return;
    else {
      setPos(pos - 1);
    }
  }
  return (
    <main className="p-5" style={{ width: "50%", margin: "0px auto" }}>
      <div className="card">
        <div className="card-header">Quiz 2</div>
        <div className="card-body">
          <h5 className="card-title pb-3">Galeri Gambar ({pos + 1},5)</h5>

          <div className="row">
            <div className="col text-end">
              <button onClick={() => back()}>{"<"}</button>
            </div>
            <div className="col text-center">
              <img src={galPic[pos]} alt="" width={"100%"} />
            </div>
            <div className="col">
              <button onClick={() => next()}>{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Quiz2;
