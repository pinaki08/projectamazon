import "./App.css";
import NewBook from "./NewComponent/AnotherBook";
const firstBook = {
  image:
    "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Dodq-27sL._AC_SR360,240_QL70_.jpg",
  title: "The Everyday Hero Manifesto",
  author: "Robin Sharma",
};
const secondBook = {
  image:
    "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71jjfRDwapL.SR160,240_BG243,243,243.jpg",

  title: "Post-Traumatic Growth and Building Resilience",
  author: " HBR Paperbacks",
};
const anotherBook = {
  image:
    "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71uzuTWWc5L.SR160,240_BG243,243,243.jpg",
  title: "Design Thinking",
  author: "Steve Blank"
};
function Booklist() {
  return (
    <section className="booklist">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />
      <NewBook image={anotherBook.image} title={anotherBook.title} author= {anotherBook.author} />
      <p>
      HBR's 10 Must Reads on Mental Toughness (with bonus interview
      "Post-Traumatic Growth and Building Resilience"

     </p>

      <NewBook />
      <NewBook />
      <NewBook />
      <NewBook />
      <NewBook />
      <NewBook />
    </section>
  );
}
export default Booklist;

// const title =
// const author =
// const image =

function Book(props) {
  return (
    <article className="book">
      <img src={props.image} alt="" style={{ height: 100, width: 100 }} />
      <h1>{props.title}</h1>
      {props.Children}
      <h4>{props.author}</h4>
    </article>
  );
}

// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Dodq-27sL._AC_SR360,240_QL70_.jpg"
//     alt=""
//   />
// );

// const Title = () => {
//   return <h1>The Everyday Hero Manifesto </h1>;
// };

// const Author = () => {
//   return <p>Robin Sharma</p>;
// };

// function NewBook( props){

// }
