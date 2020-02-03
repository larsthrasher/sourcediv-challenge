import img1 from '../.next/static/images/img1.png'
import img2 from '../.next/static/images/img2.png'
import img3 from '../.next/static/images/img3.png'
import img4 from '../.next/static/images/img4.png'
import img5 from '../.next/static/images/img5.png'


const Company = () => (
  <div className="row">
    <div className="col-md">
    </div>
    <div className="col-md">
      <img src={img1} width="75%"/>
    </div>
    <div className="col-md">
      <img src={img2} width="75%"/>
    </div>
    <div className="col-md">
      <img src={img3} width="75%"/>
    </div>
    <div className="col-md">
      <img src={img4} width="75%"/>
    </div>
    <div className="col-md">
      <img src={img5} width="75%"/>
    </div>
    <div className="col-md">
    </div>
  </div>
);

export default Company;
