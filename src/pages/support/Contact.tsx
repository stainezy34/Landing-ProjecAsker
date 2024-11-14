import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with our team for any questions or support needs.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="mt-2 text-gray-600">support@projecasker.com</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="mt-2 text-gray-600">San Francisco, CA</p>
            </div>
          </div>

          <form className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}