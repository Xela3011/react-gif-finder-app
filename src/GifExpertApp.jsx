import {useState} from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Iron Man']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory))return;
        setCategories( [newCategory, ...categories] );
        //setCategories( cat => [...cat, 'Daredevil'] );
        //al hacer el spread con ... creo una copia del arreglo y le puedo agrgar el otro elemento
    }
    
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
           onNewCategory = {onAddCategory}
        />
        {/* Listado de Gif */}
        { categories.map(category =>
            <GifGrid 
            key={category} category={category}/>
        )
        }

    </>
  )
}
