export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-gray-700">Shopping List {quantity} in {category}</div>
    </li>
  );
}
