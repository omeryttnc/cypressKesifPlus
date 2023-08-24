import browserUtilities from "../../support/BrowserUtilities";

describe("backend testi", () => {
  // Response response;
  // JsonPath jsonPath;
  // response= given().
  // jsonPath = response.jsonPath()
  it("test 1 default degerler ile", () => {
    cy.request("POST", "/api/public/register", {
      firstName: "omer",
      lastName: "ali",
      email: "omerad2@asd.asd",
      plainPassword: "fQy*s5YinpE**ia",
      confirmPassword: "fQy*s5YinpE**ia",
    })
    .then((data) => {
      console.log(data);
      console.log(data.body.email);
    });
  });

  it("test 2 options kullanarak ", () => {
    cy.request({
      method: "POST",
      url: "/api/public/register",
      body: {
        firstName: "omer",
        lastName: "ali",
        email: "omerad2@asd.asd",
        plainPassword: "fQy*s5YinpE**ia",
        confirmPassword: "fQy*s5YinpE**ia",
      },
    }).then((data) => {
      console.log(data);
      console.log(data.body.email);
    });
  });

  it("test 3 api plugin ile ", () => {
    cy.api({
      method: "POST",
      url: "/api/public/register",
      body: {
        firstName: "omer",
        lastName: "ali",
        email: "omerad255@asd.asd",
        plainPassword: "fQy*s5YinpE**ia",
        confirmPassword: "fQy*s5YinpE**ia",
      },
    }).then((data) => {
      console.log(data);
      console.log(data.body.email);
    });
  });

  it("fixture", () => {
    cy.fixture("registerFakeData.json").then((fix) => {
      console.log(fix.firstName);
      cy.log(fix.lastName);
    });
  });

  it.only("test 4 api fixure ile ", () => {

    browserUtilities.createFakeDataForRegistration();


    cy.fixture("registerFakeData.json").then((fixtureData) => {
      cy.api({
        method: "POST",
        url: "/api/public/register",
        body: fixtureData,
      }).then((data) => {
        console.log(data);
        console.log(data.body.email);
        expect(fixtureData.email).to.equal(data.body.email)
      });
    });
  });


  it('writeFile',()=>{
    browserUtilities.createFakeDataForRegistration()
  })
});
