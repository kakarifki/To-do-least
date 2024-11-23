// src/components/top-bar/index.tsx
import { useState } from 'react';
import Modal from 'react-modal';
import NewTask from '../new-task';
import { Button } from '@/components/ui/button';

Modal.setAppElement('#root');

interface TopBarProps {
  addTask: (nameTodo: string, details: string, dueDate: string, category: string) => void;
}

const TopBar = ({ addTask }: TopBarProps) => { 
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto px-4 flex items-center bg-blue-50 p-4 rounded shadow-md">
      <h1 className="mx-auto text-2xl font-bold text-blue-700">
        To-Do-Least
      </h1>
      <div className="ml-auto">
        <Button variant="outline" className="bg-blue-600 text-white" onClick={openModal}>
          Add New Task
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              width: '50%',
              border: 'none',
              borderRadius: '8px',
              padding: '20px',
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
          }}
          contentLabel="Add New Task"
        >
          <NewTask addTask={addTask} />
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </div>
  );
};

export default TopBar;
