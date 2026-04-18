export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Bộ sưu tập</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group overflow-hidden rounded-lg">
            <div className="relative bg-gray-300 aspect-square overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="font-semibold mt-4">Bộ sưu tập {i}</h3>
            <p className="text-gray-600 text-sm">Khám phá ngay →</p>
          </div>
        ))}
      </div>
    </div>
  );
}
