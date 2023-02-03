import {Box, TextField, Typography} from "@mui/material";
import {APPLY_SHARE_REMAINDER_TO, SIZE_SHARES} from "../../variables";
import {makeStyles} from "@material-ui/core/styles";
import {formatNumber} from "../../../../helpers";
import {useTShirtCalculatorContext} from "../../index";

const useStyles = makeStyles({
    input: {
        '& input[disabled]': {
            'text-align': 'center'
        },
    },
});

function Size({ size, total }) {
    const classes = useStyles();
    const { remainder } = useTShirtCalculatorContext();

    const share = SIZE_SHARES.get(size || 0);
    const value = Math.floor(share * total);

    function renderShareValue() {
        if(APPLY_SHARE_REMAINDER_TO === size) {
            return formatNumber(value + remainder);
        }

        return formatNumber(value);
    }

    return (
        <Box display="flex"
             flexDirection="column"
             alignItems="center"
             justifyContent="center"
             flex="1 1 80px"
             gap={1}
        >
            <Box backgroundColor="white" borderRadius={1}>
                <TextField
                    disabled
                    value={renderShareValue()}
                    className={classes.input}
                    aria-label={size}
                />
            </Box>
            <Typography
                component="label"
                fontWeight="bold"
                fontSize={20}
            >
                {size}
            </Typography>
        </Box>
    );
}

export default Size;
