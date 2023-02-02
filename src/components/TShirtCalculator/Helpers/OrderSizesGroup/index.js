import {SIZES} from "../../variables";
import Size from "../Size";
import {Box} from "@mui/material";
import {useTShirtCalculatorContext} from "../../index";

function OrderSizesGroup() {
    const { orderSize } = useTShirtCalculatorContext();

    function renderSizes() {
        return SIZES.map((size) => <Size key={size} size={size} total={orderSize} />)
    }

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            gap={2}
        >
            {renderSizes()}
        </Box>
    )
}

export default OrderSizesGroup;
