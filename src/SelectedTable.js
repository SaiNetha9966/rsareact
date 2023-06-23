import React, { useState } from "react";
import { Modal, Button, Row, Form, Col } from "react-bootstrap";
import "./App.css";

function SelectedTable({
  isShow,
  setIsShow,
  initModal,
  selectedData,
  formData,
  setFormData
}) {
  const closeModal = () => {
    setIsShow(false);
  };
  const datLength = selectedData?.length;
  return (
    <>
      <div>
        <Modal show={isShow}>
          <div style={{ margin: "30px" }}>
            <Row style={{ marginTop: "15px" }}>
              <Col lg={10}>
                <Form.Label>
                  Group Name <span style={{ color: "red" }}>*</span>{" "}
                </Form.Label>
                <Form.Control
                  className="inputText"
                  type="text"
                  value={formData?.groupName}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      groupName: e.target.value
                    });
                  }}
                  placeholder="Group Name"></Form.Control>
              </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
              <Col lg={10}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  className="inputText"
                  value={formData?.groupDescription}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      groupDescription: e.target.value
                    });
                  }}
                  placeholder="Description"></Form.Control>
              </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
              <Col lg={10}>
                <p>Selected Rows: {datLength} </p>
              </Col>
            </Row>
          </div>

          <Modal.Footer style={{ justifyContent: "center" }}>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              variant="success"
              onClick={closeModal}
              disabled={formData?.groupName === "" ? true : false}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default SelectedTable;
