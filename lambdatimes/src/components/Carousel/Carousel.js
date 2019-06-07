import React, { Component } from 'react';
import { carouselData } from '../../data';

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      currentIndex: 0,
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData
    })
  }

  leftClick = () => {
    if (this.state.currentIndex === this.state.carousel.length - 1) {
      this.setState({
        currentIndex: 0
      })
    } else {
      this.setState(prevState => {
        return ({
          currentIndex: prevState.currentIndex + 1
        })
      })
    }
  }

  rightClick = () => {
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: this.state.carousel.length - 1
      })
    } else {
      this.setState(prevState => {
        return ({
          currentIndex: prevState.currentIndex - 1
        })
      })
    }
  }

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.currentIndex]} 
                alt={this.state.currentIndex} 
                style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}