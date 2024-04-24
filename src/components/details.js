import { useParams, useSearchParams } from "react-router-dom";

function Details() {
  const params = useParams();
  const [searchparams] = useSearchParams();
  console.log(searchparams.get("img"));
  console.log(params.title);
  console.log(params.dis);
  return (
    <div className="details container p-5">
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${searchparams.get("img")}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{params.title}</h5>
              <p className="card-text">{params.dis}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${searchparams.get("img")}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{params.title}</h5>
          <div className="card-text">{params.dis}</div>
        </div>
      </div> */}
    </div>
  );
}

export default Details;
