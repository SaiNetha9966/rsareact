import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRuleData, getStoresData } from "./Redux/Api";
import Paginate from "./pagination";
import { AiFillSetting, AiOutlinePlusSquare } from "react-icons/ai";
import SelectedTable from "./SelectedTable";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRuleData());
    dispatch(getStoresData());
  }, [dispatch]);

  const testData = useSelector((state) => state.TestData);
  const testLoading = useSelector((state) => state.TestLoading);
  const totalData = testData?.length;

  const StoresData = useSelector((state) => state.StoresData?.storesdata);
  const StoresLoading = useSelector((state) => state.TestLoading);

  const itemsPerPage = 10;
  const pageCount = Math.ceil(totalData / itemsPerPage);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const paginationData =
    testData.length > 0 ? testData?.slice(itemOffset, endOffset) : 0;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalData;

    setItemOffset(newOffset);
  };

  const [chekedData, setCheckedData] = useState([]);

  const [allcheck, setAllcheck] = useState(false);
  const [selectedData, setSelecteddata] = useState([]);

  const [singleCheck, setSingleCheck] = useState(false);

  const masterCheck = (e) => {
    let tempList = testData;
    tempList?.map((user) => (user.selected = e.target.checked));

    setAllcheck(e.target.checked);
    setCheckedData(tempList);
    const filterData = tempList?.filter((e) => e.selected);
    setSelecteddata(filterData);
  };

  const onItemCheck = (e, item) => {
    let tempList = testData;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });
    const totalItems = testData?.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;
    setAllcheck(totalItems === totalCheckedItems);

    setSelecteddata(tempList?.filter((e) => e.selected));
  };

  const [isShow, setIsShow] = useState(false);

  const initModal = () => {
    setIsShow(true);
  };
  const closeModal = () => {
    setIsShow(false);
  };

  const midelSubmit = () => {
    setIsShow(false);
  };

  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    memberName: "",
    phonenumber: "",
    zipCode: "",
    stores: "",
    fromDate: "",
    toDate: ""
  });

  console.log(formData);

  const handleReset = () => {
    setFormData({
      userName: "",
      firstName: "",
      lastName: "",
      memberName: "",
      phonenumber: "",
      zipCode: "",
      stores: "",
      fromDate: "",
      toDate: "",
      groupName: "",
      groupDescription: ""
    });
  };

  const handleInput = (e, name) => {
    // setFormData({
    //   ...formData,
    //   [name]: e
    // });
  };
  return (
    <Row>
      {/* <Col xs={2}></Col> */}
      <Col>
        <div style={{ width: "90%", margin: "50px", overflow: "none" }}>
          <div>
            <Col className="col-12" xs={12}>
              <Row>
                <Col lg={2}>
                  <Form.Label className="form-label">User Name</Form.Label>
                  <Form.Control
                    className="inputText"
                    type="text"
                    name="userName"
                    value={formData?.userName}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        userName: e.target.value
                      });
                    }}
                    placeholder="User Name"></Form.Control>
                </Col>

                <Col lg={2}>
                  <Form.Label className="form-label">Member Number</Form.Label>
                  <Form.Control
                    className="inputText"
                    type="text"
                    value={formData?.memberName}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        memberName: e.target.value
                      });
                    }}
                    placeholder="Member Number"></Form.Control>
                </Col>
                <Col lg={2}>
                  <Form.Label className="form-label">Phone Number</Form.Label>
                  <Form.Control
                    className="inputText"
                    type="text"
                    value={formData?.phonenumber}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        phonenumber: e.target.value
                      });
                    }}
                    placeholder="Phone Number"></Form.Control>
                </Col>
                <Col lg={2}>
                  <Form.Label className="form-label">Zipcode </Form.Label>
                  <Form.Control
                    className="inputText"
                    value={formData?.zipCode}
                    type="text"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        zipCode: e.target.value
                      });
                    }}
                    placeholder="Zipcode"></Form.Control>
                </Col>

                <Col lg={4}>
                  <Form.Label className="form-label">Stores</Form.Label>
                  <Select
                    name="stores"
                    value={formData?.stores}
                    placeholder={"Please select rule Type"}
                    options={StoresData}
                    className="react-select-container select"
                    onChange={(e) => {
                      handleInput(e, "ruleType");
                      setFormData({
                        ...formData,
                        stores: e
                      });
                      // handleChange("ruleType");
                    }}
                  />
                </Col>
              </Row>
            </Col>

            <Col lg={12}>
              <Row style={{ marginTop: "10px" }}>
                <Col lg={2}>
                  <Form.Label className="form-label">Fist Name</Form.Label>
                  <Form.Control
                    className="inputText"
                    type="text"
                    value={formData?.firstName}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        firstName: e.target.value
                      });
                    }}
                    placeholder="First Name"></Form.Control>
                </Col>

                <Col lg={2}>
                  <Form.Label className="form-label">Last Name</Form.Label>
                  <Form.Control
                    className="inputText"
                    value={formData?.lastName}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        lastName: e.target.value
                      });
                    }}
                    type="text"
                    placeholder="Last Name"></Form.Control>
                </Col>
                <Col lg={2}>
                  <Form.Label className="form-label">
                    Signup From Data
                  </Form.Label>
                  <Form.Control
                    className="inputText"
                    type="date"
                    value={formData?.fromDate}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        fromDate: e.target.value
                      });
                    }}
                    placeholder="User Name"></Form.Control>
                </Col>
                <Col lg={2}>
                  <Form.Label className="form-label">
                    Signup To Date{" "}
                  </Form.Label>
                  <Form.Control
                    className="inputText"
                    type="date"
                    value={formData?.toDate}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        toDate: e.target.value
                      });
                    }}
                    placeholder="User Name"></Form.Control>
                </Col>
              </Row>
            </Col>
            <Row style={{ marginTop: "20px" }}>
              <Col md={{ span: 6, offset: 6 }}>
                <Button
                  className="btn btn-success"
                  onClick={handleReset}
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                  Reset
                </Button>
                <Button
                  className="btn btn-success"
                  style={{ marginLeft: "50px" }}>
                  Search
                </Button>
              </Col>
            </Row>
          </div>

          <SelectedTable
            selectedData={selectedData}
            setSelecteddata={setSelecteddata}
            isShow={isShow}
            setIsShow={setIsShow}
            initModal={initModal}
            closeModal={closeModal}
            formData={formData}
            setFormData={setFormData}
          />
          <div style={{ marginTop: "30px" }}>
            <Row>
              <Col>
                <h6 style={{ marginTop: "8px" }}>
                  Search Results : {testData?.length}
                </h6>
              </Col>
              <Col>
                <Button
                  className="float-end btn btn-secondary"
                  onClick={initModal}>
                  <AiOutlinePlusSquare /> Create A Group
                </Button>
              </Col>
            </Row>
            <table class="table table-bordered" style={{ marginTop: "20px" }}>
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      style={{ marginLeft: "10px" }}
                      type="checkbox"
                      id="mastercheck"
                      className="form-check-input"
                      checked={allcheck}
                      onChange={masterCheck}
                    />
                  </th>
                  <th scope="col">Id</th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Url</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              {testLoading === true ? (
                <center>
                  <div>
                    <div class="spinner-border" role="status"></div>
                  </div>
                </center>
              ) : (
                <tbody>
                  {paginationData?.length > 0 &&
                    paginationData?.map((each, i) => (
                      <tr key={each.id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={each.selected}
                            className="form-check-input"
                            id={`rowcheck{user.id}`}
                            onChange={(e) => onItemCheck(e, each)}
                          />
                        </td>
                        <td>{each?.id}</td>
                        <td>
                          <img
                            style={{ width: "10px" }}
                            src={each?.thumbnailUrl}
                            alt={each?.title}
                          />
                        </td>
                        <td>{each?.title}</td>
                        <td>{each?.url}</td>
                        <td>
                          {" "}
                          <AiFillSetting />{" "}
                        </td>
                      </tr>
                    ))}
                </tbody>
              )}
            </table>
          </div>
          <Paginate handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </Col>
    </Row>
  );
}

export default App;
