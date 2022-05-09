import { Card, CardContent, Typography } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export function Inning({ inning, top }: { inning: number; top: boolean }) {
  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "16px !important",
        }}
      >
        <Typography variant="h5">{inning}</Typography>
        {top ? <ArrowUpward /> : <ArrowDownward />}
      </CardContent>
    </Card>
  );
}
