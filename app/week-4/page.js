import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="p-7 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-5">Add New Item</h1>
      <NewItem />
    </main>
  );
}
