import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <section className="box-app position-relative">
        <div className="container position-relative z-1">
          <div className="row align-items-center py-5">
            <div className="col-lg-5">
              <h4 className=" wow fadeInDown">
                Maharashtra-cabs is Available For India Now.
              </h4>
              <p className="text-md-medium pb-3 wow fadeInUp">
                Manage all your cabs on the go with the Maharashtra-cabs
              </p>
            </div>
            <div className="col-lg-7">
              <div className="box-app-img wow fadeIn">
                <img
                  src="/assets/imgs/app/app-1/cars.png"
                  alt="Maharashtra-cabs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
