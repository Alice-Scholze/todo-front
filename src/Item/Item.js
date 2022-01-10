import { Checkbox } from "antd";
import axios from 'axios';

const Item = (
  { item }
) => {
  const handleCheckItem = (event) => {
    console.log(event);

    axios.patch('http://127.0.0.1:3000/itens/check/' + item.id, { checked: event.target.checked})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {item.id} -- {item.title} -- {item.date} -- checked: <Checkbox checked={item.checked} onChange={handleCheckItem}></Checkbox>
    </div>
  );
};

export default Item;