export default function AppFooter() {
  return (
    <footer className="mt-2 pb-1">
      <p className="mb-0.5 bg-white p-1">App footer component</p>
      {[1, 2, 3, 4, 5].map((i) => (
        <p key={i} className="my-0.5 bg-white p-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et explicabo
          autem iste cum obcaecati sequi unde, pariatur, libero quo, nemo
          incidunt. Sunt modi labore recusandae, impedit voluptas dolor nam
          blanditiis!
        </p>
      ))}
    </footer>
  );
}
