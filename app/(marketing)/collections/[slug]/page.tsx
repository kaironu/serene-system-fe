export default function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Bộ sưu tập: {params.slug}
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="group overflow-hidden rounded-lg">
            <div className="relative bg-gray-300 aspect-square overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="font-medium mt-4">Sản phẩm {i}</h3>
            <p className="text-gray-600 text-sm">199.000 VNĐ</p>
          </div>
        ))}
      </div>
    </div>
  );
}
