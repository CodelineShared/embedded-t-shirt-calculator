import {createContext, useContext, useEffect, useState} from 'react';
import {Box} from "@mui/material";
import OrderSizeInputGroup from "./Helpers/OrderSizeInputGroup";
import OrderSizesGroup from "./Helpers/OrderSizesGroup";
import {SHARES} from "./variables";
import {ROOT_ELEMENT_DEFAULT_MAX_WIDTH} from "../../index";

export const TShirtCalculatorContext = createContext({
    orderSize: 0,
    setOrderSize: (value) => {},

    remainder: 0,
    setRemainder: (value) => {},
});
export const useTShirtCalculatorContext = () =>
    useContext(TShirtCalculatorContext);

function TShirtCalculator({ maxWidth = ROOT_ELEMENT_DEFAULT_MAX_WIDTH }) {
    const [orderSize, setOrderSize] = useState(0);
    const [calculatedOrderSize, setCalculatedOrderSize] = useState(0);
    const [remainder, setRemainder] = useState(0);

    const initialContext = {
        orderSize, setOrderSize,
        remainder, setRemainder,
    };

    useEffect(() => {
        setCalculatedOrderSize(() => {
            return SHARES.reduce((acc, share) => {
                return acc + Math.floor(share * orderSize);
            }, 0);
        })

        return () => {
            setCalculatedOrderSize(0);
        }
    }, [orderSize]);

    useEffect(() => {
        setRemainder(orderSize - calculatedOrderSize)

        return () => {
            setRemainder(0);
        }
    }, [orderSize, calculatedOrderSize]);

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
