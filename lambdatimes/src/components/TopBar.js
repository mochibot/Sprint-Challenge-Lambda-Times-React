import React from 'react';
import styled from 'styled-components'
import Login from './Login'
import { Button, Modal}  from 'reactstrap';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const TopBarContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  }

  @media (min-width: 1280px) {
  .top-bar .container {
    width: 1280px;
  }
`
const TopBarContainerLeftDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  > span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`
const TopBarContainerCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  > span {
    cursor: pointer;
    margin-right: 5%;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

const TopBarContainerRightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  > span {
    cursor: pointer;
  }
`

//End of styled components

class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
  return (
    <TopBarDiv>
      <TopBarContainerDiv>
        <TopBarContainerLeftDiv>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </TopBarContainerLeftDiv>
        <TopBarContainerCenterDiv>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </TopBarContainerCenterDiv>
        <TopBarContainerRightDiv>
          <span onClick={this.toggleModal}>LOG IN</span>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
            <Login />          
            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
          </Modal>
        </TopBarContainerRightDiv>
      </TopBarContainerDiv>
    </TopBarDiv>
  )
  }
}

export default TopBar;