import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Col,
  Row,
  CardText,
  CardTitle,
} from "reactstrap";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { Link } from "react-router-dom";

function FooterWrapperCommponent(props) {
  return (
    <div className="footer-wrapper pt-3">
      <Card className="rounded-0">
        <CardHeader className="text-bg-primary rounded-0">
          <Container>
            <Row className="d-inline-flex gap-2 footer-header-card text-nowrap">
              <Col>
                <Link to="/topics/1">NEWS</Link>
              </Col>
              <Col>SẢN PHẨM CÔNG NGHỆ MỚI</Col>
              <Col>KHUYẾN MÃI</Col>
              <Col>SỰ KIỆN</Col>
              <Col>VIDEO</Col>
            </Row>
          </Container>
        </CardHeader>
        <CardBody>
          <Container>
            <Row className="d-flex footer-body-card justify-content-between">
              <Col>
                <Card className="border-0">
                  <CardBody className="px-0 mx-0">
                    <CardTitle>EveGame</CardTitle>
                    <CardText>Nội quy diễn đàn</CardText>
                    <CardText>Thỏa thuận sử dụng dịch vụ</CardText>
                    <CardText>Góp ý</CardText>
                    <CardText>Hỗ trợ, hướng dẫn</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="border-0">
                  <CardBody className="px-0 mx-0">
                    <CardTitle>Cộng đồng</CardTitle>
                    <CardText>Dota2</CardText>
                    <CardText>League of Legends</CardText>
                    <CardText>DotA</CardText>
                    <CardText>FO4</CardText>
                    <CardText>Pokemon</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="border-0">
                  <CardBody className="px-0 mx-0">
                    <CardTitle>
                      <Link to={"/topics"}>TOPICS</Link>
                    </CardTitle>
                    <CardText>
                      <Link to={"/topics/2"}>Real-time strategy (RTS)</Link>
                    </CardText>
                    <CardText>
                      <Link to={"/topics/3"}>Shooters (FPS and TPS)</Link>
                    </CardText>
                    <CardText>
                      <Link to={"/topics/4"}>
                        Multiplayer online battle arena (MOBA)
                      </Link>
                    </CardText>
                    <CardText>
                      <Link to={"/topics/5"}>
                        Role-playing (RPG, ARPG, and More)
                      </Link>
                    </CardText>
                    <CardText>
                      <Link to={"/topics/6"}>Simulation and sports</Link>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="border-0">
                  <CardBody className="px-0 mx-0">
                    <CardTitle>Theo dõi chúng tôi</CardTitle>
                    <CardText className="d-flex align-items-center gap-2">
                      <AiFillFacebook />
                      Facebook
                    </CardText>
                    <CardText className="d-flex align-items-center gap-2">
                      <AiFillYoutube />
                      Youtube
                    </CardText>
                    <CardText className="d-flex align-items-center gap-2">
                      <BiLogoTiktok />
                      Tiktok
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </CardBody>
        <CardFooter>
          <Container className="footer-footer-card text-secondary">
            <Row className="d-flex justify-content-evenly text-nowrap text-center">
              <Col>Chịu trách nhiệm nội dung: Bế Đức Lẩu</Col>
              <Col>© 2023 Công ty TNHH MXH EveGame</Col>
              <Col>Địa chỉ: Số 69 Chín Mươi Sáu, P. Sáu Chín, TP Sáu Chín</Col>
              <Col>Số điện thoại: 0373333140</Col>
              <Col>MST: 6969696969</Col>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              Giấy phép thiết lập MXH số 69/GP-XXX, Ký ngày: 06/9/1969
            </Row>
          </Container>
        </CardFooter>
      </Card>
    </div>
  );
}

export default FooterWrapperCommponent;
