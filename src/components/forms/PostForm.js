import React, { Component } from 'react';
import styles from './PostForm.css';
import PropTypes from 'prop-types';

class PostForm extends Component {

  state = {
    zip: '',
    reason: '',
    name: '',
    species: '',
    catBreed: 'Unknown',
    dogBreed: 'Unknown',
    size: '',
    sex: '',
    age: '',
    sterilized: 'Unknown',
    kidFriendly: '',
    petFriendly: 'Unknown',
    activityLevel: '',
    description: '',
    healthBehavior: '',
    images: ''
  }

  static propTypes = {
    onComplete: PropTypes.func.isRequired
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);

  }
  
  render() { 
    const { 
      zip,
      reason,
      name, 
      species, 
      catBreed, 
      dogBreed,
      size, 
      sex, 
      age, 
      sterilized, 
      kidFriendly, 
      petFriendly, 
      activityLevel, 
      description, 
      healthBehavior, 
      images 
    } = this.state;

    return (
      <div className={styles.postPet}>
        <h2>Form to post a pet</h2>
        <p>In order to find the perfect home for your pet, please fill out all fields.</p>
        <form onSubmit={this.handleSubmit}>
          
          <label>
            <h6>Reason for rehoming:</h6>
            <select name="reason" value={reason} onChange={this.handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="none">None</option>
              <option value="allergy">Allergy</option>
              <option value="death">Death</option>
              <option value="illness">Illness</option>
              <option value="moving">Moving</option>
              <option value="conflict">Conflict</option>
            </select>
          </label>

          <label>
            <h6>Name:</h6>
            <input type="text" name="name" placeholder="Name of pet" size="12" value={name} onChange={this.handleChange} />
          </label>

          <label>
            <h6>Location (zip code):</h6>
            <input type="text" name="zip" placeholder="zip code" pattern="^\d{5}(?:[-\s]\d{4})?$" value={zip} size="7" minLength="5" maxLength="5" onChange={this.handleChange} />
          </label>

          <label>
            <h6>Animal:</h6>
            <select name="species" value={species} onChange={this.handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
            </select>
          </label>

          <label>

            <h6>Breed:</h6>
            {
              species === 'cat'
                ?
                <div>
                  <select name="catBreed" value={catBreed} onChange={this.handleChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="not-applicable">Not Applicable</option>
                    <option value="unknown">Unknown</option>
                    <option value="other">Other</option>
                    <option value="mixed-breed">Mixed-Breed</option>
                    <option value="domestic-shorthair">Domestic Shorthair</option>
                    <option value="domestic-longhair">Domestic Longhair</option>
                    <option value="abyssinian">Abyssinian</option>
                    <option value="american-bobtail">American Bobtail</option>
                    <option value="american-curl">American Curl</option>
                    <option value="american-shorthair">American Shorthair</option>
                    <option value="american-wirehair">American Wirehair</option>
                    <option value="balinese">Balinese</option>
                    <option value="bengal">Bengal</option>
                    <option value="birman">Birman</option>
                    <option value="bombay">Bombay</option>
                    <option value="british-shorthair">British Shorthair</option>
                    <option value="burmese">Burmese</option>
                    <option value="burmilla">Burmilla</option>
                    <option value="chartreux">Chartreux</option>
                    <option value="colorpoint-shorthair">Colorpoint Shorthair</option>
                    <option value="cornish-rex">Cornish Rex</option>
                    <option value="devon-rex">Devon Rex</option>
                    <option value="egyptian-mau">Egyptian Mau</option>
                    <option value="european-burmese">European Burmese</option>
                    <option value="exotic">Exotic</option>
                    <option value="havana-brown">Havana Brown</option>
                    <option value="japanese-bobtail">Japanese Bobtail</option>
                    <option value="khao-manee">Khao Manee</option>
                    <option value="korat">Korat</option>
                    <option value="laPerm">LaPerm</option>
                    <option value="lykoi">Lykoi</option>
                    <option value="maine-coon-cat">Maine Coon Cat</option>
                    <option value="manx">Manx</option>
                    <option value="norwegian-forest-cat">Norwegian Forest Cat</option>
                    <option value="ocicat">Ocicat</option>
                    <option value="oriental">Oriental</option>
                    <option value="persian">Persian</option>
                    <option value="ragamuffin">Ragamuffin</option>
                    <option value="ragdoll">Ragdoll</option>
                    <option value="russian-blue">Russian Blue</option>
                    <option value="scottish-fold">Scottish Fold</option>
                    <option value="selkirk-rex">Selkirk Rex</option>
                    <option value="siamese">Siamese</option>
                    <option value="siberian">Siberian</option>
                    <option value="singapura">Singapura</option>
                    <option value="somali">Somali</option>
                    <option value="sphynx">Sphynx</option>
                    <option value="tonkinese">Tonkinese</option>
                    <option value="turkish-angora">Turkish Angora</option>
                    <option value="turkish-van">Turkish Van</option>
                  </select>
                </div>
                :
                <div>
                  <select name="dogBreed" value={dogBreed} onChange={this.handleChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="not-applicable">Not Applicable</option>
                    <option value="unknown">Unknown</option>
                    <option value="other">Other</option>
                    <option value="mixed-breed">Mixed-Breed</option>
                    <option value="beagle">Beagle</option> 
                    <option value="bernese-mountain-dog">Bernese Mountain Dog</option>
                    <option value="border-collie">Border Collie</option>
                    <option value="boxer">Boxer</option>
                    <option value="brittany-spaniel">Brittany Spaniel</option>
                    <option value="bulldog">Bulldog</option>
                    <option value="cavalier-king-charles-spaniel">Cavalier King Charles Spaniel</option>
                    <option value="chihuahua">Chihuahua</option>
                    <option value="dachshund">Dachshund (all varieties)</option>
                    <option value="dobermann">Dobermann</option>
                    <option value="english-cocker-spaniel">English Cocker Spaniel</option>
                    <option value="english-setter">English Setter</option>
                    <option value="english-springer-spaniel">English Springer Spaniel</option>
                    <option value="french-bulldog">French Bulldog</option>
                    <option value="german-shepherd">German Shepherd</option>
                    <option value="german-shorthaired-pointer">German Shorthaired Pointer</option>
                    <option value="german-spitz">German Spitz</option>
                    <option value="golden-retriever">Golden Retriever</option>
                    <option value="great-dane">Great Dane</option>
                    <option value="jack-russell-terrier">Jack Russell Terrier</option>
                    <option value="labrador-retriever">Labrador Retriever</option>
                    <option value="maltese">Maltese</option>
                    <option value="miniature-schnauzer">Miniature Schnauzer</option>
                    <option value="pomeranian">Pomeranian</option>
                    <option value="poodle">Poodle</option>
                    <option value="pug">Pug</option>
                    <option value="rottweiler">Rottweiler</option>
                    <option value="shetland-sheepdog">Shetland Sheepdog</option>
                    <option value="shih-tzu">Shih Tzu</option>
                    <option value="staffordshire-bull-terrier">Staffordshire Bull Terrier</option>
                    <option value="west-highland-white-terrier">West Highland White Terrier</option>
                    <option value="yorkshire-terrier">Yorkshire Terrier</option>
                  </select>
                </div>
            }
          </label>
          
          <label>
            <h6>Size:</h6>
            <select name="size" value={size} onChange={this.handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="extra-small">X-Small</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">X-Large</option>
            </select>
          </label>

          <label>
            <h6>Sex:</h6>
            <select name="sex" value={sex} onChange={this.handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="unknown">Unknown</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>

          <label>
            <h6>Age:</h6> 
            <select name="age" value={age} onChange={this.handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="unknown">Don&#39;t know</option>
              <option value="baby">Baby</option>
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>
          </label>

          <label>
            <h6>Sterilized: </h6>
            <select name="sterilized" value={sterilized} onChange={this.handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="unknown">Unknown</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>

            <h6>Plays well with kidFriendly:</h6>
            <select name="kid-friendly" value={kidFriendly} onChange={this.handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="unknown">Unknown</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            <h6>Plays well with other pets:</h6>
            <select name="pet-friendly" value={petFriendly} onChange={this.handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="unknown">Unknown</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            <h6>Activity level required:</h6> 
            <select name="activityLevel" value={activityLevel} onChange={this.handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="unknown">Unknown</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          
          <label>
            <h6>Description: </h6>
            <textarea name="description" value={description} onChange={this.handleChange}></textarea>
          </label>

          <label>
            <h6>Health/behavior: </h6>
            <textarea name="health-behavior" value={healthBehavior} onChange={this.handleChange}></textarea>
          </label>

          <label>
            <h6>Upload images:</h6>
            <input name="images" value={images} onChange={this.handleChange} />
          </label>
          <button>rehome</button>
        </form>
      </div>
    );
  }
}
 
export default PostForm
;