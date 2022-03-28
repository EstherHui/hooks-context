import React from 'react'
import ComponentC from './component/ComponentC'
import './App.css'


export const UserContext = React.createContext()//1.create context
export const ChannelContext = React.createContext()

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={'Vishwas'}>{/**provide context value in high level*/}
        <ChannelContext.Provider value={'Codevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default App