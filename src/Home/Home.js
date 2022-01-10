import { Button } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Item from '../Item'
import ItemModal from '../ItemModel/ItemModal';

const Home = () => {
  const [itens, setItens] = useState([]);
  const [showModal, setShowModal] = useState();

  const getItens = () => {
    axios.get('http://127.0.0.1:3000/itens')
      .then(function (response) {
        // handle success
        console.log(response);
        setItens(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const onNewItem = (item) => {


    onClose();
  };

  const onClose = () => {
    setShowModal(false);
  };

  useEffect(getItens, []);

  return (
    <div>
      <Button onClick={openModal}>New item</Button>
      { showModal ? <ItemModal onOk={onNewItem} onCancel={onClose}></ItemModal> : null }

      {
        itens.map((item) => {
          return <Item item={item}></Item>
        })
      }
    </div>
  );
};

export default Home;