import { useState } from 'react';
import { Button, Form, FormGroup, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Shared/Header';
import { addCategory } from '../../Features/categories';
import './ToDoPage.styles.scss';

const Todo = () => {
  const categories = useSelector((state) => state.categories.value);
  const dispatch = useDispatch();

  const [newCategory, setNewCategory] = useState('');

  const handleChange = (e) => {
    setNewCategory(e.target.value);
    console.log(newCategory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory(newCategory));
  };

  const con = () => {
    console.log(categories[1]);
  };

  return (
    <div className="main-container">
      <Header />
      <div className="categories">
        <h2>Categories</h2>
        <button onClick={con} style={{ backgroundColor: 'red' }}>
          CON categories
        </button>
        <ListGroup>
          {categories.map((i, key) => {
            return <ListGroup.Item key={key}>{i}</ListGroup.Item>;
          })}
        </ListGroup>
      </div>
      <div className="form">
        <Form>
          <FormGroup controlId="addCategory">
            <Form.Control
              type="Category"
              name="category"
              placeholder="Enter New Category"
              value={newCategory}
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
        <Button type="submit" onClick={handleSubmit}>
          Add Category
        </Button>
      </div>
    </div>
  );
};

export default Todo;
