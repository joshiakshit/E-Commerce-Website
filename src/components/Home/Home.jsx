import Banner from './Banner'
import Cards from './Cards'
import Dashboard from '../Dashboard/Dashboard'

const products = [
  {
    id: 1,
    name: 'Aventura Outfitters',
    href: '/src/components/Product/Product.jsx',
    imageSrc: '/src/assets/Home/sec-1/img1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹350',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Veirdo',
    href: '#',
    imageSrc: '/src/assets/Home/sec-1/img2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹455',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Lymio',
    href: '#',
    imageSrc: '/src/assets/Home/sec-1/img3.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹235',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Max',
    href: '#',
    imageSrc: '/src/assets/Home/sec-1/img4.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹599',
    color: 'Black',
  },
  {
    id: 5,
    name: 'LEOTUDE',
    href: '#',
    imageSrc: '/src/assets/Home/sec-1/img5.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹400',
    color: 'Black',
  },
  {
    id: 6,
    name: 'U.S. POLO ASSN.',
    href: '#',
    imageSrc: '/src/assets/Home/sec-1/img6.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹899',
    color: 'Black',
  },
  {
    id: 7,
    name: 'Lux Cozi',
    href: '#',
    imageSrc: '/src/assets/Home/sec-1/img7.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹399',
    color: 'Black',
  },
  {
    id: 8,
    name: 'London Hills',
    href: '#',
    imageSrc: '/src/assets/Home/sec-1/img8.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹399',
    color: 'Black',
  },
]

export default function Example() {
  return (
    <>
      <Banner />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Check these awesome deals on T-Shirts</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cards/>
      <Banner/>
    </>
  )
}
