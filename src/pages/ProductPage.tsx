import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { product_id } = useParams();
  return (
    <main className="page">
      <h1 className="mb-0.5 bg-white p-1">
        <span className="capitalize">{product_id}</span> product main component
      </h1>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <p key={i} className="my-0.5 bg-white p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores
          soluta natus quam fuga tempore voluptatibus voluptate repellat non
          inventore eveniet, aspernatur quae sed quisquam facere esse
          accusantium harum? Dolores, voluptates mollitia cumque dolorum
          deleniti aliquam iusto natus provident necessitatibus, obcaecati sunt
          veniam eligendi modi nostrum officia alias laborum reprehenderit
          delectus illo earum fugit, numquam quod inventore. Nam voluptatibus
          officia impedit dolorum, ducimus eos praesentium incidunt nemo error
          id, debitis soluta aut maiores velit ipsam! Non voluptas ad rem sit,
          consequuntur autem, iusto facilis laborum vitae eum omnis eligendi
          ipsa veritatis nihil, ea ipsam natus commodi esse temporibus veniam.
        </p>
      ))}
    </main>
  );
}
