import { createContext, useContext, useState} from 'react'

export const SidebarContext = createContext( )

function SidebarProvider( { children } ){
    const [ sidebarIsCollapsed , setSidebarIsCollapsed ] = useState( false )

    const handleSidebar = ( ) => {
      setSidebarIsCollapsed( !sidebarIsCollapsed )
      
    }


return <SidebarContext.Provider value={{ 
    sidebarIsCollapsed : sidebarIsCollapsed,
    handleSidebar : handleSidebar

}}>
    { children }
</SidebarContext.Provider>

}


export function useSidebar( ){
    return useContext( SidebarContext )
}

export default SidebarProvider