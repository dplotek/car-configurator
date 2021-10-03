import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [data, setData] = useState("");
	const [carConfig, setCarConfing] = useState({
		brand: "",
		model: "",
		engine: "",
	});

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				carConfig,
				setCarConfing,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
