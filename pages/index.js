import Layout from '../components/layout';
import Company from '../components/company';
import words from '../static/images/words.png'

const Index = () => (
  <Layout>
    <div className="row" style={{ marginTop: "10%"}}>
      <div className="col-lg">
        <img src={words} width="75%"  />
      </div>
      <div className="col-lg text-center">
        <h1>Your Teams Onboarding</h1>
        <h1>in a fast flexible workplace</h1>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="name@company.name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div class="input-group-append">
          <button class="btn btn-primary" type="button">Sign Up Free</button>
          </div>
      </div>
      </div>
    </div>

  <Company />
  </Layout>
);

export default Index;
