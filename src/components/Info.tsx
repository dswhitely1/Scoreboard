import { Card, CardContent, Rating, Typography } from "@mui/material";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";

export function Info({
  displayName,
  count,
}: {
  displayName: string;
  count: number;
}) {
  const maxItems = displayName === "Balls" ? 3 : 2;
  return (
    <Card
      sx={{
        flexGrow: 1,
        justifyContent: "space-between",
        width: displayName === "Outs" ? 100 : 120,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "16px !important",
        }}
      >
        <Typography>{displayName}</Typography>
        <Rating
          name={displayName}
          max={maxItems}
          value={count}
          emptyIcon={
            <SportsBaseballIcon style={{ opacity: 0.55 }} fontSize="inherit" />
          }
          icon={
            <SportsBaseballIcon style={{ color: "red" }} fontSize="inherit" />
          }
          readOnly
        />
      </CardContent>
    </Card>
  );
}
