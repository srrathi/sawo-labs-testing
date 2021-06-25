import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { FaSun, FaMoon } from "react-icons/fa";

const WeatherCard = ({ cityData }) => {
  return (
    <Container className="mt-5">
      <Card
        color="muted"
        style={{
          boxShadow:
            "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",
          maxWidth: "600px",
        }}
        className="weather-card mx-auto p-3"
      >
        <Row>
          <Col className="align-middle my-auto" md="4" xs="12">
            <CardImg width="100%" src={cityData.imageUrl} alt="City Image" />
          </Col>
          <Col md="8" xs="12">
            <CardBody>
              <CardTitle tag="h5">
                {cityData.city}, {cityData.region}, {cityData.country}
              </CardTitle>
              <hr className="w-50" />
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {cityData.condition}
              </CardSubtitle>
              <div className="d-flex m-2">
                <div className="text-align-center p-2">
                  <h1 className="display-2">
                    {cityData.actualTempDegC}&nbsp;&#8451;
                  </h1>
                  <p>Feel {cityData.feelTempDegC} &#8451;</p>
                </div>
                <div className="p-2">
                  <img
                    alt="weather-condition"
                    src={cityData.conditionIcon}
                    className="img-fluid"
                  ></img>
                </div>
              </div>
              <div className="d-flex justify-content-between m-2">
                <div className="text-align-center p-2">
                  <p>Lat. - {cityData.lat}</p>
                  <p>Long. - {cityData.lon}</p>
                </div>
                <div className="p-2">
                  {cityData.day ? <FaSun /> : <FaMoon />}
                  <h5 className="mt-3">
                    {cityData.dateTime.split(" ")[0].split("-")[2] +
                      "-" +
                      cityData.dateTime.split(" ")[0].split("-")[1] +
                      "-" +
                      cityData.dateTime.split(" ")[0].split("-")[0]}
                  </h5>
                </div>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default WeatherCard;
