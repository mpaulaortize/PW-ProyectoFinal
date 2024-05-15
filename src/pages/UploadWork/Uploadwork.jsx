import React from "react";
import "./Uploadwork.css";

import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";

function Upload() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [project, setProject] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const handleSendClick = () => {
    if (!title || !image || !description || !project || !author) {
      setError("Please fill in all fields");
      if (!title) setError("Please fill title");
      if (!description) setError("Please fill description");
      if (!image) setError("Please select an image");
      if (!project) setError("Please select a type of proyect");
      if (!author) setError("Please select an author");
      return;
    }

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);
    console.log("Type of Project:", project);
    console.log("Author:", author);
    setError("");

    setTitle("");
    setDescription("");
    setImage("");
    setProject("");
    setAuthor("");
  };

  const changeImage = (e) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImage(e.target.result);
      };
    }
  };

  return (
    <>
      <div className="rectangle-container">
        <div className="text-banner">
          <h1>
            UPLOAD A NEW PROJECT <br /> SUCCESS AWAITS.
          </h1>
        </div>
      </div>
      <div className="upload-container">
        <div className="title">
          <h3>Title</h3>
          <input
            type="text"
            className="title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
        </div>
        <div className="upload-rectangle">
          <div className="upload-text">
            <h3>Upload media</h3>
            <p>
              Drag and drop your files here or click the 'Upload' button to
              select PNG or JPG files from your device.
            </p>
            <div className="upload-button">
              <label htmlFor="file-upload" className="upload-btn">
                Upload
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  changeImage(e);
                }}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div
            className="image-preview"
            style={{ display: image ? "block" : "none" }}
          >
            <img src={image} alt="" height="150px" width="250px" />
          </div>
        </div>
        <div className="cover-container">
          <div className="cover-text">
            <h3>Choose a cover</h3>
          </div>
          <div className="cover">
            <div className="cover-rectangle" />
            <div className="cover-rectangle" />
            <div className="cover-rectangle" />
          </div>
        </div>
        <div className="description">
          <h3>Description</h3>
          <input
            type="text"
            className="description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
        </div>
        <div className="menus">
          <div className="project-menu">
            <h4>Type of project</h4>
            <select
              className="project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="ux-ui">UX / UI Project</option>
              <option value="graphic">Graphic Project</option>
              <option value="brand">Brand Project</option>
            </select>
          </div>
          <div className="author-menu">
            <h4>Author(s)</h4>
            <select
              className="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="caro">Carolina Velásquez</option>
              <option value="lina">Lina Manjarrez</option>
              <option value="pau">María Paula Ortiz</option>
              <option value="sofi">Sofía Cabrera</option>
            </select>
          </div>
        </div>
        {error && <div className="error-upload">{error}</div>}
        <div className="buttons">
          <button className="draft-btn" href=" ">
            Save as draft
          </button>
          <button
            className="publish-btn"
            onClick={() => {
              handleSendClick();
              setImage(null);
            }}
          >
            Publish
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Upload;
