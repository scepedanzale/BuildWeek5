import React, { useState } from "react";
import AddBookForm from "../../Components/AdminPageComp/AddBookForm";
import { Input, Typography } from "@material-tailwind/react";
import { Button, Card, Form, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

export default function AddBookPage() {
  const [title, setTitle] = useState();
  const [author_id, setAuthor] = useState();
  const [category_id, setCategory] = useState();
  const [abstract, setAbstract] = useState();
  const [year, setYear] = useState();
  const [cover_url, setCoverUrl] = useState();
  const [available_copies, setAvailableCopies] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const authors = useSelector((state) => state.authors.listaAuthors);
  const categories = useSelector((state) => state.categorie.listaCategorie);

  const handleCreateBook = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post("/api/book" ,{
      title,
      author_id,
      category_id,
      abstract,
      year,
      available_copies
    }).finally(() => {
      setLoading(false);
      navigate("/admin");
    });
  };
  return (
    <Card
      color="white"
      shadow={false}
      className="text-center py-4 mt-20 w-50 mx-auto"
    >
      <Typography variant="h4" color="blue-gray">
        New Book
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Add a new book to Librioteca!
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
        onSubmit={handleCreateBook}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Title
          </Typography>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size="lg"
            placeholder="name..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
            Abstract
          </Typography>
          <Input
            type="text"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            size="lg"
            placeholder="name..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Category
          </Typography>
          <Form.Select
            aria-label="Default select example"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories &&
              categories.map((category) => {
                return (
                  <option
                    key={category.id}
                    value={category.id}
                    selected={category.id === category_id ? "selected" : ""}
                  >
                    {category.name}
                  </option>
                );
              })}
          </Form.Select>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Author
          </Typography>
          <Form.Select
            aria-label="Default select example"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          >
            {authors &&
              authors.map((author) => {
                return (
                  <option
                    key={author.id}
                    value={author.id}
                    selected={author.id === author_id ? "selected" : ""}
                  >
                    {author.full_name}
                  </option>
                );
              })}
          </Form.Select>

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Year
          </Typography>
          <Input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type="number"
            size="lg"
            placeholder="year..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Available Copies
          </Typography>
          <Input
            value={available_copies}
            onChange={(e) => setAvailableCopies(e.target.value)}
            type="number"
            size="lg"
            placeholder="copies..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          {loading ? "loading" : "create"}
        </Button>
      </form>
    </Card>
  );
}
