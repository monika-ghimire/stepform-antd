import React, { useState } from "react";
import {
  Button,
  message,
  Steps,
  theme,
  Checkbox,
  Form,
  Input,
  Col,
  Row,
  Skeleton,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./stepform.css";
export default function StepBar() {

  const [current, setCurrent] = useState(0);
  const [data, setclientData] = useState({
    name: "",
    email: "",
  });

  const [clientAddress, setclientAddress] = useState({
    contact: "",
    addsress: "",
  });

  const [Additionalinfo, setAdditionalinfo] = useState({
    title: "",
  });
  let memberDataList = {
    name: data.name,
    email: data.email,
    contact: clientAddress.contact,
    addsress: clientAddress.addsress,
    title: Additionalinfo.title,
  };

  console.log("memberDataList");
  console.log(memberDataList);

  const steps = [
    {
      title: "Personal information",
      icon: <UserOutlined />,
    },
    {
      title: "Address information",
      icon: <UserOutlined />,
    },
    {
      title: "Additional information",
      icon: <UserOutlined />,
    },
  ];

  const onFinish = (values) => {
    setclientData({
      ...values,
      name: values.username,
      email: values.email,
    });

    setCurrent(current + 1);
  };
  const onFinishAddress = (values) => {
    setclientAddress({
      ...values,
      contact: values.contact,
      addsress: values.addsress,
    });
    setCurrent(current + 1);
  };
  const onFinishAdditional = (values) => {
    setAdditionalinfo({
      ...values,
      title: values.title,
    });
    setCurrent(current + 1);
  };

  const submitForm = () => {
    message.success("Processing complete!");
   
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { token } = theme.useToken();

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    color: token.colorTextTertiary,
    marginTop: 56,
    padding: 40,
    height: 300,
  };
  return (
    <>
      <div className="container form-holder-step">
        <Steps current={current} items={items} style={{ paddingTop: "5%" }} />
        {/* <div style={contentStyle}>{steps[current].content}</div> */}
        <div style={contentStyle}>
          {current === 0 && (
            <div className="form-field">
              <Row>
                <Col span={12}>
                  <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      value={memberDataList.name}
                      rules={[
                        {
                          required: true,

                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Email"
                      name="email"
                      value={memberDataList.email}
                      rules={[
                        {
                          required: true,

                          message: "Please input valid email!",
                        },
                      ]}
                    >
                      <Input type="email" />
                    </Form.Item>
                    <div
                      style={{
                        marginTop: "35%",
                        position: "absolute",
                        left: 1020,
                      }}
                    >
                      {current < steps.length - 1 && (
                        <Button type="primary" htmlType="submit">
                          Next
                        </Button>
                      )}
                    </div>
                  </Form>
                </Col>
                <Col span={12}>
                  <div className="member-data-show">
                    <h3>Personal information </h3>
                    <Skeleton
                      // avatar
                      paragraph={{
                        rows: 2,
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          )}

          {current === 1 && (
            <div>
              <Row>
                <Col span={12}>
                  <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinishAddress}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Contact"
                      name="contact"
                      value={memberDataList.contact}
                      rules={[
                        {
                          required: true,
                          message: "Please input valid Contact!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Address"
                      name="addsress"
                      value={memberDataList.addsress}
                      rules={[
                        {
                          required: true,

                          message: "Please input addsress!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    {current > 0 && (
                      <Button
                        style={{
                          marginTop: "35%",
                          position: "absolute",
                          left: 0,
                        }}
                        onClick={() => prev()}
                      >
                        Previous
                      </Button>
                    )}
                    <div
                      style={{
                        marginTop: "35%",
                        position: "absolute",
                        left: 1020,
                      }}
                    >
                      {current < steps.length - 1 && (
                        <Button type="primary" htmlType="submit">
                          Next
                        </Button>
                      )}
                    </div>
                  </Form>
                </Col>
                <Col span={12}>
                  <div className="member-data-show">
                    <h3>Personal information </h3>
                    <ul>
                      <li>{memberDataList.name}</li>
                      <li>{memberDataList.email}</li>
                    </ul>

                    <h3>Address information</h3>
                    <Skeleton
                      paragraph={{
                        rows: 2,
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          )}

          {current === 2 && (
            <div>
              <Row>
                <Col span={12}>
                  <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinishAdditional}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Adout Yourself"
                      name="title"
                      value="memberDataList.title"
                      rules={[
                        {
                          required: true,
                          message: "write about your self..",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    {current > 0 && (
                      <Button
                        style={{
                          marginTop: "35%",
                          position: "absolute",
                          left: 0,
                        }}
                        onClick={() => prev()}
                      >
                        Previous
                      </Button>
                    )}
                    {current > 0 && (
                      <Button
                        style={{
                          marginTop: "35%",
                          position: "absolute",
                          left: 1020,
                        }}
                        type="primary"
                        htmlType="submit"
                      >
                        next
                      </Button>
                    )}
                  </Form>
                </Col>
                <Col span={12}>
                  <div className="member-data-show">
                    <h3>Personal information </h3>
                    <ul>
                      <li>{memberDataList.name}</li>
                      <li>{memberDataList.email}</li>
                    </ul>
                    <br />
                    <h3>Address information</h3>
                    <ul>
                      <li>{memberDataList.contact}</li>
                      <li>{memberDataList.addsress}</li>
                    </ul>
                    <h3>Additional information </h3>
                    <Skeleton
                      // avatar
                      paragraph={{
                        rows: 2,
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          )}

          {current === 3 && (
            <div className="container">
              <h2> see your data </h2>

              <h3>Personal information </h3>
              <ul>
                <li>{memberDataList.name}</li>
                <li>{memberDataList.email}</li>
              </ul>
              <br />
              <br />
              <h3>Address information</h3>
              <ul>
                <li>{memberDataList.contact}</li>
                <li>{memberDataList.addsress}</li>
              </ul>
              <br />
              <br />
              <h3>Additional information </h3>
              <ul>
                <li>{memberDataList.title}</li>
              </ul>
              {current > 0 && (
                <Button
                  style={{
                    marginTop: "2%",
                    position: "absolute",
                    left: 180,
                  }}
                  onClick={() => prev()}
                >
                  Previous
                </Button>
              )}

              {current > 0 && (
                <Button
                  style={{
                    marginTop: "2%",
                    position: "absolute",
                    left: 1100,
                  }}
                  type="primary"
                  onClick={submitForm}
                >
                  Done
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
