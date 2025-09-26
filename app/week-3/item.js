export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-3 mb-2 rounded-lg shadow-sm bg-white border border-gray-200 hover:bg-gray-50">
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>

      <button className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium">
        Quantity: {quantity}
      </button>
    </li>
  );
}
