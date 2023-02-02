import {Box, TextField, Typography} from "@mui/material";
import {SIZE_SHARES} from "../../variables";
import {makeStyles} from "@material-ui/core/styles";
import {formatNumber} from "../../../../helpers";

const useStyles = makeStyles({
    input: {
        '& input[disabled]': {
            'text-align': 'center'
        },
    },
});

function Size({ size, total }) {
    const classes = useStyles();
    const value = Math.floor(
        SIZE_SHARES.get(size || 0) * total
    );

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
                    value={formatNumber(value)}
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
