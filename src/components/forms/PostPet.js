import React, { Component } from 'react';

class PostPet extends Component {

  render() { 
    return (
      <div>
        <h2>Form to post a pet</h2>
        <form>
          <label>
            Name:
            <input name="name"></input>
          </label>
          <label>
            Animal:
            <select>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>
          <label>
            Breed:
            <select>
              <option value="">breed here</option>
            </select>
          </label>
          <label>
            Size:
            <select>
              <option value="Extra Small">X-Small</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">X-Large</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
 
export default PostPet;