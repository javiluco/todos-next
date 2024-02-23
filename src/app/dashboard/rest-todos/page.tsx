
export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";


export default async function RestTodosPage() {

    const todos = await prisma.todo.findMany({ orderBy: {description: 'asc'}})

    // useEffect(() => {
    //   fetch('/api/todos')
    //     .then( resp=> resp.json())
    //     .then( console.log);
    
    // }, [])
    
    return (
        <div >
            {/* TODO: Formulario para agregar */}

            <TodosGrid todos={ todos }/>

           

        </div>
    );
}