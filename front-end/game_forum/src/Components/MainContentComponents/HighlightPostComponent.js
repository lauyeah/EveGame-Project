// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   Card,
//   CardBody,
//   CardImg,
//   CardText,
//   CardTitle,
//   Col,
//   Row,
//   Container,
// } from "reactstrap";

// function HighlightPostComponent(props) {
//   let storeRedux = useSelector((state) => state);

//   let firstPinPost = storeRedux.firstPinPost;
//   let secondPinPost = storeRedux.secondPinPost;
//   let thirdPinPost = storeRedux.thirdPinPost;
//   let fourthPinPost = storeRedux.fourthPinPost;
//   let fifthPinPost = storeRedux.fifthPinPost;

//   let link1 = "/posts/" + firstPinPost.id;
//   let link2 = "/posts/" + secondPinPost.id;
//   let link3 = "/posts/" + thirdPinPost.id;
//   let link4 = "/posts/" + fourthPinPost.id;
//   let link5 = "/posts/" + fifthPinPost.id;

//   if (
//     firstPinPost.user &&
//     secondPinPost.user &&
//     thirdPinPost.user &&
//     fourthPinPost.user &&
//     fifthPinPost.user
//   ) {
//     return (
//       <Container className="pined-post">
//         <Row className="pt-3">
//           <Col className="col-md-8 col-12">
//             <Card className="border-0">
//               <Link to={link1}>
//                 <CardImg alt="" src={firstPinPost.postCover} />
//               </Link>
//               <CardBody>
//                 <CardTitle tag="h5">
//                   <Link to={link1}>{firstPinPost.title}</Link>
//                 </CardTitle>

//                 <CardText className="d-flex align-items-center gap-2">
//                   <img
//                     alt="post-user-avatar"
//                     src={firstPinPost.user.avatar}
//                     width={24}
//                     height={24}
//                   />
//                   <small className="text-muted">
//                     {firstPinPost.user.fullname}
//                   </small>
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>

//           <Col className="col-md-4 col-6 second-pin-post">
//             <Card className="border-0">
//               <Link to={link2}>
//                 <CardImg alt="" src={secondPinPost.postCover} />
//               </Link>

//               <CardBody className="px-0 px-md-3">
//                 <CardTitle tag="h5">
//                   <Link to={link2}>{secondPinPost.title}</Link>
//                 </CardTitle>
//                 <CardText>
//                   <small className="text-muted">
//                     {secondPinPost.user.fullname}
//                   </small>
//                 </CardText>
//                 <CardText>
//                   {secondPinPost.postContent.slice(0, 400)}...
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>

//           <Col className="col-md-4 col-6">
//             <Card className="border-0">
//               <Link to={link3}>
//                 <CardImg alt="" src={thirdPinPost.postCover} />
//               </Link>
//               <CardBody>
//                 <CardTitle tag="h5">
//                   <Link to={link3}>{thirdPinPost.title}</Link>
//                 </CardTitle>
//                 <CardText>
//                   <small className="text-muted">
//                     {thirdPinPost.user.fullname}
//                   </small>
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>

//           <Col className="col-md-4 col-6">
//             <Card className="border-0">
//               <Link to={link4}>
//                 <CardImg alt="" src={fourthPinPost.postCover} />
//               </Link>
//               <CardBody>
//                 <CardTitle tag="h5">
//                   <Link to={link4}>{fourthPinPost.title}</Link>
//                 </CardTitle>
//                 <CardText>
//                   <small className="text-muted">
//                     {fourthPinPost.user.fullname}
//                   </small>
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>

//           <Col className="col-md-4 col-6">
//             <Card className="border-0">
//               <Link to={link5}>
//                 <CardImg alt="" src={fifthPinPost.postCover} />
//               </Link>
//               <CardBody>
//                 <CardTitle tag="h5">
//                   <Link to={link5}>{fifthPinPost.title}</Link>
//                 </CardTitle>
//                 <CardText>
//                   <small className="text-muted">
//                     {fifthPinPost.user.fullname}
//                   </small>
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default HighlightPostComponent;

import React from "react";
import { Row, Container } from "reactstrap";
import Pin1Component from "./Pin1Component";
import Pin2Component from "./Pin2Component";
import Pin3Component from "./Pin3Component";
import Pin4Component from "./Pin4Component";
import Pin5Component from "./Pin5Component";

function HighlightPostComponent(props) {
  return (
    <Container className="pined-post">
      <Row className="pt-3">
        <Pin1Component />
        <Pin2Component />
        <Pin3Component />
        <Pin4Component />
        <Pin5Component />
      </Row>
    </Container>
  );
}

export default HighlightPostComponent;
