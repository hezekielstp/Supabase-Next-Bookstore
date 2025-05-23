import { useEffect, useState } from "react";
import type { IBook } from "@/types/book";
import supabase from "@/lib/db";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() =>{
    const fetchBooks = async () =>{
      const {data, error} = await supabase.from('books').select('*');

      if(error) console.log('error: ', error);
      else setBooks(data);
    }
    fetchBooks();
  }, [supabase]);

console.log(books);

  return (
    <div className='container mx-auto'>
      <h1 className="text-3xl font-bold mb-4">Book</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {books.map((books:IBook)=>(
          <Card key={books.id}> 
            <CardContent>
              <Image src={books.image} alt={books.title} width={200} height={200} className="w-full h-[30vh] object-cover"/>
              <div className="mt-4 flex justify-between">
                <div>
                  <h4 className="font-semibold text-xl">{books.title}</h4>
                  <p>{books.genre}</p>
                </div>
                <p className="font-semibold text-2xl">Rp{books.price.toLocaleString('id-ID')},00</p>
              </div> 
            </CardContent>
            <CardFooter>
              <Button className="w-full size-ld font-bold">Buy Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home;