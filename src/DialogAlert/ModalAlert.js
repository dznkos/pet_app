import styled from "styled-components";

const Model = styled.div`
  z-index: auto;
  display: ${({show}) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,0.5);
  `;

const Container = styled.div`
  position:fixed;
  background: antiquewhite;
  width: 33%;
  height: auto;
  
  top: '50%';  
  left: '50%';
  transform: 'translate(-50%,-50%)';

  border-radius: 10px;
  padding: 0.75rem;
  color: rgba(0,0,139, 0.7);
  `;

const Header = styled.div`
  
`
const HBar = styled.div`
  
`
const Slot = styled.div`
  
`  
const ButtonBar = styled.div`
  
`
const Button = styled.div`
  
`  

export default function ConfirmationModal(props) {
  const {
      handleClose, // renderProp fn expects truthy or falsey
      show,             // boolean - visible/invisible
      headerText,   // text
      detailText,     // html / inner text
  } = {...props};

  const sendYes = () => handleClose(true);

  const sendNo = () => handleClose(false);

  return (
      <Model show={show}>
          <Container >
              <Header>{headerText}</Header>
              <HBar/>
              <Slot>{detailText}</Slot>
              <ButtonBar>
                  <Button onClick={sendYes} primary={true}>Yes</Button>
                  <Button onClick={sendNo} primary={false}>No</Button>
              </ButtonBar>
          </Container>
      </Model>
  );
}