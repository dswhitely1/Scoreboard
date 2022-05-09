import { Card, CardContent, Typography } from "@mui/material";

export function TeamScore({
  teamName,
  score,
}: {
  teamName: string;
  score: number;
}) {
  return (
    <Card sx={{ flexGrow: 1, justifyContent: "space-between", width: 120 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "16px !important",
        }}
      >
        <Typography variant="h6">{teamName.toUpperCase()}</Typography>
        <Typography variant="h6">{score}</Typography>
      </CardContent>
    </Card>
  );
}
