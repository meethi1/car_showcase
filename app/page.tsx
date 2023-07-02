import Image from 'next/image'
import { Hero ,CustomFilter,SearchBar,CarCard, CustomButton} from '@/components'
import { fetchCars } from '@/utils'
export default  async function Home() {
  const allCars=await fetchCars();
   const isDataEmpty=!Array.isArray(allCars)||allCars.length<1||!allCars;
  return (
    <main className="overflow-hidden">
          <Hero/>
          <div className="
          mt-12 padding-x padding-y max-width " id="discover">
            <div className="home__text-container">
              <h1 className='text-4xl font-extrabold'>Car Catalogue </h1>
                <p>Explore the cars you might like</p>
            </div>
            <div className="home__filters">
              <SearchBar/>
              <div className='home-filter-container'>
                  <CustomFilter title="fuel" />
                  <CustomFilter  title="fuel"/>
              </div>
              
            </div>
            {
              !isDataEmpty?(
                <section>
                 <div className="home__cars-wrapper">
                  {
                    allCars?.map((car)=>(
                      <CarCard car={car}/>
                    ))
                  }
                 </div>
                </section>
              ):(
                <div className="home__error-container">
                  <h2 className='text-black text-xl font-bold'>
                    oops, no car
                  </h2>
                </div>
              )
            }
          </div>
          <CustomButton
          title='Place Order'
            containerStyles="bg-orange-500 float-right  align-right mr-10 rounded-full mt-10"
            />
    </main>
  )
}
