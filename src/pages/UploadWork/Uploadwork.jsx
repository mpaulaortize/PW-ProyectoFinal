import React from "react";
import "./Uploadwork.css";

import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from "../../auth/firebase/firebase";
import { update } from "firebase/database";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeProject, setTypeProject] = useState("");
  const [author, setAuthor] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [errors, setErrors] = useState({});

  async function handleUpload(e) {
    e.preventDefault();

    // Validación de campos obligatorios
    let validationErrors = {};
    if (!title) validationErrors.title = "Title is required";
    if (!description) validationErrors.description = "Description is required";
    if (!typeProject) validationErrors.typeProject = "Type of project is required";
    if (!author) validationErrors.author = "Author is required";
    if (imageFiles.length === 0) validationErrors.images = "At least one image is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const formData = { title, description, type_project: typeProject, author };
    const projectsCollection = collection(db, "portfolio");

    if (window.confirm("Are you sure you want to upload this project?")) {
      const storage = getStorage();
      const imageUrls = await Promise.all(imageFiles.map(async (file) => {
        const storageRef = ref(storage, "images/" + file.name);
        const uploadTask = await uploadBytesResumable(storageRef, file);
        return await getDownloadURL(uploadTask.ref);
      }));

      await addDoc(projectsCollection, {
        ...formData,
        images: imageUrls,
      });

      // Limpiar los campos del formulario
      setTitle("");
      setDescription("");
      setTypeProject("");
      setAuthor("");
      setImageFiles([]);
      setImagePreviews([]);
      setCoverImage(null);
    }
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setCoverImage(preview);
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

      <form onSubmit={handleUpload} className="upload-container">
        <div className="title">
          <h3>Title *</h3> 
          <input
            type="text"
            className="title-input"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
        </div>
        <div className="upload-rectangle">
          <div className="upload-text">
            <h3>Upload media *</h3>
            <p>
              Drag and drop your files here or click the 'Upload' button to
              select PNG or JPG files from your device.
            </p>
            <div className="upload-button">
              <label htmlFor="file-upload" className="upload-btn">
                {imageFiles.length > 0 ? "Upload more" : "Upload"}
              </label>
              <input
                id="file-upload"
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="image-previews">
            {imagePreviews.map((src, index) => (
              <img key={index} src={src} alt={`preview ${index}`} height="150px" width="250px" />
            ))}
          </div>
          {errors.images && <p className="error-message">{errors.images}</p>}
        </div>
        <div className="cover-container">
          <div className="cover-text">
            <h3>Choose a cover</h3>
          </div>
          <div className="cover">
            <div className="cover-rectangle">
              <label htmlFor="cover-upload" className="cover-btn">
                <p>+</p>
              </label>
              <input
                id="cover-upload"
                type="file"
                name="cover"
                accept="image/*"
                onChange={handleCoverImageChange}
                style={{ display: "none" }}
              />
              {coverImage && <img src={coverImage} alt="cover preview" height="240px" width="280px" />}
            </div>
            {imagePreviews.slice(0, 2).map((src, index) => (
              <div key={index} className="cover-rectangle">
                <img src={src} alt={`cover option ${index}`} height="240px" width="280px" />
              </div>
            ))}
          </div>
        </div>
        <div className="description">
          <h3>Description *</h3>
          <input
            type="text"
            className="description-input"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="error-message">{errors.description}</p>}
        </div>
        <div className="menus">
          <div className="project-menu">
            <h4>Type of project *</h4>
            <select
              className="project"
              name="type_project"
              value={typeProject}
              onChange={(e) => setTypeProject(e.target.value)}
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="ux-ui">UX / UI Project</option>
              <option value="graphic">Graphic Project</option>
              <option value="brand">Brand Project</option>
            </select>
            {errors.typeProject && <p className="error-message">{errors.typeProject}</p>}
          </div>
          <div className="author-menu">
            <h4>Author(s) *</h4>
            <select
              className="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="caro">Carolina Velásquez</option>
              <option value="lina">Lina Manjarrez</option>
              <option value="pau">María Paula Ortiz</option>
              <option value="sofi">Sofía Cabrera</option>
            </select>
            {errors.author && <p className="error-message">{errors.author}</p>}
          </div>
        </div>
        <div className="buttons">
          <button type="button" className="draft-btn">
            Save as draft
          </button>
          <button type="submit" className="publish-btn">
            Publish
          </button>
        </div>
      </form>
      <div className="message">
        <h3>All fields with (*) are required</h3>
      </div>
      <Footer />
    </>
  );
}

export default Upload;
