import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import {
  Rating,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
export function BottomRowComponent({
  displayName,
  count,
  setCount,
}: {
  displayName: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const maxItems = displayName === "Balls" ? 3 : 2;
  function handleClick(value: number) {
    if (value) {
      if (value + count > maxItems) {
        return;
      }
      setCount(() => count + value);
    } else {
      if (count - value <= 0) {
        return;
      }
      setCount(() => count - value);
    }
  }
  return (
    <Grid item textAlign="center" flexGrow={1}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardHeader title={displayName} />
        <CardContent>
          <Rating
            name={displayName}
            max={maxItems}
            value={count}
            emptyIcon={
              <SportsBaseballIcon
                style={{ opacity: 0.55 }}
                fontSize="inherit"
              />
            }
            icon={
              <SportsBaseballIcon style={{ color: "red" }} fontSize="inherit" />
            }
            readOnly
          />
        </CardContent>
        <CardActions disableSpacing>
          <ButtonGroup variant="text" size="large">
            <IconButton sx={{ color: "blue" }} onClick={() => handleClick(1)}>
              <AddCircleIcon />
            </IconButton>
            <IconButton
              sx={{ color: "red" }}
              onClick={() => handleClick(-1)}
              disabled={count === 0}
            >
              <RemoveCircle />
            </IconButton>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
}
