import img1 from '../static/images/img1.png'
import img2 from '../static/images/img2.png'
import img3 from '../static/images/img3.png'
import img4 from '../static/images/img4.png'
import img5 from '../static/images/img5.png'


const Company = () => (
  <div className="row mt-5">
    <div className="col-md">
    </div>
    <div className="col-md">
      <img  className="img-responsive" src={img1} />
    </div>
    <div className="col-md">
      <img className="img-responsive" src={img2} />
    </div>
    <div className="col-md">
      <img className="img-responsive" src={img3} />
    </div>
    <div className="col-md">
      <img  className="img-responsive" src={img4} />
    </div>
    <div className="col-md">
      <img className="img-responsive" src={img5} />
    </div>
    <div className="col-md">
    </div>
  </div>
);

export default Company;
