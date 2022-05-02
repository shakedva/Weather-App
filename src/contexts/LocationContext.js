import * as React from 'react'

let LocationContext = React.createContext();

function locationReducer(state, action) {
    switch (action.type) {
        case 'add': {
            return {locationList: [...state.locationList, action.location]}
        }
        case 'delete': {
            return {locationList: [...state.locationList.filter(element => element.name !== action.locationToDelete), action.locationToDelete]}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function LocationProvider({children}) {
    const [state, dispatch] = React.useReducer(locationReducer, {locationList: []})
    const value = {state, dispatch}
    return (
        <LocationContext.Provider value={value}>
            {children}
        </LocationContext.Provider>
    )
}

function useLocation() {
    const context = React.useContext(LocationContext)
    if (context === undefined) {
        throw new Error('useLocation must be used within a LocationProvider')
    }
    return context
}

export {LocationProvider, useLocation}