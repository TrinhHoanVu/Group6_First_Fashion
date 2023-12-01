import './Switch.css';

const ContrastButton = ({ isOn, handleToggle, onClick, clicked }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{
            background: isOn ? '#000000' : 'transparent',
            whiteSpace:'nowrap' // Use a transparent background when isOn is false
          }}
          className={`react-switch-label ${clicked ? 'clicked' : ''}`}
          htmlFor={`react-switch-new`}
          onClick={onClick}
          
        >
          <span className={`react-switch-button`}><span className={`contrastbutton-text  ${clicked ? 'clicked' : ''}`} style={{marginLeft:'45px', width:'50px'}} >Disabled Contrast</span></span>
        </label>
      </>
    );
  };

export default ContrastButton;