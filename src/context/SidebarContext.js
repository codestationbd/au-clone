import { faL } from '@fortawesome/free-solid-svg-icons'
import { createContext, useContext, useState} from 'react'

export const SidebarContext = createContext( )

function SidebarProvider( { children } ){
    const [ sidebarIsCollapsed , setSidebarIsCollapsed ] = useState( false )
    const [ plusButtonIsVisible,setPlusButtonIsVissible ] = useState( true )
    const [ minusButtonIsVisible,setMinusButtonIsVissible ] = useState( false )

    const handleSidebar = ( ) => {
      setSidebarIsCollapsed( !sidebarIsCollapsed )
      
    }

    const handlePlusButton = ( ) => {
            setPlusButtonIsVissible( false )
            setMinusButtonIsVissible( true )
    }

    const handleMinusButton = ( ) => {
        setMinusButtonIsVissible( false )
        setPlusButtonIsVissible( true )
    }


return <SidebarContext.Provider value={{ 
    sidebarIsCollapsed : sidebarIsCollapsed,
    plusButtonIsVisible : plusButtonIsVisible,
    minusButtonIsVisible : minusButtonIsVisible,
    handleSidebar : handleSidebar,
    handlePlusButton : handlePlusButton,
    handleMinusButton : handleMinusButton


}}>
    { children }
</SidebarContext.Provider>

}


export function useSidebar( ){
    return useContext( SidebarContext )
}

export default SidebarProvider