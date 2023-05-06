import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../Styles/register.scss";

function Register() {
  return (
    <MDBContainer fluid={true} maxWidth="md">
      <MDBCard
        className="mx-auto my-5 p-5 shadow-5"
        style={{
          width: "50%",
          height: "75%",
          marginTop: "-60px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <h2 className="fw-bold mb-5" style={{ color: "#333" }}>
            Register now
          </h2>
          <MDBRow>
            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="First name"
                id="form1"
                type="text"
              />
            </MDBCol>

            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Last name"
                id="form1"
                type="text"
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Niveau"
                id="form1"
                type="text"
              />
            </MDBCol>

            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Specialité"
                id="form1"
                type="text"
              />
            </MDBCol>
          </MDBRow>
          <MDBCol col="6">
            <MDBInput wrapperClass="mb-4" label="Tel" id="form1" type="text" />
          </MDBCol>

          <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
          />

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Subscribe to our newsletter"
            />
          </div>

          <MDBBtn className="w-100 mb-4" size="md">
            sign up
          </MDBBtn>

          <div className="text-center">
            <p>or sign up with:</p>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
