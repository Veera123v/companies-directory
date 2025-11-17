export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center mt-8 gap-2">
      
      <button
        className="px-3 py-2 border rounded disabled:opacity-50"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-2 border rounded ${
            page === i + 1 ? "bg-blue-600 text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="px-3 py-2 border rounded disabled:opacity-50"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}
