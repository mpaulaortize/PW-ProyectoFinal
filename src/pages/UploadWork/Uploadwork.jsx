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
  const [image, setImage] = useState(null);

  async function handleUpload(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const projectsCollection = collection(db, "portfolio");
  
    if (window.confirm("Are you sure you want to upload this project?")) {
      console.log(formData);
    } else { 
      return;
    }
  
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + formData.image.name);
    const uploadTask = uploadBytesResumable(storageRef, formData.image);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        
          addDoc(projectsCollection, {
            ...formData,
            image: downloadURL, 
          });
        });
      }
    );
  }

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

      <form onSubmit={handleUpload} className="upload-container">
        <div className="title">
          <h3>Title</h3>
          <input
            type="text"
            className="title-input"
            name="title"
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
                name="image"
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
            name="description"
            required
          ></input>
        </div>
        <div className="menus">
          <div className="project-menu">
            <h4>Type of project</h4>
            <select
              className="project"
              name="type_project"
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
              name="author"
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
        <div className="buttons">
          <button className="draft-btn" href=" ">
            Save as draft
          </button>
          <button
            className="publish-btn"
          >
            Publish
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Upload;
