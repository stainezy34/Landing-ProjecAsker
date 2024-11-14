export function Licenses() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Licenses
          </h2>
          
          <div className="prose prose-lg">
            <h3 className="text-xl font-semibold mt-8 mb-4">Open Source Licenses</h3>
            <p className="text-gray-600">
              ProjecAsker uses various open source software components. Here's a list of the major components and their licenses:
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h4 className="font-semibold">React</h4>
                <p className="text-gray-600">MIT License</p>
              </div>

              <div>
                <h4 className="font-semibold">Tailwind CSS</h4>
                <p className="text-gray-600">MIT License</p>
              </div>

              <div>
                <h4 className="font-semibold">Lucide Icons</h4>
                <p className="text-gray-600">ISC License</p>
              </div>
            </div>

            {/* Add more licenses as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}