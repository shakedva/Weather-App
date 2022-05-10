import * as React from 'react'

let LocationContext = React.createContext();

/**
 * Location Context holds a state of the location list, which we can reach from any
 * area of the project, and update. The reducer is the one in charge of the specific
 * commands we can perform on that state.
 * @param state the state on which we make changes
 * @param action the change to be performed
 * @returns  the state after being updated
 */
function locationReducer(state, action) {
    switch (action.type) {
        case 'add': { //add a new location to the location list
            return {locationList: [...state.locationList, action.location]}
        }
        case 'delete': { //remove a location from the location list
            return {locationList: state.locationList.filter(element => element.name !== action.locationToDelete)}
        }
        default: {
            throw new Error(`action type: ${action.type} not optional`)
        }
    }
}

/**
 * The LocationProvider is the one to apply the ability to access the context from
 * anywhere in the code
 * @param children any component we want to have access to the context
 * @returns {JSX.Element}
 * @constructor apply the reducer
 */
function LocationProvider({children}) {
    const [state, dispatch] = React.useReducer(locationReducer, {locationList: []})
    const value = {state, dispatch}
    return (
        <LocationContext.Provider value={value}>
            {children}
        </LocationContext.Provider>
    )
}

/**
 * This function is our way to use the state inside the context
 * @returns context
 */
function useLocation() {
    const context = React.useContext(LocationContext)
    if (context === undefined) {
        throw new Error('useLocation must be used within a LocationProvider')
    }
    return context
}

export {LocationProvider, useLocation}