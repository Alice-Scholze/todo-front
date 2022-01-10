import { Input, Form, Modal, Checkbox } from "antd";
import axios from 'axios';


const ItemModal = (
{
  onOk,
  onCancel
}) => {
  const [form] = Form.useForm();

  const coisa = () => {
    form.submit();
    // alguma coisa
  };

  const onFinish = (item) => {
    // post
    console.log(item);

    axios.post('http://127.0.0.1:3000/itens/create', item)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    onOk(item);
  };

  const onFinishFailed = (item) => {

  };

  return (
    <Modal title="Item" visible={true} onOk={coisa} onCancel={onCancel}>
      <Form name="addIem" onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{
            required:true,
            message:"Needs title"
          }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{
            required:true,
            message:"Needs description"
          }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Value"
          name="value"
          rules={[{
            required:true,
            message:"Needs value"
          }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Type"
          name="kind"
          rules={[{
            required:true,
            message:"Needs type"
          }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[{
            required:true,
            message:"Needs date"
          }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Assigned"
          name="assigned"
          rules={[{
            required:true,
            message:"Needs assigned"
          }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          name="checked"
          valuePropName="checked"
        >
          <Checkbox>checked</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ItemModal;