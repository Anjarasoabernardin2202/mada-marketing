import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFolder, faMapMarkedAlt,  faDownload, faUser , faUserCircle   } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faInternetExplorer  } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container,  Tooltip, OverlayTrigger, Form, Navbar, Nav,  } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ChoosePhotoWidget } from "../components/Widgets";
import { Routes } from "../routes";
import Profile3 from "../assets/img/cv.png";
import MadaLogo from "../assets/img/technologies/call.svg";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import ReactMockupImg from "../assets/img/logoCalisto.png";
import BS5IllustrationsImg from "../assets/img/bscall.png";

import ReactLogo from "../assets/img/technologies/react-logo.svg";

import pages from "../data/pages";


export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link target="_blank" href={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faInternetExplorer} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">

            <span style={{ color: "#ff8066" }} className="ms-2 brand-text d-none d-md-inline">Mada </span>
            <span style={{ color: "#FFF" }} className="ms-2 brand-text d-none d-md-inline">Marketing</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#recrutement">Recrutement</Nav.Link>
                <Nav.Link as={HashLink} to="#projet">Nos Projet</Nav.Link>
                <Nav.Link as={HashLink} to="#contacte">Nous contacter</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button as={HashLink} to={Routes.Signin.path} variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faUserCircle} className="me-1" /> Espace Admin</Button>
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><Image className="fab fa-react" src={ReactLogo} /></div>
              <h1 className="fw-bolder text-secondary">Mada Marketing</h1>
              <p className="text-muted fw-light mb-5 h2">BPO, CENTRE D'APPEL</p>

            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faUser} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">50+</h3>
              <p className="text-gray">Agents Anglophones</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faUser} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">25+</h3>
              <p className="text-gray">Agents Francophones</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faUser} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">15+</h3>
              <p className="text-gray">Agents Italianophone</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon color="secondary" icon={faUser} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">+20</h3>
              <p className="text-gray">Germanophone</p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section section-md bg-soft pt-lg-3" id="recrutement">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Callisto Groupe</h2>
              <p className="mb-3 lead fw-bold">Callisto Groupe est Maisons mère</p>
              <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</p>

            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={ReactMockupImg} alt="Calendar Preview" />
            </Col>
          </Row>

          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Vous aimes le challenges  ?</h2>
              <p className="mb-3 lead fw-bold">
               Rejoind notre groupe
              </p>
              <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
              </p>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image src={BS5IllustrationsImg} alt="Front pages overview" sizes="180" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2>Speed recruiting</h2>
              <p className="mb-3 lead fw-bold">
                Des postes à pourvoir entant que Conseiller(e) Client appel sortant.
                Vous avez de l'expériences en Call Center ou un parcours commercial offline?</p>
              <p className="mb-4">Votre français est-il impecable ?
                Ce poste est sûrement pour vous
                Venez rejoindre une équipe dynamique ave  des avantages qu'un talent mérite..</p>

            </Col>
            <Col lg={6} className="rounded shadow pt-3">

              <form action="#">
                <div className="form-row mb-2">
                  <Form.Group id="frameworks" className="mb-3">
                    <Form.Label>Déposez vos CV par mail ou directement sur  cette site</Form.Label>
                    <Form.Select>
                      <option defaultValue>FTD</option>F
                      <option>SAV Francophone</option>
                      <option>SAV Anglophone</option>

                    </Form.Select>
                  </Form.Group>
                  <div className="col-12">
                    <input type="text" className="form-control mb-2" placeholder="votre nom" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="exemple@gmail.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <ChoosePhotoWidget
                      title="Votre CV"
                      photo={Profile3}
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                      <span>Envoyer</span>
                    </button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">Notre adresse </h2>
              <p className="mb-3 lead fw-bold"> lot IvS61, Antanimena Batiment IMANE Travel</p>
              <p className="mb-4">Decription addresse .....</p>
              <Button href="https://www.google.com/maps/place/Imane+Travel/@-18.8985999,47.5196724,79m/data=!3m1!1e3!4m5!3m4!1s0x21f080a8e5196145:0xb1ce4d3a2b0dddce!8m2!3d-18.8985077!4d47.5197053" variant="outline-primary" target="_blank"><FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" />Voir Map</Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={MapboxImg} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
          </Row>
         
          
        </Container>
      </section>
      <section className="section section-sm pt-0" id="projet">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">
                Nos Projet
              </h2>
              <p className="lead px-lg-10">
                Projet d'imigration à Canada .....
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            {pages.map(page => <PagePreview key={`page-${page.id}`} {...page} />)}
          </Row>
        </Container>
      </section>
      
      <footer className="footer py-6 bg-dark text-white" id = "contacte">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Mada Marketing</span>
              </Navbar.Brand>
              <p>BPO CALL center Blabla .........</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Reseau sociaux</span>
              <ul className="links-vertical mt-2">
                <li><Card.Link target="_blank" href="https://themesberg.com/blog"><FontAwesomeIcon icon={faFacebook} style={{ marginRight: 7 }} className="text-secondary" />Facebook</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/products"><FontAwesomeIcon icon={faLinkedin} style={{ marginRight: 7 }} className="text-secondary" />Linkedin</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/about"><FontAwesomeIcon icon={faTwitter} style={{ marginRight: 7 }} className="text-secondary" />Twitter</Card.Link></li>

              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Notre contacte</span>
              <ul className="links-vertical mt-2">

                <li><Card.Link as={Link} target="_blank">0329188436</Card.Link></li>

              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Votre messages</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <textarea type="email" className="form-control mb-2" placeholder="votre message ...." name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="contact@madamarketing.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                      <span>Envoyer</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">We’ll never share your details. See our <Card.Link className="text-white" href="#">Privacy Policy</Card.Link></p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link href="https://google.com" target="_blank" className="d-flex justify-content-center">
                <Image src={MadaLogo} height={155} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Mada Marketing 2021-<span className="current-year">2022</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
