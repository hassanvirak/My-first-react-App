function StyleCard(props) {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #f5f3ff, #e0e7ff)',
    padding: '20px'
  };

  const cardStyle = {
    background: 'linear-gradient(145deg, #4f2ba5, #321878)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '24px',
    width: '500px',
    minHeight: '300px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    textAlign: 'center',
    padding: '40px',

    boxShadow:
      '0 20px 50px rgba(79, 43, 165, 0.35), inset 0 1px 1px rgba(255,255,255,0.2)',

    color: 'white'
  };

  const titleStyle = {
    color: '#ffffff',
    fontSize: '30px',
    fontWeight: '700',
    margin: '0 0 16px 0',
    letterSpacing: '0.5px'
  };

  const descriptionStyle = {
    color: '#ddd6fe',
    fontSize: '17px',
    lineHeight: '1.7',
    maxWidth: '380px',
    margin: '0'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h3 style={titleStyle}>{props.title}</h3>

        <p style={descriptionStyle}>
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default StyleCard;
