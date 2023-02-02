import {Box, Tooltip, Typography} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function OrderSizeLabel() {
    return (
        <Box display="flex" alignItems="center" gap={0.5}>
            <Typography component="label" fontSize={20}>
                Order size
            </Typography>
            <Tooltip
                title="The total number of T-shirts you plan to order."
                arrow={true}
                placement="top"
            >
                <HelpOutlineIcon/>
            </Tooltip>
        </Box>
    )
}

export default OrderSizeLabel;
