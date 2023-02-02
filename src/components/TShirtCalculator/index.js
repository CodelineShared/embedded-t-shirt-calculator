import {createContext, useContext, useState} from 'react';
import {Box} from "@mui/material";
import OrderSizeInputGroup from "./Helpers/OrderSizeInputGroup";
import OrderSizesGroup from "./Helpers/OrderSizesGroup";

export const TShirtCalculatorContext = createContext({
    orderSize: 0,
    setOrderSize: (value) => {}
});
export const useTShirtCalculatorContext = () =>
    useContext(TShirtCalculatorContext);

function TShirtCalculator({ maxWidth = '500px' }) {
    const [orderSize, setOrderSize] = useState(0);
    const initialContext = { orderSize, setOrderSize };

    return (
        <TShirtCalculatorContext.Provider value={initialContext}>
            <Box maxWidth={maxWidth}
                 minWidth="200px"
                 backgroundColor="primary.main"
                 display="flex"
                 flexDirection="column"
                 color="white"
                 borderRadius={6}
                 padding={4}
                 gap={4}
            >
                <OrderSizeInputGroup />
                <OrderSizesGroup />
            </Box>
        </TShirtCalculatorContext.Provider>
  );
}

export default TShirtCalculator;
