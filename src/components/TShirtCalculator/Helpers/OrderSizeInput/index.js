import {Box, IconButton, TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {makeStyles} from "@material-ui/core/styles";
import {useTShirtCalculatorContext} from "../../index";

const useStyles = makeStyles({
    input: {
        '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    },
});

const STEP = 10;
const MIN_ORDER_SIZE = 0;
const MAX_ORDER_SIZE = 1000000;

function OrderSizeInput() {
    const {orderSize, setOrderSize} = useTShirtCalculatorContext();
    const classes = useStyles();

    function setValue(value) {
        if(isNaN(value)) {
            setOrderSize(0);
            return;
        }

        switch (true) {
            case value < MIN_ORDER_SIZE:
                setOrderSize(MIN_ORDER_SIZE);
                break;
            case value > MAX_ORDER_SIZE:
                setOrderSize(MAX_ORDER_SIZE);
                break;
            default:
                setOrderSize(value);
                break;
        }
    }

    function onIncrement() {
        const targetValue = orderSize + STEP;
        setValue(targetValue);
    }

    function onDecrement() {
        const targetValue = orderSize - STEP;
        setValue(targetValue);
    }

    function isDecrementDisabled() {
        return orderSize === 0;
    }

    function onChange(event) {
        const value = parseInt(event.target.value);
        setValue(value);
    }

    function valueFormatter() {
        return Number(orderSize).toString();
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
                <TextField
                    type="number"
                    className={classes.input}
                    value={valueFormatter()}
                    onChange={onChange}
                />
            </Box>
            <IconButton
                color="inherit"
                aria-label="Add 10 items"
                component="label"
                onClick={onIncrement}
            >
                <AddIcon />
            </IconButton>
        </Box>
    )
}

export default OrderSizeInput;
