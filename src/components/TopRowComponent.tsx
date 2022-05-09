import { AddCircle, RemoveCircle } from "@mui/icons-material";
import {
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export function TopRowComponent({
  displayName,
  count,
  setCount,
}: {
  displayName: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const minimumNumber = displayName === "Inning" ? 1 : 0;

  function handleClick(value: number) {
    if (count + value < minimumNumber) return;
    setCount(() => count + value);
  }

  return (
    <Grid item textAlign="center" flexGrow={1}>
      <Card
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <CardHeader title={displayName} />
        <CardContent>
          <Typography variant="h5">{count}</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup variant="text" size="large">
            <IconButton sx={{ color: "blue" }} onClick={() => handleClick(1)}>
              <AddCircle />
            </IconButton>
            <IconButton
              sx={{ color: "red" }}
              onClick={() => handleClick(-1)}
              disabled={count === minimumNumber}
            >
              <RemoveCircle />
            </IconButton>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
}
