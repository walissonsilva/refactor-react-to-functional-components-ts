import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { useRef } from 'react';
import { IFood } from '../../pages/Dashboard';

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  editingFood: IFood;
  handleUpdateFood: (food: IFood) => Promise<void>;
}

function ModalEditFood({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}: ModalEditFoodProps) {
  // constructor(props) {
  //   super(props);

  //   this.formRef = createRef()
  // }

  const formRef = useRef(null);

  const handleSubmit = async (data: IFood) => {
    handleUpdateFood(data);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
