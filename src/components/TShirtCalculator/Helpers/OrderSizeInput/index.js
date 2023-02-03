import {Box, IconButton, TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {useTShirtCalculatorContext} from "../../index";
import { NumericFormat } from "react-number-format";

const STEP = 10;
const MIN_ORDER_SIZE = 0;
const MAX_ORDER_SIZE = 1000000;

function OrderSizeInput() {
    const {orderSize, setOrderSize} = useTShirtCalculatorContext();

    function onIncrement() {
        const targetValue = orderSize + STEP;
        setValue(targetValue);
    }

    function onDecrement() {
        const targetValue = orderSize - STEP;
        setValue(targetValue);
    }

    function isIncrementDisabled() {
        return orderSize === MAX_ORDER_SIZE;
    }

    function isDecrementDisabled() {
        return orderSize === MIN_ORDER_SIZE;
    }

    function onChange(value) {
        value = parseInt(value);
        setValue(value);
    }

    function setValue(value) {
        if(isNaN(value)) {
            setOrderSize(0);
            return;
        }

        setOrderSize(value);
    }

    function isOrderSizeAllowed(values) {
        const { formattedValue, floatValue } = values

        switch (true) {
            case floatValue === null:
                return formattedValue === ''
            case floatValue < MIN_ORDER_SIZE:
                setValue(MIN_ORDER_SIZE);
                return false;
            case floatValue > MAX_ORDER_SIZE:
                setValue(MAX_ORDER_SIZE);
                return false;
            default:
                return true;
        }
    }

    return (
        <Box display="flex" alignItems="center">
            <IconButton
                color="inherit"
                aria-label="Remove 10 items"
                component="label"
                disabled={isDecrementDisabled()}
                onClick={onDecrement}
            >
                <RemoveIcon />
            </IconButton>
            <Box backgroundColor="white" borderRadius={1}>
                <NumericFormat
                    value={orderSize}
                    thousandSeparator
                    decimalScale={0}
                    allowNegative={false}
                    allowLeadingZeros={false}
                    customInput={TextField}
                    isAllowed={isOrderSizeAllowed}
                    onValueChange={(values) => {
                        onChange(values.value)
                    }}
                />
            </Box>
            <IconButton
                color="inherit"
                aria-label="Add 10 items"
                component="label"
                disabled={isIncrementDisabled()}
                onClick={onIncrement}
            >
                <AddIcon />
            </IconButton>
        </Box>
    )
}

export default OrderSizeInput;
