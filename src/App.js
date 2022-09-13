import "./App.css";
function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
export default Booklist;

const Book = () => {
  return (
    <article className="book">
      <Image /> <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Dodq-27sL._AC_SR360,240_QL70_.jpg"
    alt=""
  />
);

const Title = () => {
  return <h1>The Everyday Hero Manifesto </h1>;
};

const Author = () => {
  return <p>Robin Sharma</p>;
};
