import {Box} from "@mui/material";
import OrderSizeLabel from "../OrderSizeLabel";
import OrderSizeInput from "../OrderSizeInput";

function OrderSizeInputGroup() {
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            gap={2}
        >
            <OrderSizeLabel />
            <OrderSizeInput />
        </Box>
    )
}

export default OrderSizeInputGroup;
