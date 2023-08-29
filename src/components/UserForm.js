const UserForm = ({ userName, setUserName }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(e.target[0].value);
  }

  return (
    <>
      {!userName ?
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" />
          <input type="submit" value="Begin" />
        </form> :
        null
      }
    </>
  );
}

export default UserForm;