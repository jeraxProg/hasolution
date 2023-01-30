import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import EmployerComponent from "./Employer";
import { BtnContainer, CustomCard, CustomCardContainer} from "./components";
import useHooks from './hooks'  

const EmployersComponent = ({ employer, cat_list }) => {

  const {showModalDelete,
    handleCloseModalDelete,
    handleShowModalDelete,
    handleDelete} = useHooks({cat_list});




  // For Modals
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // For DeleteModals
  // const [showModalDelete, setShowModalDelete] = useState(false);
  // const handleCloseModalDelete = () => setShowModalDelete(false);
  // const handleShowModalDelete = () => setShowModalDelete(true);

  return (
    <>
    <CustomCardContainer>
      <CustomCard>
        <Card.Header>{employer.company_name}</Card.Header>
        <Card.Body>
          <Card.Title>{employer.occupation_title}</Card.Title>
          <Card.Text>
            {employer.job_desc.replace(/(<([^>]+)>)/gi, "").length === 80
              ? `${employer.job_desc
                  .substring(0, 80)
                  .replace(/(<([^>]+)>)/gi, "")}...`
              : employer.job_desc.replace(/(<([^>]+)>)/gi, "")}
          </Card.Text>
          <Card.Text>{employer.cat_of_industry}</Card.Text>
          <Card.Text>{employer.company_email}</Card.Text>
          <BtnContainer className="mt-3">
            <Button variant="secondary" onClick={handleShowModal}>
              Edit
            </Button>
            <Button variant="danger" onClick={handleShowModalDelete}>
              Delete
            </Button>
          </BtnContainer>
        </Card.Body>
      </CustomCard>
      </CustomCardContainer>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmployerComponent 
            employer={employer} 
            cat_list={cat_list} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showModalDelete}
        onHide={handleCloseModalDelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Do you want to delete this data?
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={() => handleDelete(employer._id)}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleCloseModalDelete}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   
    </>
  );
};

export default EmployersComponent;
