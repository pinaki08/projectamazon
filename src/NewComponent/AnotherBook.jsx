function NewBook(props) {
  const { image, title, author } = props;
  return (
    <div className="newBook">
      <img src={image} alt="" style={{ height: 150, width: 150 }} />
      <h1>{title} </h1>
      {props.Children}
      <h4> {author} </h4>
    </div>
  );
}
export default NewBook;
